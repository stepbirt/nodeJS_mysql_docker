import express  from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Respones from './domain/respones.js';
import logger from './util/logger.js';
import HttpStatus from './controller/test.controller.js';
import testRoutes from './route/test.route.js'; 

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());


app.use('/tests',testRoutes)
app.get('/', (req,res) =>  res.send( new Respones(HttpStatus.OK.code, HttpStatus.OK.status, 'TEST API, V1.0.0',{ object: {name : 'Hi'}})));
app.all('*', (req,res) => res.status(HttpStatus.NOT_FOUND.code)
    .send( new Respones(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route not found')));
//console.log(process.env);
app.listen(PORT, () => logger.info(`Server running on : ${ip.address()}:${PORT}`));