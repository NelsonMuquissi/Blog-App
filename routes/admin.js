import { Router } from "express";

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

export default route