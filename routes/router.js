const express=require('express')
const router=express.Router()
const modelos=require('../db/db')

router.get('/', (req, res) => {
    res.send('welcome to my api 1 ')
})

router.get('/listar/registros', async(request, response) => {
    try {
        var result = await modelos.registroModel.find().exec();
        response.json(result); 

    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/agregar/resgistro", async(request, response) => {
    try {
        var curso = new modelos.registroModel(request.body);
        var result = await curso.save();
        //response.send(result);
        response.json(result)

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router