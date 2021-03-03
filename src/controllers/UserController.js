const User = require("../models/User");


module.exports = {
    async store (req, res){
        try{
        const { email, name, password } = req.body;

        const user = await User.create({email, name, password});

        return res.json(user.email);
        }catch(err){
            console.log(err);
        }
    }
}