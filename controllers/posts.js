const { Post } = require('../models');

module.exports = async (req, res) => {
  console.log(req.user.dataValues); // verificando se o dataValues foi inserido pelo middleware de autenticação
  const posts = await Post.findAll({ attributes: { exclude: 'id' } });
  res.status(200).json({ mockPosts: posts });
};
