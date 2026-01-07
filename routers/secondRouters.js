import express from 'express';
import secondController from '../Controller/secondController';
const routes=express.Router();
routes.get('/get-api',secondController.createAPI);
export default routes;