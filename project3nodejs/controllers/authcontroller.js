const express = require('express');
const router = express.Router();
const User = require('../models/usermodel')

router.post('/', async (req, res) => {
    try{
        const user = await User.create(req.body)
        req.session.logged = true;
        req.session.username = req.body.username;
        res.json({
            status: 200,
            data: 'login successful'
          });
    } catch(err) {
        return(err)
    }
})


module.exports = router;