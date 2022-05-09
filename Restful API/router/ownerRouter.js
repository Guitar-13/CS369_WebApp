import express from 'express';
import { create, list, get, put, remove } from '../controller/ownerController.js';
let router = express.Router();
router.post('/', create);
router.get('/', list);
router.get('/:CondoID', get);
router.put('/:CondoID', put);
router.delete('/:CondoID', remove);
export default router;
