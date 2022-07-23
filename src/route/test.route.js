 import express from 'express';
 import { getTests, getTest, createTest, updateTest, deleteTest } from '../controller/test.controller.js';

 const testRoutes = express.Router();

 testRoutes.route('/')
    .get(getTests)
    .post(createTest);

testRoutes.route('/:id')
    .get(getTest)
    .put(updateTest)
    .delete(deleteTest); 

export default testRoutes; 