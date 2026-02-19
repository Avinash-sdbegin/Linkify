const {setUser} = require('../service/auth');
const User = require('../models/user');

async function handleUserSignup(req, res) {
    try {
        const { username, email, password } = req.body;
        await User.create({ username, email, password });
        return res.redirect('/login');
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ error: 'Signup failed', details: error.message });
    }
}

async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        
        if (!user) {
            return res.render("login", { error: "Invalid email or password" });
        }
        
        const token = setUser(user);
        res.cookie("token", token);
        return res.redirect("/");
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Login failed', details: error.message });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};