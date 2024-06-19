<h1 align="center">Digimon Search</h1>

# Descrição
Bem-vindo à  aplicação responsiva full stack criada em Next.Js e Nest.Js dedicada aos fãs de Digimons! A aplicação oferece uma pesquisa interativa para que você possa encontrar essas criaturas digitais. Além disso, a aplicação oferece recursos intuitivos para que os usuários possam realizar pesquisas personalizadas e descobrir informações sobre seus digimons favoritos.

## Recursos Principais:
Barra de Pesquisa:
Utilize nossa barra de pesquisa para encontrar Digimons específicos pelo nome. Digite o nome do seu Digimon favorito e obtenha informações de forma rápida e fácil.

Ao clicar na palavra Digimon no canto superior esquerdo, você será redirecionado à página inicial, onde todos os cards dos Digimons são exibidos.

Ao clicar no botão no canto inferior direito, você volta para o topo da página.

## Filtro por Nível
Explore Digimons de diferentes níveis com nosso menu suspenso de seleção. Escolha o nível desejado e veja uma lista específica de Digimons associados a esse nível.

## Pesquisas Personalizadas
A aplicação oferece a flexibilidade de realizar pesquisas personalizadas, combinando a barra de pesquisa e o filtro por nível. Encontre Digimons que atendam aos seus critérios específicos de maneira eficiente.
<br><br>

# Stacks de Desenvolvimento

<div>
  <a href="https://typescript.info/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=black" />
  </a>
  <a href="https://Next-black.com/docs">
    <img src="https://img.shields.io/badge/Next.js-339933?style=for-the-badge&logo=next.js&color=black" />
  </a>
  <a href="https://tailwindcss.com/docs">
    <img src="https://img.shields.io/badge/TailwindCSS-339933?style=for-the-badge&logo=tailwind-css&color=black" />
  </a>
    <a href="https://dev.mysql.com/doc/">
    <img src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=black" />
  </a>
    <a href="https://www.prisma.io/">
    <img src="https://img.shields.io/badge/prisma-339933?style=for-the-badge&logo=prisma&color=black" /> 
  </a>
    <a href="https://docs.nestjs.com/">
    <img src="https://img.shields.io/badge/nestjs-339933?style=for-the-badge&logo=Nestjs&color=black" /> 
  </a>
  <a href="https://docs.cypress.com/">
    <img src="https://img.shields.io/badge/cypress-339933?style=for-the-badge&logo=Cypress&color=black" /> 
  </a>
  <a href="https://jest.io/docs/v4/">
    <img src="https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=black" /> 
  </a>
  
</div>
<br>

# A aplicação em nuvem

Acesse a aplicação alocada no Vercel por <a href="https://teste-tecnico-digimon.vercel.app/"> aqui<a/>.
ATENÇÃO: A aplicação deve demorar um tempinho para iniciar.

## Rodando a aplicação localmente

### Requisitos

Para iniciar é necessário ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com) e um editor de código como o [VSCode](https://code.visualstudio.com/).

### Rodando o Front-End 

```bash
# Execute a aplicação em modo de desenvolvimento
# Ao clonar a aplicação acesse a pasta frontend

$ npm run dev

# O servidor inciará na porta:3000 - <http://localhost:3000>
```

### Rodando o Back-End

Primeiramente, é necessário instalar o MySQL Database através deste  <a href="https://dev.mysql.com/downloads/mysql"> link.<a/>

Após a instalação e configuração do mysql:
```bash

# Execute a aplicação em modo de desenvolvimento
# Acesse a pasta backend
# Configure o arquivo .env com base no .env.template

# Exexute os comandos a seguir:

$ npm install

$ npx prisma generate

$ npx prisma migrate dev

$ npx prisma db seed

$ npm run start:dev

# O servidor inciará na porta escolhida no arquivo .env
```
<br>

### Rotas

```bash 
/digimons/levels
```

Este endpoint traz todos os níveis dos digimons disponíveis em ordem alfabética

```bash 
/digimons?name=&level= ou exemplo: /digimons?name=agumon&level=rookie
```

Este endpoint traz a informações de todos os digimons listados ou como no exemplo as informações do agumon com o nível rookie

<br>

## Testes

### Front-End 

No Front-End os testes foram relizados através do cypress e para executa-lo para rodar o comando:

```bash
npx cypress open
```
### Back-End 

No Back-End os testes foram relizados testes e2e utilizando o jestjs

```bash
npm run test:e2e
```
