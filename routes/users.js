const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/register', UserController.register);
module.exports = router;