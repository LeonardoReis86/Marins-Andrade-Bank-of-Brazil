const { banco, accounts } = require("../database");

const listAll = (req, res) => {
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res.status(400).json({ mensagem: "Favor informar a senha" });
  }

  if (senha_banco !== banco.senha) {
    return res.status(400).json({ mensagem: "Senha inválida." });
  }

  return res.json(accounts);
};

module.exports = {
  listAll,
};
