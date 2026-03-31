import AlunosService from "../service/alunosService.js";

class AlunosController {

    static async cadastrarAluno(req, res){
        const dados = req.body;

        const resultado = await AlunosService.cadastrarAluno(dados);
        return res.status(201).json({
            message: "Aluno cadastrado com sucesso:",
            data: resultado
        });
    };

    static async listarAlunos(req, res){
        const filtros = req.query;

        const resultado = await AlunosService.listarAlunos(filtros);
        return res.status(200).json({
            message: "Lista de alunos:",
            data: resultado
        });
    };

    static async editarAluno(req, res){
        const id = req.params.id;
        const dados = req.body;

        const resultado = await AlunosService.editarAluno(id, dados);
        return res.status(200).json({
            message: "Aluno editado com sucesso:",
            data: resultado
        });
    };

    static async deletarAluno(req, res){
        const id = req.params.id;

        const resultado = await AlunosService.deletarAluno(id);
        return res.status(200).json({
            message: "Aluno deletado com sucesso",
            data: resultado
        });
    };
};

export default AlunosController;