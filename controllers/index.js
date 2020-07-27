const productos = [{
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
    }
]


const index = (req, res) => {
    res.render('index', {
        title: 'Mi tienda web'

    });
}

const ListaProductos = (req, res, next) => {
    res.render('productos', {
        title: 'Lista de productos',
        productos: productos
    })
}

const nuevoProducto = (req, res, next) => {
    const { nuevoProducto } = req.body;
    productos.push({
        id: productos.length + 1,
        nombre: nuevoProducto
    });
    res.redirect('/productos');

}

module.exports = {
    index,
    ListaProductos,
    nuevoProducto
}