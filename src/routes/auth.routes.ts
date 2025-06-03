import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Example protected route
// router.get('/protected', authenticate, (req, res) => {
//   res.json({ message: `Hello ${req.user.username}, you are authenticated.` });
// });

export default router;
