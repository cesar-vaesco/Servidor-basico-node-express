const express = require('express');
const router = express.Router();

const { index, ListaProductos, nuevoProducto } = require('../controllers/index');


router.get('/', index);

router.get('/productos', ListaProductos);

router.post('/nuevo-producto', nuevoProducto);

module.exports = router;