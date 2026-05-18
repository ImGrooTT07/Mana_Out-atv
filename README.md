#  Mana Out

##  Descrição do Sistema

O **Mana Out** é um sistema web desenvolvido para gerenciamento de jogos digitais.

O projeto permite:
- cadastrar jogos;
- visualizar biblioteca;
- editar jogos;
- excluir jogos;
- realizar login no sistema.

A aplicação foi desenvolvida utilizando arquitetura Full Stack com:
- Front-end em HTML, CSS e JavaScript;
- Back-end com Node.js e Express;
- Banco de dados Supabase.

O objetivo do projeto é praticar:
- CRUD;
- APIs REST;
- integração Front-end + Back-end;
- consumo de APIs com fetch();
- banco de dados em nuvem;
- autenticação simples com localStorage.

---

#  Tecnologias Utilizadas

## Front-end
- HTML5
- CSS3
- JavaScript

## Back-end
- Node.js
- Express

## Banco de Dados
- Supabase

## Outros Recursos
- Fetch API
- Async/Await
- JSON
- LocalStorage

---

#  Como Executar o Projeto

## 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/mana-out.git
```

---

## 2. Entrar na pasta backend

```bash
cd backend
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Configurar Supabase

Criar um arquivo:

```bash
.env
```

Adicionar:

```env
SUPABASE_URL=SUA_URL
SUPABASE_KEY=SUA_KEY
```

---

## 5. Iniciar servidor

```bash
node index.js
```

Servidor rodando em:

```text
http://localhost:3000
```

---

## 6. Abrir o Front-end

Abrir:

```text
front/login.html
```

---

#  Estrutura do Projeto

```text
Mana Out/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── supabase.js
│   ├── index.js
│   └── package.json
│
├── front/
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   ├── script.js
│   └── login.js
│
├── img/
│
└── README.md
```

---

#  Funcionalidades

✅ Login de usuário  
✅ Cadastro de jogos  
✅ Listagem de jogos  
✅ Edição de jogos  
✅ Exclusão de jogos  
✅ Integração com Supabase  
✅ Interface gamer moderna  
✅ Responsividade  
✅ Uso de localStorage  

---

#  Prints do Sistema Funcionando

##  Tela de Login

```text
/img/image
```

---

##  Tela Principal

```text
/img/image2
```

---

##  Cadastro de Jogos

```text
/img/image3
```
