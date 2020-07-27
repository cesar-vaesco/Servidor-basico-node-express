const express = require('express');
const router = express.Router();

/** Probando ruta  y su respuesta*/
// router.get('/', function(req, res) {
//     res.end('Hello word');
// });

const items = [{
        id: 1,
        nombre: 'producto1'
    },
    {
        id: 2,
        nombre: 'producto2'
    },
    {
        id: 3,
        nombre: 'producto3'
    },
    {
        id: 4,
        nombre: 'producto4'
    },
    {
        id: 5,
        nombre: 'producto5'
    },
    {
        id: 6,
        nombre: 'producto6'
    },

]

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Mi tienda web'

    });
});


router.get('/productos', (req, res, next) => {
    res.render('productos', {
        title: 'Lista de productos',
        items: items
    })
});

router.post('/nuevo-producto', (req, res, next) => {
    const { nuevoProducto } = req.body;
    items.push({
        id: items.length + 1,
        nombre: nuevoProducto
    });
    res.redirect('/productos');

});

module.exports = router;