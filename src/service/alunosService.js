import AlunosRepository from "../repository/alunosRepository.js";
import AppError from "../error/AppError.js";

class AlunosService {

    static async cadastrarAluno(dados) {
        return await AlunosRepository.cadastrarAluno(dados);
    };

    static async listarAlunos(filtros) {
        return AlunosRepository.listarAlunos(filtros);
    };

    static async editarAluno(id, dados) {
        const alunoExistente = await this.buscarAlunoPorId(id)

        if(!alunoExistente){
            throw new AppError("Aluno não encontrado", 404)
        }

        return await AlunosRepository.editarAluno(id, dados);
    };

    static async deletarAluno(id) {
        const alunoExistente = await this.buscarAlunoPorId(id)

        if(!alunoExistente){
            throw new AppError("Aluno não encontrado", 404)
        }
        
        return await AlunosRepository.deletarAluno(id);
    };

    static async buscarAlunoPorId(id){
        return await AlunosRepository.buscarAlunoPorId(id)
    }
}

export default AlunosService