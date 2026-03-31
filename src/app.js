import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import routesAlunos from "./router/alunosRoutes.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/alunos",routesAlunos)


app.use(errorHandler)
export default app