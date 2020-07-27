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


/** routes */
app.use(routes);

/** static files */
app.use(express.static(path.join(__dirname, 'public')));


// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`.rainbow);
});