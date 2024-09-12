import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'


const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.static('./public'))


export default app