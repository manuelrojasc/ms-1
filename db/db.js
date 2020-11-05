const mongoose = require('mongoose')
const uri = "mongodb://root:root@localhost:27017/cursodb?authSource=admin";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const cursoModel = mongoose.model("cursos", {
    codigo: String,
    nombre: String,
    creditos: String
});

module.exports = {
    cursoModel
}