import User from '../models/User.js'
export const getUsers = (req, res, next) => {
    try {
        const userbyId = User.find().lean();
        res.json(userbyId);
        next();
    } catch (err) {
        res.json({ message: err });
    }
}