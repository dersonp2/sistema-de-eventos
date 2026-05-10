# sistema-de-eventos

````markdown id="3u2hpm"
# API de Eventos Acadêmicos

Projeto simples para aprendizado de:
- Node.js
- API REST
- CRUD
- Supabase
- HTML
- CSS
- JavaScript
- Consumo de APIs com fetch

---

# Tecnologias Utilizadas

## Back-end
- Node.js
- Express
- Supabase
- Cors

## Front-end
- HTML
- CSS
- JavaScript

---

# Estrutura do Projeto

```bash
api-eventos/
│
├── server.js
├── package.json
├── package-lock.json
│
└── front/
    ├── index.html
    ├── style.css
    └── script.js
````

---

# Instalação do Node.js

Baixe e instale o Node.js:

[https://nodejs.org](https://nodejs.org)

Instale a versão:

* LTS

---

# Verificar Instalação

Abra o terminal e execute:

```bash
node -v
```

Depois:

```bash
npm -v
```

---

# Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando irá instalar:

* express
* cors
* @supabase/supabase-js

---

# Executar a API

No terminal:

```bash
node server.js
```

Se tudo estiver correto, aparecerá:

```bash
Servidor rodando em http://localhost:3000
```

---

# Executar o Front-end

Abra o arquivo:

```bash
front/index.html
```

Ou utilize a extensão:

* Live Server (VSCode)

---

# Banco de Dados no Supabase

## Criar tabela

Execute o SQL abaixo no SQL Editor do Supabase:

```sql
create table eventos (
    id bigint generated always as identity primary key,

    titulo text not null,

    descricao text,

    data date not null,

    local text not null
);
```

---

# Inserir Dados de Teste

```sql
insert into eventos (titulo, descricao, data, local)
values
(
    'Semana da Computação',
    'Evento voltado para tecnologia e inovação',
    '2026-05-20',
    'Auditório Central'
),

(
    'Workshop de Node.js',
    'Aprendendo APIs com Express',
    '2026-06-10',
    'Laboratório 02'
),

(
    'Palestra sobre IA',
    'Discussão sobre Inteligência Artificial',
    '2026-06-15',
    'Sala Magna'
);
```

---

# Rotas da API

## Listar Eventos

```http
GET /eventos
```

---

## Cadastrar Evento

```http
POST /eventos
```

Exemplo JSON:

```json
{
  "titulo": "Semana Acadêmica",
  "descricao": "Evento de tecnologia",
  "data": "2026-05-20",
  "local": "Auditório"
}
```

---

## Atualizar Evento

```http
PUT /eventos/:id
```

---

## Remover Evento

```http
DELETE /eventos/:id
```

---

# Funcionalidades

* Listar eventos
* Cadastrar eventos
* Editar eventos
* Excluir eventos
* Loading durante operações
* Integração Front-end + API
* Banco de dados em nuvem

---

# Conceitos Trabalhados

## Back-end

* API REST
* CRUD
* JSON
* Rotas HTTP
* Integração com banco
* Node.js
* Express

## Front-end

* fetch API
* async/await
* DOM
* Eventos HTML
* Formulários
* Manipulação dinâmica da tela

---

# Métodos HTTP Utilizados

| Método | Função    |
| ------ | --------- |
| GET    | Buscar    |
| POST   | Criar     |
| PUT    | Atualizar |
| DELETE | Remover   |

---

# Sugestões de Melhorias

* Tela mais bonita
* Login de usuários
* Upload de imagens
* Filtro de eventos
* Paginação
* Deploy da API
* Deploy do front-end
* Documentação Swagger

---

# Autor

Projeto desenvolvido para fins educacionais.

```
```
