import mongoose from 'mongoose'

mongoose.Promise = global.Promise 

mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then(() => {
    console.log("Conectado com sucesso");
  })
  .catch((error) => {
    console.log({ "Houve um erro ao se conectar com o mongodb": error });
  });