const express = require('express');
const router = express.Router();
 
//@route   GET api/users
//@desc    Test route
//@access  Public

router.get('/posts', (req, res) => {
    console.log(req.body);
    res.send('Posts route')
})

module.exports = router;