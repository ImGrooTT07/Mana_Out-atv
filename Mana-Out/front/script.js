const API = 'http://localhost:3000';


// ======================
// VERIFICAR LOGIN
// ======================

const usuario = JSON.parse(
  localStorage.getItem('usuario')
);

if (!usuario) {

  window.location.href = 'login.html';
}


// ======================
// MOSTRAR USUÁRIO
// ======================

document.getElementById(
  'usuario-logado'
).innerText = ` ${usuario.nome}`;



// ======================
// LOGOUT
// ======================

const logoutBtn =
  document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {

  localStorage.removeItem('usuario');

  window.location.href = 'login.html';
});


// ======================

const listaJogos =
  document.getElementById('lista-jogos');

const form =
  document.getElementById('form-jogo');

const selectCategoria =
  document.getElementById('categoria');


// ======================
// EDITAR
// ======================

let jogoEditando = null;


// ======================
// LISTAR CATEGORIAS
// ======================

async function carregarCategorias() {

  const resposta =
    await fetch(`${API}/categorias`);

  const categorias =
    await resposta.json();

  categorias.forEach(categoria => {

    selectCategoria.innerHTML += `
      <option value="${categoria.id}">
        ${categoria.nome}
      </option>
    `;
  });
}


// ======================
// LISTAR JOGOS
// ======================

async function carregarJogos() {

  const resposta =
    await fetch(`${API}/jogos`);

  const jogos =
    await resposta.json();

  listaJogos.innerHTML = '';

  jogos.forEach(jogo => {

    listaJogos.innerHTML += `

      <div class="card">

        <img
          src="${jogo.imagem}"
          alt="${jogo.nome}"
        >

        <div class="card-content">

          <h3>${jogo.nome}</h3>

          <p>
            <strong>Plataforma:</strong>
            ${jogo.plataforma}
          </p>

          <p>
            <strong>Ano:</strong>
            ${jogo.ano}
          </p>

          <p>${jogo.descricao}</p>

          <p>
            <strong>Categoria:</strong>
            ${jogo.categorias?.nome || 'Sem categoria'}
          </p>

          <div class="card-buttons">

            <button
              class="edit-btn"
              onclick="editar(
                ${jogo.id},
                '${jogo.nome}',
                '${jogo.plataforma}',
                '${jogo.ano}',
                '${jogo.imagem}',
                '${jogo.descricao}',
                '${jogo.categoria_id}'
              )"
            >
               Editar
            </button>

            <button
              class="delete-btn"
              onclick="excluir(${jogo.id})"
            >
               Excluir
            </button>

          </div>

        </div>

      </div>
    `;
  });
}


// ======================
// CADASTRAR / EDITAR
// ======================

form.addEventListener('submit', async (event) => {

  event.preventDefault();

  const novoJogo = {

    nome:
      document.getElementById('nome').value,

    plataforma:
      document.getElementById('plataforma').value,

    ano:
      document.getElementById('ano').value,

    imagem:
      document.getElementById('imagem').value,

    descricao:
      document.getElementById('descricao').value,

    categoria_id:
      Number(
        document.getElementById('categoria').value
      )
  };

  // ======================
  // EDITAR
  // ======================

  if (jogoEditando) {

    await fetch(`${API}/jogos/${jogoEditando}`, {

      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(novoJogo)
    });

    jogoEditando = null;

  } else {

    // ======================
    // CADASTRAR
    // ======================

    await fetch(`${API}/jogos`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(novoJogo)
    });
  }

  form.reset();

  carregarJogos();
});


// ======================
// FUNÇÃO EDITAR
// ======================

function editar(
  id,
  nome,
  plataforma,
  ano,
  imagem,
  descricao,
  categoria_id
) {

  jogoEditando = id;

  document.getElementById('nome').value =
    nome;

  document.getElementById('plataforma').value =
    plataforma;

  document.getElementById('ano').value =
    ano;

  document.getElementById('imagem').value =
    imagem;

  document.getElementById('descricao').value =
    descricao;

  document.getElementById('categoria').value =
    categoria_id;

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// ======================
// EXCLUIR
// ======================

async function excluir(id) {

  const confirmar = confirm(
    'Deseja excluir este jogo?'
  );

  if (!confirmar) return;

  await fetch(`${API}/jogos/${id}`, {

    method: 'DELETE'
  });

  carregarJogos();
}


// ======================

carregarCategorias();

carregarJogos();