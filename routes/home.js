import { Router } from "express";

const route = Router()

route.get('/', (req,res) =>{
    res.render('./pages/index', {title: 'Nelson Muquissi'})
})

route.get('/categoria', (req,res) => {
    res.send('./pages/Categoria')
})

export default route