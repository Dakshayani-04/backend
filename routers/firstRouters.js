import express from 'express';
import FirstController from '../Controller/firstController.js';

const router = express.Router();

router.get('/', FirstController.TestingAPI);

export default router;
