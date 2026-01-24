const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/stats', controller.getStats);
router.get('/users', controller.getUsers);

router.post('/send-reset-email', controller.sendResetLink);
router.post('/update-password', controller.updatePasswordAuth);

router.patch('/users/request-deletion/:id', controller.requestAccountDeletion);
router.delete('/users/:id', controller.deleteUser);

router.post('/verify-admin', controller.verifyAdmin); 
router.post('/create-specialist', controller.createSpecialist);

module.exports = router;