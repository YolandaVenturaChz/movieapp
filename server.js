const express = require('express');
const app = express();

const  server = app.listen (4545,encender);

function encender(){ // funcion callback
    console.log('servidor encendido');

    
}
app.use(express.static('public'));
