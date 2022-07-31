var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('nuestros_vinos',{
        isNuestros_vinos: true
    }); // view/nuestros_vinos.hbs
})


module.exports = router;