import AppError from "../error/AppError.js";

export default function errorHandler(error, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            erro: error.message,
        });
    }

    return res.status(500).json({
        erro: "Erro interno do servidor!"
    })
}