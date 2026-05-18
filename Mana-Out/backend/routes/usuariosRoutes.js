const express = require('express');

const router = express.Router();

const {
  cadastrarUsuario,
  login
} = require('../controllers/usuariosController');


router.post('/cadastro', cadastrarUsuario);

router.post('/login', login);


module.exports = router;