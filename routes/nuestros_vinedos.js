var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('nuestros_vinedos',{
        isNuestros_vinedos: true
    }); // view/nuestros_vinedos.hbs
})


module.exports = router;