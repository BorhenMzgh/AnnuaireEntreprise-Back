
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const saltRounds = 10;
const tokenExpiryTime = 60 * 60  



const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        const hash = await bcrypt.hash(password, saltRounds);
        const response = await UserModel.create({ firstName, lastName, username, password: hash, role: 'user' });

        res.status(201).send(response);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send(error);
    }
}

const signupAdmin = async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        const hash = await bcrypt.hash(password, saltRounds);
        const response = await UserModel.create({ firstName, lastName, username, password: hash, role: 'admin' });

        res.status(201).send(response);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({ error });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username: username });
        const hash = user.password;
        const passwordResult = await bcrypt.compare(password, hash);

        if (passwordResult) {
            const token = jwt.sign({ role: user.role, id: user._id, username: user.username }, process.env.JWT_KEY, { expiresIn: tokenExpiryTime });
            res.send({token});
        } else {
            res.status(500).send('Username or password is incorrect.');
        }


    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({ error });
    }
}

const username = (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log({username: decoded.username});
        res.send({username: decoded.username});
    } catch (error) {
        console.log(error);
        res.status(401).send('You have to be authenticated');
    }
}

module.exports = {
    signup,
    signupAdmin,
    login,
    username
}