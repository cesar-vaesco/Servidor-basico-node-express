const express = require('express');
const app = express();
const colors = require('colors');

//Setting - configuraciónes
app.set('port', process.env.PORT || 3000);

//Middlewares


//routes

//static files



// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`.rainbow);
});