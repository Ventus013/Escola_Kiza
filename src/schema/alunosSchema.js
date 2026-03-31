import { z } from "zod";

export const cadastroAlunos = z.object({
    nome: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "Nome deve ser uma string"
    }).trim().min(1, "Nome é obrigatório"),

    idade: z.coerce.number({
        invalid_type_error: "Idade deve ser um número"
    })
        .int("Idade deve ser um número inteiro")
        .min(0, "Idade não pode ser negativa")
        .max(120, "Idade inválida"),

    responsavel: z.string({
        required_error: "Responsável é obrigatório",
        invalid_type_error: "Responsável deve ser um texto"
    }).trim().min(1, "Responsável é obrigatório"),

    turma: z.string({
        required_error: "Turma é obrigatória",
        invalid_type_error: "Turma deve ser um texto"
    }).trim().min(1, "Turma é obrigatória"),

    cpf: z.string({
        required_error: "CPF é obrigatório",
        invalid_type_error: "CPF deve ser uma string"
    }).trim().min(1, "CPF é obrigatório"),

    telefone_responsavel: z.string({
        required_error: "Telefone é obrigatório",
        invalid_type_error: "Telefone deve ser uma string"
    }).trim().min(1, "Telefone é obrigatório"),

    sexo: z.string()
        .transform(val => val.toUpperCase())
        .refine(val => ["MASCULINO", "FEMININO"].includes(val), {
            message: "Sexo inválido"
        })
});

export const editarAluno = z.object({
    nome: z.string({
        invalid_type_error: "Nome deve ser uma string"
    }).trim().min(1, "Nome é obrigatório").optional(),

    idade: z.coerce.number({
        invalid_type_error: "Idade deve ser um número"
    })
        .int("Idade deve ser um número inteiro")
        .min(0, "Idade não pode ser negativa")
        .max(120, "Idade inválida").optional(),

    responsavel: z.string({
        invalid_type_error: "Responsável deve ser um texto"
    }).trim().min(1, "Responsável é obrigatório").optional(),

    turma: z.string({
        invalid_type_error: "Turma deve ser um texto"
    }).trim().min(1, "Turma é obrigatória").optional(),

    cpf: z.string({
        invalid_type_error: "CPF deve ser uma string"
    }).trim().min(1, "CPF é obrigatório").optional(),

    telefone_responsavel: z.string({
        invalid_type_error: "Telefone deve ser uma string"
    }).trim().min(1, "Telefone é obrigatório").optional(),

    sexo: z.string()
        .transform(val => val.toUpperCase())
        .refine(val => ["MASCULINO", "FEMININO"].includes(val), {
            message: "Sexo inválido"
        }).optional()
}).strict().refine(
  data => Object.keys(data).length > 0,
  { message: "Envie ao menos um campo para edição" }
);

export default { cadastroAlunos, editarAluno }