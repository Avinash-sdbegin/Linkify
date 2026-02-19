const jwt = require('jsonwebtoken');

function getJwtSecret() {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not set');
    }
    return process.env.JWT_SECRET;
}
function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, getJwtSecret());
}
function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, getJwtSecret());
    } catch (error) {
        return null;
    }
}
module.exports = {setUser, getUser};