const express = require("express");
const morgan = require("morgan");
const multer = require("multer")
const mysql = require("mysql2");
const myConnection = require("express-myconnection");
const path = require('path');
const app = express();
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;

const customerRoutes = require('./routes/customer');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
const upload = multer();
app.use(upload.none());

app.use(express.urlencoded({ extended: true }));

app.use(myConnection(mysql, {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: 'projekat1'
}, 'single'));

app.use('/', customerRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})