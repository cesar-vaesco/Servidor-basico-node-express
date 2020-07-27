const express = require('express');
const path = require('path');
const app = express();
const colors = require('colors');


const routes = require('./routes');

/**Setting - configuraciónes*/

app.set('port', process.env.PORT || 3000);
//Configurar la ruta de las vistas
app.set('views', path.join(__dirname, 'views'));
//Configurar el motor de plantillas
app.set('view engine', 'ejs');

/**Middlewares */
//Se indica la url y el tipo de petición que se ha solicitado " '/' - GET "
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});

//se indica el tipo de respuesta que nos puede entregar el servidor
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/** routes */
app.use(routes);

/** static files */
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`.rainbow);
});