const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/register', UserController.register);
router.post('/login', UserController.login);
module.exports = router;