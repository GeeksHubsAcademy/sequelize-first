const { User, Token } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserController = {
    register(req, res) {
        req.body.role = 'user';
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        User.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to register the user' })
            });
    },
    async login(req, res) {
        try {
            //   const user = await  User.findOne({$or:[{email:req.body.email},{username:req.body.username}]})
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).send({ message: 'Wrong credentials' })
            }
            const isMatch = bcrypt.compare(req.body.password, user.password)
            if (!isMatch) {
                return res.status(400).send({ message: 'Wrong credentials' })
            }
            const token = jwt.sign({ id: user.id }, 'miRinconSecreto');
            await Token.create({ token, UserId: user.id });
            res.send({
                user,
                token
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to connect the user'
            })
        }
    }
}
module.exports = UserController;