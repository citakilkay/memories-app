import express from 'express';
import {getUsers} from '../controllers/users.js';

const router = express.Router();
/*
router.get('/:userID', async (req, res) => {
    try {
        const postbyId = await Post.findbyId(req.params.userID).lean();
        res.json(postbyId);
    } catch (err) {
        res.json({ message: err });
    }
})
*/

router.get('/',getUsers);
export default router;