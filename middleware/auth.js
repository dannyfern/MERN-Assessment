const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');


    if(!token) {
    return res.status(401).json({ msg: 'Sorry we could not validate your token/client' }),
            res.redirect('/api/users')
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtsign'));
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(403).send('Bad Request, check your authorization and try again');
    }
}
