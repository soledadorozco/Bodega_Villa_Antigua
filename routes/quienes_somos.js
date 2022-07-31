var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('quienes_somos',{
        isQuienes_somos: true
    }); // view/quienes_somos.hbs
})


module.exports = router;