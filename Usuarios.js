const express = require("express");
const router = express.Router();


const listaUsuarios=[
    {
       id: 1,
       user: 'ester',
       senha: '123' 
    }
]

router.get('/', (req, res) =>{
    res.send(selecionarUsuario());
})

function selecionarUsuario(){
    return listaUsuarios;
}

router.get('/login', (req, res)=>{
    const usuario = req.body;
    res.send(selecionarLogin(usuario))
})

function selecionarLogin(usuario) {
    for(let login of listaUsuarios){
        if(login.user == usuario.user && login.senha == usuario.senha){
            let autorizado=true;
            return autorizado;
        }else{
            console.log("Não possui login!!")
            autorizado =false;
            return autorizado;
        }
    }
}

router.post('/', (req, res) => {
    const usuarios = req.body
    if (usuarios.user != "" && usuarios.senha != "") {
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
    selecionarUsuario,
    deletarUsuario
}