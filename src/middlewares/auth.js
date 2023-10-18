
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const isAdmin = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        if (decoded.role === 'admin') {
            next();
        } else {
            res.status(403).send('This is for admins only')
        }
    } catch (error) {

    }
}





const isAuthenticated = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (decoded)
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send('You have to be authenticated');
    }
}


module.exports = {
    isAdmin,
    isAuthenticated,

}