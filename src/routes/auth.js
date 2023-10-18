const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/auth');

router.post('/signup', authController.signup);
router.post('/signup-admin', authController.signupAdmin);
router.post('/login', authController.login);
router.get('/acceuil',authMiddleware.isAuthenticated );
router.post('/username',authController.username );


module.exports = router;