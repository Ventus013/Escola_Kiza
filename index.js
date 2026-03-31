import "dotenv/config"
import app from "./src/app.js";
import pool from "./src/database/connection.js";

app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta http://localhost:${process.env.PORT}`)

    pool.connect(() => {
        console.log("BD conectado com sucesso")
    })
});

