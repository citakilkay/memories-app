import express from 'express';
import {createUser, getUserByName ,getUsers} from '../controllers/users.js';

const router = express.Router();
router.get('/', getUsers);
router.get('/:username', getUserByName);
router.post('/register', createUser);
router.post('/login', () => {
    console.log(req.body);
})

//router.get('/',getUsers);
export default router;