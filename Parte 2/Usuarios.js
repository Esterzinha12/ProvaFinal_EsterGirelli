const express = require("express");
const router = express.Router();


const listaUsuarios = [
    {
        id: 1,
        usuario: 'ester',
        senha: '123'
    }
]

router.get('/', (req, res) => {
    res.send(selecionarUsuarios());
})

function selecionarUsuarios() {
    return listaUsuarios;
}

router.get('/login', (req, res) => {
    const usuario = req.body;
    res.send(selecionarLogin(usuario))
})

function selecionarLogin(usuario) {
    let autorizado = false;
    for (let login of listaUsuarios) {
        if (login.usuario == usuario.usuario && login.senha == usuario.senha) {
            autorizado = true;
            console.log("Possui login!");
            return autorizado;
        }
    }
    console.log("Não possui login!");
    return autorizado;
}

router.post('/', (req, res) => {
    const usuarios = req.body
    if (usuarios.usuario != "" && usuarios.senha != "") {
        res.json(adicionarUsuario(usuarios))
    } else {
        return "Campos não inseridos!";
    }
})

function adicionarUsuario(usuarios) {
    usuarios.id = listaUsuarios.length + 1
    listaUsuarios.push(usuarios)
    return usuarios
}

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json(deletarUsuario(id))
})

function deletarUsuario(id) {
    const index = listaUsuarios.findIndex(p => p.id == id)
    listaUsuarios.splice(index, 1)
    return listaUsuarios
}

module.exports = {
    router,
    selecionarLogin,
    deletarUsuario
}