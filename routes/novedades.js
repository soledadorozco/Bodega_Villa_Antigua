var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');

router.get('/',async function(req,res,next){

    var novedades  = await novedadesModel.getNovedades();
    res.render('novedades',{
        isNovedades: true,
        novedades //de esta forma ya tengo los registros para poder imprimir en el hbs
    }); // view/novedades.hbs
})


module.exports = router;