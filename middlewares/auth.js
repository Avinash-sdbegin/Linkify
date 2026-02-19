const {getUser} = require('../service/auth');
function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;
    if (!tokenCookie) return next();  
    try {
        const user = getUser(tokenCookie);
        req.user = user;
    } catch (error) {
        req.user = null;
    }
    return next();
}
function restrictTo(roles = []) {
    return function(req, res, next) {
        if (!req.user) {
            return res.redirect('/login');
        }
        if (!roles.includes(req.user.role)) {
            return res.end('Unauthorized Access');
        }
        return next();
    };
}
module.exports = {
    checkForAuthentication,
    restrictTo,
};