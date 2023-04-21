const express = require('express');

// * Conexion a la base de datos
const { dbConnection } = require('./database/config');


//* Creando el servidor de express
const app = express();

dbConnection();