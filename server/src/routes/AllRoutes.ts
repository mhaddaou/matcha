import express from 'express';
const router = express.Router();
import {login, Default} from '../controllers/login';


router.get('/', Default);

router.get('/user', (req, res) =>{
    res.send('hello from user');
})

router.get('/login', login);

export default router;