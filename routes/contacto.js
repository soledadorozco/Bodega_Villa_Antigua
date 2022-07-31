var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req,res,next){
    res.render('contacto',{
        isContacto: true
    }); // view/contacto.hbs
})

router.post('/', async function(req,res,next){
    console.log(req.body)

    //capturando los datos
    var nombre = req.body.nombre; //1
    var correo_electronico = req.body.correo_electronico; //2
    var telefono = req.body.telefono; //3
    var pais = req.body.pais; //4
    var asunto = req.body.asunto; //5
    var comentario = req.body.comentario; //6
    // console.log(req.body.nombre)
    var obj = {
        to:'soledadorozco8@gmail.com',
        subject:'Contacto desde la pagina web',
        html:nombre + " se contacto a traves de la web y quiere saber mas info a este correo: " + correo_electronico + ".<br> Su telefono es: " + telefono + ". Su comentario es " + comentario
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }) //finaliza el transport

    var info = await transport.sendMail(obj);
    res.render('contacto',{
        message: '¡¡Mensaje enviado exitosamente!!',
        isContacto: true
    })

}) //finaliza router.post


module.exports = router;