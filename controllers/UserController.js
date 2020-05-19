const { User } = require('../models');

const UserController = {
    register(req, res) {
        req.body.role = 'user';
        User.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to register the user' })
            });
    }
}
module.exports = UserController;