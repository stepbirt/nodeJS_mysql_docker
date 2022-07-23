 import database from '../config/mysql.config.js';
 import Respones from '../domain/respones.js';
 import logger from '../util/logger.js'; 
 import QUERY  from '../query/test.query.js';

 const HttpStatus = {
    OK: {code: 200,status: 'OK'},
    CREATED: {code: 201,status: 'CREATED'},
    NO_CONTENT: {code: 204,status: 'NO_CONTENT'},
    BAD_REQUEST: {code: 400,status: 'BAD_REQUEST'},
    NOT_FOUND: {code: 404,status: 'NOT_FOUND'},
    INTERNAL_SERVER_ERROR: {code: 500,status: 'INTERNAL_SERVER_ERROR'},
 }

export const getTests = (req,res) =>{
     logger.info(`${req.method} ${req.originalUrl}, feaching tests`);
     database.query(QUERY.SELECT_TESTS, (error, results) => {
        if(!results){
            res.status(HttpStatus.OK.code).
                send(new Respones(HttpStatus.OK.code, HttpStatus.OK.status, `NO tests  found`))
        }
        else{
            res.status(HttpStatus.OK.code).
                send(new Respones(HttpStatus.OK.code, HttpStatus.OK.status, `test  retrieved`, { test : results }))
        }
     })
}

export const getTest = (req,res) =>{
     logger.info(`${req.method} ${req.originalUrl}, feaching test`);
     database.query(QUERY.SELECT_TEST, [req.params.id], (error, results) => {
        if(!results[0]){
            res.status(HttpStatus.NOT_FOUND.code).
                send(new Respones(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `test by id ${req.params.id} was not found`));
        }
        else{
            res.status(HttpStatus.OK.code).
                send(new Respones(HttpStatus.OK.code, HttpStatus.OK.status, `test  retrived`, results[0])); 
        }
     })
}

export const updateTest = (req,res) =>{
    logger.info(`${req.method} ${req.originalUrl}, feaching test`);
    database.query(QUERY.SELECT_TEST, [req.params.id], (error, results) => {
       if(!results[0]){
           res.status(HttpStatus.NOT_FOUND.code).
               send(new Respones(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `test by id ${req.params.id} was not found`));
       }
       else{
            logger.info(`Update test`)
            database.query(QUERY.UPDATE_TEST, [...Object.values(req.body), req.params.id]  , (error, results) => {
                console.log(error);
                if(!error){
                    res.status(HttpStatus.OK.code).
                        send(new Respones(HttpStatus.OK.code, HttpStatus.OK.status, `test updated `, {id:req.params.id, ...req.body})) ; 
                }
                else{
                    logger.error(error.message.code); 
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).
                        send(new Respones(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error occured`));
                }
            })
       }
    })
}

export const createTest = (req,res) =>{
    logger.info(`${req.method} ${req.originalUrl}, create test`);
    //database.query(QUERY.CREATE_TEST, Object.values(req.body), (error, results) => {
    database.query(QUERY.CREATE_TEST_PROCEDURE, Object.values(req.body), (error, results) => {
       if(!results){
        logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).
               send(new Respones(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error occured`))
       }
       else{
            //const test = {id : results.insertId, ...req.body, created_at : new Date()};
            const test = results[0][0];
            res.status(HttpStatus.CREATED.code).
               send(new Respones(HttpStatus.CREATED.code, HttpStatus.CREATED.status, `Created test`, { test }))
       }
    })
}

export const deleteTest  = (req,res) =>{
    logger.info(`${req.method} ${req.originalUrl}, delete test`);
    database.query(QUERY.DELETE_TEST,[req.params.id ] , (error, results) => {
       if(results.affectedRows > 0){
        res.status(HttpStatus.OK.code).
            send(new Respones(HttpStatus.OK.code, HttpStatus.OK.status, `test was delete`, results[0]))
       }
       else{
        res.status(HttpStatus.NOT_FOUND.code).
               send(new Respones(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `test was not found`))
       }
    })
}

export default HttpStatus;