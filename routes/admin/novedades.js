var express = require('express');
var router = express.Router();
var novedadesModel = require ('../../models/novedadesModel');

//diseño y listado de novedades
router.get('/', async function(req, res, next) {
  // var novedades = await novedadesModel.getNovedades();
var novedades
if(req.query.q === undefined){
  novedades = await novedadesModel.getNovedades();
}else{
  novedades = await novedadesModel.buscarNovedades(req.query.q);
}

  res.render('admin/novedades',{
    layout:'admin/layout', // admin/layout.hbs
    persona:req.session.nombre, // falvia, soledad
    novedades, // si novedades está acá en minúscula, cuando la llame en el hbs tiene que ser con minúscula
    q:req.query.q,
    is_search: req.query.q !== undefined
  }); // view/admin/novedades.hbs
}); //cierro get

//=> o function
// esto sirve para mostrar form el alta de las novedades
router.get('/agregar',(req,res,next) =>{
  res.render('admin/agregar',{ // agregar.hbs
    layout: 'admin/layout'
  })

})


//agregar una novedad
router.post('/agregar', async (req,res,next) =>{
  // console.log(req.body)
  try{
      if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
        await novedadesModel.insertNovedades(req.body);
        res.redirect('/admin/novedades')
      } else{
            res.render('admin/agregar',{
              layout:'admin/layout',
              error:true,
              message: '* Todos los campos son requeridos'
            })
      }

  }catch(error){
    console.log(error);
    res.render('admin/agregar',{
      layout:'admin/layout',
      error:true,
      message: '* No se carga la novedad'
    })


  }
})


//eliminar una novedad
router.get('/eliminar/:id', async(req,res,next) =>{
  // console.log(req.params.id); //params porque estamos pasando solamente un id, es un parametro
  var id = req.params.id;
  await novedadesModel.deleteNovedadByID(id)
  res.redirect('/admin/novedades')
})

//vista modificar (form) + los datos de los campos para modificar
router.get('/modificar/:id', async(req,res,next) =>{
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesByID(id);
  console.log(novedad)
  res.render('admin/modificar',{
      layout:'admin/layout',
      novedad
  })
})

//actualizacion de los datos
router.post('/modificar', async(req,res,next) =>{
   try{
        var obj = {
          titulo:req.body.titulo,
          subtitulo:req.body.subtitulo,
          cuerpo:req.body.cuerpo
        }
        console.log(obj)
        console.log(req.body.id)
        
        await novedadesModel.modificarNovedadByID(obj, req.body.id)
        res.redirect('/admin/novedades');  
   }catch(error){
      console.log(error)
      res.render('admin/modificar',{
        layout:'admin/layout',
        error: true,
        message:'* No se modifico la novedad'
      })
   }
})

module.exports = router;