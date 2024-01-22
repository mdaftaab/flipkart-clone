import express from 'express';
import { userSignup } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', userSignup);

router.post('/login');
router.post('/logout');

export default router;