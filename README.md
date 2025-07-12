<p align="center">
  <h1 align="center">Gympass - API Node.js com SOLID</h1>
  <p align="center">Projeto desenvolvido durante a formação <strong>Node.js</strong>.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/gympass-api-fastify?style=for-the-badge&color=4e5acf" alt="Repo size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/gympass-api-fastify/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/gympass-api-fastify?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <!-- <img src="https://img.shields.io/badge/license-MIT-4e5acf?style=for-the-badge" alt="License" /> -->
  <img src="https://img.shields.io/badge/status-concluído-green?style=for-the-badge" alt="Status" />
</p>

<br>

<p align="center">
  <a target="_blank" href="https://fastify.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Fastify&message=TS&logo=fastify" alt="Fastify" />
  </a>
  <a target="_blank" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Typescript&message=TS&logo=typescript" alt="Typescript" />
  </a>
  <a target="_blank" href="https://zod.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Zod&message=TS&logo=zod" alt="Zod" />
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/dotenv">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Dotenv&message=TS&logo=dotenv" alt="Dotenv" />
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/bcryptjs">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Bcrypt&message=TS" alt="Bcrypt.js" />
  </a>
  <a target="_blank" href="https://eslint.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=ESLint&message=JS&logo=eslint" alt="ESLint" />
  </a>
  <a target="_blank" href="https://vite.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Vite&message=TS&logo=vite" alt="Vite" />
  </a>
  <a target="_blank" href="https://vitest.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Vitest&message=TS&logo=vitest" alt="Vitest" />
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/supertest">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Supertest&message=TS&logo=supertest" alt="Supertest" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://www.prisma.io/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=yellow&label=Prisma&message=ORM&logo=prisma" alt="Prisma" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#requisitos-e-funcionalidades">Requisitos e funcionalidades</a></li>
  <li><a href="#como-executar">Como executar</a></li>
  <li><a href="#tecnologias">Tecnologias</a></li>
  <li><a href="#autor">Autor</a></li>
</ol>

## Sobre

API desenvolvida em Node.js com o Fastify e Typescript, afim de gerenciar academias, check-ins, históricos e perfis de usuários.

## Requisitos e funcionalidades

### Funcionais

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas ( até 10km );
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### Negócios

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto ( 100m ) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

### Não funcionais

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT ( JSON Web Token );

## Como executar

Se estiver utilizando outro gerenciador de pacotes, basta trocar o `pnpm` por `npm`, `yarn`, etc.

### Pré-requisitos

Instalar as dependências do projeto.

```bash
pnpm install
```

Criar arquivo `.env` na raiz do projeto.

```text
NODE_ENV=dev

# Auth
JWT_SECRET=gympass

# Database
DATABASE_URL="postgresql://docker:docker@localhost:5432/gympass?schema=public"
```

### Testes

#### Unitário

```bash
pnpm test
```

#### E2E

```bash
pnpm test:e2e
```

#### Coverage

```bash
pnpm test:coverage
```

#### Visualização em UI

```bash
pnpm test:ui
```

### Localmente

Criar imagem com o docker compose.

```bash
docker-compose up
```

Executar as `migrations`.

```bash
npx prisma generate
```

```bash
npx prisma migrate deploy
```

Executar a aplicação.

```bash
pnpm start:dev
```

## Tecnologias

- [Node.js](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [ESLint](https://eslint.org/)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Prisma](https://www.prisma.io/)

> **DICA !**
>
> Todas as demais dependências utilizadas podem ser visualizados acessando o [package.json](./package.json).

## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felipe-dr">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Felipe DR</b>
        </sub>
      </a>
      <br />
      <a href="mailto:felipe.corp7@gmail.com" title="E-mail">📩</a>
    </td>
  </tr>
</table>
