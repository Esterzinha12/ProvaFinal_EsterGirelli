const express = require("express");
const app = express();
const port= process.env.PORT || 3000;

const usuarios = require("./Usuarios");

app.use(express.json());
app.use('/usuarios', usuarios.router);

app.listen(port, () => console.log("Porta", port));

app.get("/",  (req, res) => {
    res.send("Rodando");
});