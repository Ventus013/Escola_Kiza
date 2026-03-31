import pool from "../database/connection.js"
import tratarErroPostgres from "../error/errosPostgres.js";

class AlunosRepository {

    static async cadastrarAluno(dados) {
        const { nome, idade, responsavel, turma, cpf, telefone_responsavel, sexo } = dados;
        try {

            const resultado = await pool.query(`
                INSERT INTO alunos (nome, idade, responsavel, turma, cpf, telefone_responsavel, sexo)
                VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7
                )
                RETURNING *
                `,
                [nome, idade, responsavel, turma, cpf, telefone_responsavel, sexo])

            return resultado.rows[0]
        } catch (erro) {
            throw tratarErroPostgres(erro)
        }
    };

    static async listarAlunos(filtros) {
        const turma = filtros.turma ?? null;
        const idade = filtros.idade ? Number(filtros.idade) : null;
        const sexo = filtros.sexo ?? null;

        try {

            const resultado = await pool.query(`
                SELECT *
                FROM alunos
                WHERE 
                    ($1::text IS NULL OR turma = $1)
                AND ($2::int IS NULL OR idade = $2)
                AND ($3::sexo_alunos IS NULL OR sexo = $3)
                `,
                [turma, idade, sexo])

            return resultado.rows
        } catch (erro) {
            throw tratarErroPostgres(erro)
        }
    };

    static async editarAluno(id, dados) {
        const aluno = Number(id)
        const { nome, idade, responsavel, turma, cpf, telefone_responsavel, sexo } = dados;

        try {
            const resultado = await pool.query(`
                UPDATE alunos
                SET 
                    nome = COALESCE($1, nome),
                    idade = COALESCE($2, idade),
                    responsavel = COALESCE($3, responsavel),
                    turma = COALESCE($4, turma),
                    cpf = COALESCE($5, cpf),
                    telefone_responsavel = COALESCE($6, telefone_responsavel),
                    sexo = COALESCE($7, sexo)
                WHERE id = $8
                RETURNING *
                `,
                [nome, idade, responsavel, turma, cpf, telefone_responsavel, sexo, aluno])

            return resultado.rows[0]
        } catch (erro) {
            throw tratarErroPostgres(erro)
        }
    };

    static async deletarAluno(id) {
        const aluno = Number(id);

        const resultado = await pool.query(`
            DELETE
            FROM alunos
            WHERE id = $1
            RETURNING *`,
            [aluno])

        return resultado.rows[0]
    };

    static async buscarAlunoPorId(id){
        const aluno = Number(id)

        const resultado = await pool.query(`
            SELECT *
            FROM alunos
            WHERE id = $1
            `,
            [aluno])

            return resultado.rows[0]
    }
}

export default AlunosRepository;