# Masters Games

## Sumário

| Tópico                                                |
| ----------------------------------------------------- |
| [Descrição do Projeto](#descrição-do-projeto)         |
| [Estrutura do Projeto](#estrutura-do-projeto)         |
| [Imagens](#imagens)       |
| [Instruções e Execução](#instruções-e-execução)       |

---


---
## Descrição do Projeto

Desafio desenvolvido referente uma vaga de estágio frontend React na empresa App Masters.

[Demo](masters-games-vert.vercel.app)

[↑ Sumário](#sumário)

---

## Estrutura do Projeto

```shell
├── public
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── data
│   ├── hooks
│   ├── pages
│   ├── styles
│   ├── types
│   ├── App.tsx
│   └── main.tsx
├── .env.local
├── README.md
└── package.json
```

[↑ Sumário](#sumário)

---

## Imagens 

![alt text](/public//readme//image1.png)
![alt text](/public//readme//image4.png)

---

## Instruções e Execução

1. Clone ou baixe o repositório da maneira como preferir. Para usar a linha de comando:

```bash
git clone https://github.com/eduardonascimentojf/MastersGames
```

2. Acesse a pasta recém clonada e execute o comando para baixar as dependências do projeto:

```bash
  pnpm install
```

3. Inicialize o programa:

```bash
  pnpm dev
```

> O projeto tem variáveis de ambiente e é necessário telas para conseguir executar o projeto

4. Abra o navegador:

```bash
  http://localhost:5173/
```

> Caso esta porta esteja sendo utilizada, irá abrir na próxima livre. Informa no terminal

---

[↑ Sumário](#sumário)

---

### Rotina de Push:

1. Puxar o que está no repositório: `git pull`
2. Adicionar arquivos: `git add nome/e/caminho/do/arquivo.cpp`
3. Fazer commit: `git commit -m "TipoDeCommit: Mensagem de Commit"`
4. Empurra para o repositório remoto: `git push origin nome-da-branch`

#### Tipos de Commit:

Para saber mais, recomendo a leitura: [Conventional Commits](https://conventionalcommits.org/en/v1.0.0/). Boa prática, impressione recrutadores!

- `Feat`: (feature), adiciona funcionalidade nova
- `Fix`: correção de bugs
- `Docs`: Alterações apenas na Documentação
- `Refactor`: Mudança de código que não adiciona ou altera algo, mudança na forma como o código é escrito (refatoração)
- `Revert`: reversão para um commit anterior
- `Test`: Adiciona ou altera testes

[↑ Sumário](#sumário)
