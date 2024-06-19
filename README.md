<h1 align="center">Digimon Search</h1>

# Descrição

Bem-vindo à aplicação responsiva full stack desenvolvida em Next.js e Nest.js! Explore uma experiência interativa de pesquisa que permite descobrir e aprender sobre digimons. Com recursos intuitivos, a aplicação permite realizar pesquisas personalizadas para encontrar informações sobre digimons.

# Recursos Principais

#### Barra de Pesquisa

Utilize a barra de pesquisa para encontrar digimons específicos pelo nome. Digite o nome do digimon e obtenha informações detalhadas sobre ele.

- Redirecionamento para a Página Inicial: Ao clicar na palavra "Digimon" no canto superior esquerdo, você será redirecionado à página inicial, onde todos os cards dos digimons serão exibidos.

- Botão de Voltar ao Topo: Ao clicar no botão no canto inferior direito, você volta rapidamente para o topo da página.

#### Animações Suaves

Implementação de animações suaves nos cards exibidos que ativam durante a rolagem da página e nos resultados de pesquisa utilizando a biblioteca Framer Motion. Essas animações são projetadas para melhorar a interatividade e a estética da navegação, proporcionando uma experiência visualmente atraente e dinâmica para os usuários.

#### Filtro por Nível

Explore digimons de diferentes níveis com o menu suspenso de seleção. Escolha o nível desejado e veja uma lista específica de digimons associados a esse nível.

#### Pesquisas Personalizadas

A aplicação oferece a flexibilidade de realizar pesquisas personalizadas, combinando a barra de pesquisa e o filtro por nível. Encontre digimons que atendam aos seus critérios específicos de maneira eficiente.
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
<br>

ATENÇÃO: A aplicação pode demorar alguns segundos para iniciar, pois o servidor onde a API está hospedada a desativa quando fica inativa por algum tempo.

# Rodando a aplicação localmente

### Requisitos

Para iniciar é necessário ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com) e um editor de código como o [VSCode](https://code.visualstudio.com/).

### Rodando o Front-End 

#### Execute a aplicação em modo de desenvolvimento

```bash

# 1 - Ao clonar a aplicação acesse a pasta 'frontend'.

# Execute os seguintes comandos:

$ npm run dev

# O servidor inciará na porta:3000 - <http://localhost:3000>
```

### Rodando o Back-End

Primeiramente, é necessário instalar o MySQL database através deste  <a href="https://dev.mysql.com/downloads/mysql"> link.<a/>

Após a instalação e configuração do mysql:

#### Execute a aplicação em modo de desenvolvimento

```bash

# 1 - Acesse a pasta 'backend';

# 2 - Configure o arquivo '.env 'com base no '.env.template'

# Execute os seguintes comandos:

$ npm install

$ npx prisma generate

$ npx prisma migrate dev

$ npx prisma db seed

$ npm run start:dev

# O servidor inciará na porta escolhida no arquivo .env
```
<br>

# Rotas

#### Listagem de Níveis dos digimons

##### `GET /digimons/levels`

- Retorna uma lista de todos os níveis dos digimons disponíveis, organizados em ordem alfabética.

#### Busca de digimons por Nome e Nível

##### `GET /digimons?name=&level=`

##### Exemplo: `GET /digimons?name=agumon&level=rookie`

- Retorna informações sobre digimons baseado nos parâmetros fornecidos:
  - `name`: Nome do digimon (opcional). Se especificado, retorna informações de digimons que correspondem ao nome fornecido.
  - `level`: Nível do digimon (opcional). Se especificado, retorna informações de digimons que correspondem ao nível fornecido.
<br>

# Testes

### Front-End (Cypress)

Os testes de Front-End foram realizados utilizando Cypress. Para executá-los, utilize o seguinte comando:

```bash
npx cypress open
```
### Back-End (Jest)

Os testes de Back-End foram realizados utilizando Jest para testes end-to-end (E2E). Para executá-los, utilize o seguinte comando:

```bash
npm run test:e2e
```
