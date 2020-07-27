const express = require('express');
const router = express.Router();

const { index, ListaProductos, nuevoProducto } = require('../controllers/index');
/** Probando ruta  y su respuesta*/
// router.get('/', function(req, res) {
//     res.end('Hello word');
// });



router.get('/', index);

router.get('/productos', ListaProductos);

router.post('/nuevo-producto', nuevoProducto);

module.exports = router;