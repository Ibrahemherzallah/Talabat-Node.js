const User = require('../models/user');

const register = async (req,res) => {
    const {email , password} = req.body;
    const user = User.findOne({email});
    console.log(user);
    


}