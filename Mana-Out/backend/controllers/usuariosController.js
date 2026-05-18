const supabase = require('../supabase');


// CADASTRAR
async function cadastrarUsuario(req, res) {

  const {
    nome,
    email,
    senha
  } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      {
        nome,
        email,
        senha
      }
    ]);

    if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
}


// LOGIN
async function login(req, res) {

  const {
    email,
    senha
  } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .eq('senha', senha)
    .single();

    if (error || !data) {
    return res.status(401).json({
      mensagem: 'Email ou senha inválidos'
    });
  }

  res.json({
    mensagem: 'Login realizado com sucesso',
    usuario: data
  });
}


module.exports = {
  cadastrarUsuario,
  login
};