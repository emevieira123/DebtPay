Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Rodando o Projeto

Primeiro, instale as dependencia e execute o servidor de desenvolvimento:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## ESLint & Prettier
Dentro dos pacotes do projeto, existem arquivos de configurações para o VSCode com o objetivo de padronizar a escrita de código dentro do projeto. Para isso, são necessário so seguintes plugins no VSCode:

- ESLint
- EditorConfig for VS Code

Os arquivos `.eslintrc.js`, `.eslintrc.json` e `.editorconfig` possuem configurações pré-estabelecidas para o VSCode, para que ao encontrar erros de padrões de código, ele tenta corrigir ao usar `cmd+s` para salvar as alterações.
Caso ainda existam erros, ele irá informar na própria linha quais são eles.


## Sobre o Projeto

O layout do projeto pode ser conferido no [FIGMA](https://www.figma.com/file/EmEco4Z1XclqFHEv4C5iG1/DebtPay?node-id=113%3A631)

A documentação do backend pode ser acessada em [DOCS](http://localhost:3000/)

Este é um projeto pessoal que foi desenvolvido com o intuito de
criar uma forma onde eu pudesse administrar algumas dívidas de
forma mais organizada.

### Tecnologias usadas para o desenvolvimento
- NextJS
- Ant Designer
- React Query
- Styled-Compenents
- React-Toastify
- Banco de dados MySQL
- Backend em NodeJS disponivel em [GitHub](https://github.com/emevieira123)
- Swagger para documentar o backend

### Funcionalidades do projeto
- Cadastro de usuários
- Login
- Cadastro das dividas e parcelas
- checagem das dividas pagas e pendentes


