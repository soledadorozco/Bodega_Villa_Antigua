var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('nuestros_viñedos',{
        isNuestros_viñedos: true
    }); // view/nuestros_viñedos.hbs
})


module.exports = router;