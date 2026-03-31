import AppError from "../error/AppError.js";

function tratarErroPostgres(erro) {

    console.error("ERRO ORIGINAL DO POSTGRES:", erro);

    switch (erro.code) {

        case "23505":
            return new AppError("Registro duplicado", 409);

        case "23503":
            return new AppError("Referência inválida", 400);

        case "23502":
            return new AppError("Campo obrigatório não informado", 400);

        case "22P02":
            return new AppError("Formato inválido de dado", 400);

        case "22001":
            return new AppError("Valor muito longo", 400);

        default:
            return new AppError("Erro interno no banco de dados", 500);
    }
}

export default tratarErroPostgres;