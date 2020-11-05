const express=require('express')
const router=express.Router()
const modelos=require('../db/db')

router.get('/', (req, res) => {
    res.send('welcome to my api ')
})

router.get('/listar/cursos', async(request, response) => {
    try {
        var result = await modelos.cursoModel.find().exec();
        response.json(result); 

    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/registrar/cursos", async(request, response) => {
    try {
        var curso = new modelos.cursoModel(request.body);
        var result = await curso.save();
        //response.send(result);
        response.json(result)

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router