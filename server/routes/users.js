import express from 'express';
import {getUserByName} from '../controllers/users.js';

const router = express.Router();

router.get('/:username', getUserByName);

//router.get('/',getUsers);
export default router;