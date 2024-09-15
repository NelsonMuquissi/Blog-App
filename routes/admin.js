import { Router } from "express";
import mongoose from 'mongoose'
import Categoria from "../models/Categoria.js";

const Categorias = mongoose.model('categorias') 


const route = Router()

let erros = []

route.get('/', (req, res) =>{
    res.render('./admin/index')
})

route.get('/categorias', (req,res) =>{
    res.render('./admin/categorias')
})

route.get('/categoria/add', (req, res) => {
    res.render('./admin/addcategorias',{erros})
})

route.post('/categoria/nova', (req,res) => {
    erros = []
    const novacategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }



    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
            erros.push({texto: "Nome inválido"})
        }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"})
    }

    if(req.body.nome.length < 3){
        erros.push({texto: "Tamaho so nome não aceitável"})
    }

      
        const err = erros
        console.log("tipo de dados:", typeof (erros))

        console.log("Tipo de dados :", typeof err)
        const erro = [1,2,3,4,5,5]
     
        res.render("./admin/addcategorias", {erros:erros});



    new Categorias(novacategoria).save().then(() => {
        console.log("Categoria salva com sucesso")
    }).catch((error) =>{
        console.log("Erro ao cadastrar categoria", error)
    })
})

export default route