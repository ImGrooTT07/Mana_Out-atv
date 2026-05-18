create table categorias (

    id bigint generated always as identity primary key,

    nome text not null
);


create table jogos (

    id bigint generated always as identity primary key,

    nome text not null,

    descricao text,

    plataforma text,

    ano integer,

    imagem text,

    categoria_id bigint,

    created_at timestamp default now(),

    constraint fk_categoria
    foreign key (categoria_id)
    references categorias(id)
);


create table usuarios (

    id bigint generated always as identity primary key,

    nome text not null,

    email text unique not null,

    senha text not null,

    created_at timestamp default now()
);



insert into categorias (nome)
values
('RPG'),
('FPS'),
('Aventura'),
('Terror'),
('Corrida'),
('Esportes');

insert into jogos
(
    nome,
    descricao,
    plataforma,
    ano,
    imagem,
    categoria_id
)
values
(
    'The Witcher 3',
    'RPG de mundo aberto',
    'PC',
    2015,
    'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
    1
);