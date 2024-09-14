import { Router } from "express";

const route = Router()

route.get('/', (req,res) =>{
    res.render('index', {title: 'Nelson Muquissi'})
})

route.get('/categoria', (req,res) => {
    res.send('Categoria')
})

export default route