const supabase = require('../supabase');

async function listarCategorias(req, res) {

  console.log('URL:', process.env.SUPABASE_URL);

  const { data, error } = await supabase
    .from('categorias')
    .select('*');

  console.log('DATA:', data);
  console.log('ERROR:', error);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
}

module.exports = {
  listarCategorias
};