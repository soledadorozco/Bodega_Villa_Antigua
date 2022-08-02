var express = require('express');
var router = express.Router();
var novedadesModel = require ('../../models/novedadesModel');

//diseño y listado de novedades
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render('admin/novedades',{
    layout:'admin/layout', // admin/layout.hbs
    persona:req.session.nombre, // falvia, soledad
    novedades // si novedades está acá en minúscula, cuando la llame en el hbs tiene que ser con minúscula
  }); // view/admin/novedades.hbs
}); //cierro get

//=> o function
// esto sirve para mostrar form el alta de las novedades
router.get('/agregar',(req,res,next) =>{
  res.render('admin/agregar',{ // agregar.hbs
    layout: 'admin/layout'
  })

})
module.exports = router;