const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async show(req, res) {
        const users = await User.findById(req.params.id);
        
        return res.json(users);
    },

    async store(req, res) {
        await User.create(req.body, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Usuário criado com Sucesso!!!", data: null});
            }
        });
    },

    async authenticate(req, res, next) {
        await User.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                } else{
                    res.json({status:"error", message: "Invalid email/password!!!", data:null});
                }
            }
        });
    }
}