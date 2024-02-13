import express from 'express';
import { userSignUp, userLogIn } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

// router.post('/logout');

export default router;