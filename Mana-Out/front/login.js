const API = 'http://localhost:3000';

const form = document.getElementById('login-form');


form.addEventListener('submit', async (event) => {

  event.preventDefault();

  const usuario = {

    email: document.getElementById('email').value,

    senha: document.getElementById('senha').value
  };

  const resposta = await fetch(`${API}/usuarios/login`, {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(usuario)
  });

  const dados = await resposta.json();

  if (resposta.ok) {

    localStorage.setItem(
      'usuario',
      JSON.stringify(dados.usuario)
    );

    window.location.href = 'index.html';

  } else {

    alert(dados.mensagem);
  }
});