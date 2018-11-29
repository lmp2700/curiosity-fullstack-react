const express = require('express');
const router = express.Router();
const User = require('../models/usermodel')

router.post('/', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        req.session.logged = true;
        const validLogin = await bcrypt.compare(req.body.password, user.password);
        // req.session.username = req.body.username;
        req.session.userId = user._id
        res.json({
            status: 200,
            data: 'login successful'
          });
    } catch(err) {
        return(err)
    }
})


module.exports = router;