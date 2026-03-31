import { ZodError } from "zod";
import AppError from "../error/AppError.js";

export function validarSchema(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (erro) {
      if (erro instanceof ZodError) {
        const detalhes = erro.issues.map(e => ({
          campo: e.path.join("."),
          mensagem: e.message
        }));

        return next(new AppError("Erro de validação", 400, detalhes));
      }

      next(erro);
    }
  };
}