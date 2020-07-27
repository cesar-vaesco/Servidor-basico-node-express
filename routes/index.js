const express = require('express');
const router = express.Router();

/** Probando ruta  y su respuesta*/
// router.get('/', function(req, res) {
//     res.end('Hello word');
// });

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Mi tienda web'
    });
});


router.get('/productos', (req, res, next) => {
    res.render('productos', {
        title: 'Lista de productos'
    })
});


module.exports = router;