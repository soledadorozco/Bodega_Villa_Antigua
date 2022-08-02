var express = require('express');
var router = express.Router();
var novedadesModel = require ('../../models/novedadesModel');

router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render('admin/novedades',{
    layout:'admin/layout', // admin/layout.hbs
    persona:req.session.nombre, // falvia, soledad
    novedades // si novedades está acá en minúscula, cuando la llame en el hbs tiene que ser con minúscula
  }); // view/admin/novedades.hbs
}); //cierro get

module.exports = router;