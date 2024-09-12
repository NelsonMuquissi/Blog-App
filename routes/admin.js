import { Router } from "express";

const route = Router()

route.get('/', (req, res) =>{
    res.send("Página inicial do ADM")
})

route.get('/post', (req,res) =>{
    res.send("Lista de posts")
})

route.get('/cadastro', (req,res) => {
    res.send('Cadastrar')
})
export default route