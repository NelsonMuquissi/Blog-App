import { Router } from "express";

const route = Router()

route.get('/', (req,res) =>{
    res.render('index', {title: 'Blog App'})
})

route.get('/categoria', (req,res) => {
    res.send('Categoria')
})

export default route