const express = require('express');

const router = express.Router();

const {
  listarJogos,
  cadastrarJogo,
  editarJogo,
  excluirJogo
} = require('../controllers/jogosController');


router.get('/', listarJogos);

router.post('/', cadastrarJogo);

router.put('/:id', editarJogo);

router.delete('/:id', excluirJogo);


module.exports = router;