const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');




require('dotenv').config();

require('./db');

const app = express();



const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const authRoutes = require('./routes/auth')
const entrepriseRoutes = require('./routes/entreprise')

app.use('/', authRoutes);
app.use('/entr', entrepriseRoutes);

app.use(cookieParser());

module.exports = app;