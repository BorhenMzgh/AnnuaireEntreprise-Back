const express = require('express');
const router = express.Router();

const entrepriseController = require('../controllers/entreprise');
const authMiddleware = require('../middlewares/auth')

router.get('/pen',authMiddleware.isAdmin, entrepriseController.getPenEntre);
router.get('/acc',authMiddleware.isAuthenticated, entrepriseController.getEntre);
router.post('/',authMiddleware.isAuthenticated,  entrepriseController.createEntre);
router.put('/:id', entrepriseController.updateEntre);
router.delete('/:id',authMiddleware.isAdmin, entrepriseController.deleteEntre);

module.exports = router;