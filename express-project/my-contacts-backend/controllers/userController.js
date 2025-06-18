//desc Register a user
// @route POST /api/users
// @access Public   
const register = (req, res) => {
  res.json({ message: 'register the user' });
}   
//desc Login a user
module.exports= {registerUser};
// @route POST /api/users/login