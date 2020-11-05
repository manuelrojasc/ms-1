const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017/registrodb?authSource=admin";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const registroModel = mongoose.model("registros", {
    id_alumno: { type: String, required: true },
    id_curso: { type: String, required: true },
    asistencia: { type: String, required: true },
    registro: { type: Date, default: Date.now }
});

module.exports = {
    registroModel
}