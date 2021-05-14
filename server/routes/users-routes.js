const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator/check')
 
//@route   POST api/users
//@desc    Register user
//@access  Public


// validation of name,email,password

const checkUser = [
      check('name', 'name is required').not().isEmpty(),
      check('email', 'please include a valid mail').isEmail(),
      check(
         'password',
         'please enter a password with 6 or more charecter'
      ).isLength({ min: 6 }),
   ]

router.post('/users',checkUser,(req, res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
    res.send('User route')
})

module.exports = router;