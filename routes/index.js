const express = require('express');
const router = express.Router();

/** Probando ruta  y su respuesta*/
// router.get('/', function(req, res) {
//     res.end('Hello word');
// });

router.get('/', function(req, res) {
    res.render('index');
});


module.exports = router;