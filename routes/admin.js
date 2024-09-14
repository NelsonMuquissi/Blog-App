import { Router } from "express";
import mongoose from 'mongoose'
import Categoria from "../models/Categoria.js";

const Categorias = mongoose.model('categorias') 


const route = Router()

route.get('/', (req, res) =>{
    res.render('./admin/index')
})

route.get('/categorias', (req,res) =>{
    res.render('./admin/categorias')
})

route.get('/categoria/add', (req, res) => {
    res.render('./admin/addcategorias')
})

route.post('/categoria/nova', (req,res) => {
    const novacategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categorias(novacategoria).save().then(() => {
        console.log("Categoria salva com sucesso")
    }).catch((error) =>{
        console.log("Erro ao cadastrar categoria", error)
    })
})

export default route