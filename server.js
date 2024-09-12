import app from './index.js'

const PORT = process.env.PORT || 3000

app.listen(PORT , (error) => {
    if(error) return console.log({mensagemErro: "Erro ao ligar o servidor"})
    console.log(`Aplicação disponível em http://localhost:${PORT}`)
})