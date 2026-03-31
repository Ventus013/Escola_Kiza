import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import AlunosController from "../controller/alunosController.js";
import { validarSchema } from "../middleware/validarSchema.js";
import { cadastroAlunos, editarAluno } from "../schema/alunosSchema.js";

const routesAlunos = express.Router();

routesAlunos.post("/", validarSchema(cadastroAlunos), asyncHandler(AlunosController.cadastrarAluno));
routesAlunos.get("/", asyncHandler(AlunosController.listarAlunos));
routesAlunos.patch("/:id", validarSchema(editarAluno), asyncHandler(AlunosController.editarAluno));
routesAlunos.delete("/:id", asyncHandler(AlunosController.deletarAluno));

export default routesAlunos