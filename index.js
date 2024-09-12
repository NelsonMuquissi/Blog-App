import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import createError from 'http-errors'
import admin from './routes/admin.js'


// Configuração do express

const app = express()
app.use(express.json())

// Configuração do bodyParser

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configuração da template engine

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(logger('dev'))

// Arquivos estáticos
app.use(express.static('./public'))

// Configuração das rotas

app.use('/admin', admin)


// Tratamento do erro
app.use((req,res,next) =>{
    next(createError(404))
})

app.use((err, req, res, next) =>{
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})


export default app