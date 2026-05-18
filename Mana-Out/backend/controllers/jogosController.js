const supabase = require('../supabase');


// ======================
// LISTAR JOGOS
// ======================

async function listarJogos(req, res) {

  const { data, error } = await supabase
    .from('jogos')
    .select(`
      *,
      categorias(nome)
    `);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
}


// ======================
// CADASTRAR JOGO
// ======================

async function cadastrarJogo(req, res) {

  try {

    const {
      nome,
      descricao,
      plataforma,
      ano,
      imagem,
      categoria_id
    } = req.body;

    const { data, error } = await supabase
      .from('jogos')
      .insert([
        {
          nome,
          descricao,
          plataforma,
          ano: Number(ano),
          imagem,
          categoria_id: Number(categoria_id)
        }
      ])
      .select();

    if (error) {

      console.log(error);

      return res.status(500).json(error);
    }

    res.json(data);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      erro: 'Erro ao cadastrar jogo'
    });
  }
}


// ======================
// EXCLUIR
// ======================

async function excluirJogo(req, res) {

  const { id } = req.params;

  const { error } = await supabase
    .from('jogos')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    mensagem: 'Jogo removido'
  });
}

// ======================
// EDITAR
// ======================

async function editarJogo(req, res) {

  const { id } = req.params;

  const {
    nome,
    descricao,
    plataforma,
    ano,
    imagem,
    categoria_id
  } = req.body;

  const { data, error } = await supabase
    .from('jogos')
    .update({
      nome,
      descricao,
      plataforma,
      ano: Number(ano),
      imagem,
      categoria_id: Number(categoria_id)
    })
    .eq('id', id)
    .select();

  if (error) {

    return res.status(500).json(error);
  }

  res.json(data);
}


module.exports = {
  listarJogos,
  cadastrarJogo,
  editarJogo,
  excluirJogo
};