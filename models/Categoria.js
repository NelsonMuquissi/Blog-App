import { type } from "jquery";
import mongoose from "../database/conexao.js";

const Schema = mongoose.Schema()

const Categoria = new Schema({
    nome:{
        type:STRING,
        required:true
    },

    slog:{
        type:STRING,
        required: true
    }, 

    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('categorias', Categoria )