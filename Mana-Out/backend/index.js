const express = require('express');
const cors = require('cors');

const jogosRoutes = require('./routes/jogosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/jogos', jogosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
  res.send('API Mana Out funcionando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});