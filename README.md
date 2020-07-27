# Multimidia-Dapps-Ethereum-Imagem-IPFS
Projeto desenvolvimento de aplicação para armazenamento de imagens com Dapps Ethereum + IPFS + ReactJs

## Overview

O IPFS e o Blockchain são uma combinação perfeita. Por quê? Você pode endereçar grandes quantidades de dados com o IPFS e colocar os links IPFS permanentes e imutáveis em uma transação de blockchain. Isso fará com que o carimbo de data e hora proteja seu conteúdo, sem a necessidade de colocar os dados na própria cadeia. Agora você tem uma prova incontestável de que sua imagem existia no momento em que foi carregada.

Este projeto é um aplicativo descentralizado Ethereum (dApp) usando React, Redux, React Router e Bootstrap. Ele demonstra como implementar os uploads de arquivos IPFS e armazenar o hash IPFS na blockchain.


### Index

Nesta aplicação, a página principal exibe uma lista de cartões de imagem filtrados pelo proprietário, ou seja, conta MetaMask. Cada placa de imagem exibe a imagem, título, descrição, tags, carimbo de data e hora de upload e hash IPFS.

### Upload imagem

Clique para enviar a imagem conforme adicinado no repositório

###  Ver detalhes

Exibe as imagens com detalhes do seu armazenamento

## Ferramentas ou tecnologias usadas

Foram usados os seguintes itens:

- Solidity contratos
- IPFS para guardar as imagens via Infura
- Truffle and Ganache para seu desenvolvimento e teste framework
- React / Redux / Bootstrap 4 para o front-end
- MetaMask para seu provedor web3
- OpenZeppelin

## Pontos importantes

1.  Instale o aplicativo [Metamask](https://metamask.io/) plugin para o Chrome.
2.  Veja sua versão do node [Node.js](https://nodejs.org/en/) instalada.

## Instalação

1.  Instale [Truffle Framework](http://truffleframework.com/) e [Ganache CLI](http://truffleframework.com/ganache/) globalmente. 

    ```bash
    npm install -g truffle
    npm install -g ganache-cli
    ```

2.  Execute o ganache desenvolvimento

    ```bash
    ganache-cli
    ```

    ```bash
    // usando o atributo para executar abaixo
    ganache-cli -b 3
    ```

3.  Clone o repositório abaixo

    ```bash
    git clone https://github.com/fcd007/Multimidia-Dapps-Ethereum-Imagem-IPFS

    cd ipfs-image-dapp

    npm install
    ```

    <strong>Note</strong>: pode ocorrer erros, apenas revisar os passos anteriores

4.  Compilar e migrar os contratos para truffle

    ```bash
    truffle compile
    truffle migrate

    # podemos usar a combinação dos dois comandos acima
    truffle migrate --reset ---compile-all
    ```

5.  Iniciar aplicação

    ```bash
    yarn run start ou npm run start
    ```

6.  Navegue para http://localhost:3000/.

7.  Conecte sempre o [MetaMask](https://metamask.io/) para poder gerenciar suas contas Ganache.

    - Conete no Localhost 8545, ou
    - Cria uma conexão personalizada com Ganache RPC server (currently `http://127.0.0.1:8545`),
    - Importe uma nova conta para testar se tudo funcionou bem.

## Teste

### Faça os teste de unidade

Abra o terminal e pode executar os comandos `truffle test` or `npm run sol:test`.

```shell
$ truffle test
Using network 'development'.
```

### To run solidity coverage.

Abra o terminal e execute `npm run coverage:solidity ou yarn run coverage:solidity`.

```bash
$ yarn run sol:coverage

```

## Implantar para Rinkeby TestNet

Sigas as etapas para implantar seus contratos diretamente no Truffle com Infura para o Rinkeby TestNet.

1.  Obtenha uma chave [Infura](https://infura.io/) API key. Pode s criar uma conta aqui [free](https://infura.io/signup).
2.  Criar um .env arquivo  na raiz do diretório do projeto "src" se não existe
    ```bash
    cd ipfs-image-dapp
    touch .env
    ```
3.  Atualizar .env arquivo com seu MetaMask mnenomic e Infura API Key
    ```javascript
    MNENOMIC = '<Your MetaMask recovery words>'
    INFURA_API_KEY = '<Your Infura API Key after its registration>'
    ```
4.  Implatar para Rinkeby com `truffle migrate --reset --compile-all --network rinkeby`

    ```bash
    $ truffle migrate --reset --compile-all --network rinkeby
    Compiling ./contracts/ImageRegister.sol...
    Compiling ./contracts/Migrations.sol...
    Compiling openzeppelin-solidity/contracts/lifecycle/Destructible.sol...
    Compiling openzeppelin-solidity/contracts/ownership/Ownable.sol...
    Writing artifacts to ./build/contracts

    Usando a rede 'rinkeby'.

    Running migration: 1_initial_migration.js
      Deploying Migrations...
      ... 0xb2d3cebfca0c1a2e0d271c07740112460d82ce4469ba14d7b92f9993314af50c
      Migrations: 0x4ed3265ed135a4c85669f32ca662bd2aba3e5db3
    Saving successful migration to network...
      ... 0xde1d86d1efbeae9d086e0d1d170a20bbe1f570e92816d231265874f2a8afe556
    Saving artifacts...
    Running migration: 2_deploy_contracts.js
      Deploying ImageRegister...
      ... 0xcfbe99781c8c0cd77dd208eb445b2c12381704441e3827b2308a88d9c9b29079
      ImageRegister: 0x107aaa697293b44376de69ad4b87579e3b1e50d8
    Saving successful migration to network...
      ... 0x46ad7dbe55f412a55c76e48bf7553603c0826a19cda92f45f319699b8eb5a203
    Saving artifacts...
    ```

5.  Execute os pasos como descrito acima

Caso deseje pode ver um passo a passo[Deploy Your Smart Contract Directly from Truffle with Infura](https://medium.com/coinmonks/deploy-your-smart-contract-directly-from-truffle-with-infura-ba1e1f1d40c2) by Hyungsuk Kang.

## Problemas comuns:

- Ganache está correndo?
- A sua conta MetaMask está desbloqueada?
- Você está usando a conta MetaMask associada à sua conta Ganache?
- Você está usando sua rede RPC personalizada no MetaMask?
- Se o MetaMask não encontrar sua rede RPC, tente alternar para a rede de teste Rinkeby e vice-versa.
 
 - Tente redefinir a conta MetaMask que você criou nas configurações.
- O `truffle migrate` mostra configurações obsoletas?
  - Tente `truffle migrate --reset`
- As imagens não aparecem imediatamente?
  - Observe no Mac que o ganache-cli pode interromper as transações. Tente usar o aplicativo Ganache.
  - Se você estiver usando o Rinkeby TestNet, pode levar até um minuto para que a transação seja minerada.

## Documentação oficial de ajuda?

1 - [Truffle](http://truffleframework.com/)


2- [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). 


3- [Ethereum Project](https://ethereum.org/)


4 - [OpenZeppelin](https://openzeppelin.org/)


5 - [IPFS](https://ipfs.io/).


## Notas sobre o front-end

O projeto usa como base o [Bootstrap 4](https://getbootstrap.com/).
e ferramenta de estilo de formatação padrão:
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# License

MIT
