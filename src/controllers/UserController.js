const User = require("../models/User");


module.exports = {
    async storeUser (req, res){
        try{
        const { email, name, password } = req.body;

        const user = await User.create({email, name, password});

        return res.json(user.email);
        }catch(err){
            res.status(500).json(err);
        }
    }
}