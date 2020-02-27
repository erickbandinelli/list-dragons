const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

module.exports = {
  async store(req, res) {
    await User.create(req.body, function (err, result) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "Usuário criado com Sucesso!!!", data: null });
      }
    });
  },

  async authenticate(req, res) {
    await User.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err) {
        res.json({ status: "error", message: "Houve Algum erro, tente novamente mais tarde !!!", data: null });
      } else {
        if (userInfo) {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
            res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
          } else {
            res.json({ status: "error", message: "E-mail ou Senha está inválido !!!", data: null });
          }
        } else {
          res.json({ status: "error", message: "Não encontramos este usuário, verefique se digitou correto !!!", data: null });
        }
      }
    });
  }
}
