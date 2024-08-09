# Avaliação Técnica - Paradigma

O projeto neste repositório consiste em relalizar a automação de teste, para o primeiro caso de teste descrito no documento de resolução da Avaliação Técinica, ou seja, validar se é possível submeter um registro após o preenchimento dos campos obrigatórios.

O teste foi desenvolvido wm JS com [Cypress](https://www.cypress.io/).

# Arquitetura do Projeto

-   Cypress: Pasra Raiz do projeto
    - Integration:
       - Arquivo avaliacapTecnica.spec.js com o cenário de teste
    - Support:
       - Arquivo commands.js possui uma função para ignorar erros do tipo Uncaught Reference, para ser possível seguir com o cenário de teste

# Pré-Requisitos

Para a execução do teste é necessaŕio instalar as ferramentas abaixo:

- Node > Ultima versão LTS - instalação Node
- Cypress > versão 9.7.0
```sh
npm install cypress@9.7.o
```

## Rodando o teste
Para realizar a execução dos testes, basta roda o comando abaixo:
```sh
npx cypress run
```
Os resultados serão apresentados no terminal ao fim da execução e um vídeo será disponibilidado para maiores detalhes.

## Resultado
O teste vai resultar no primeiro erro reportado no documento de resolução da Avaliação Técnica, ao final do teste é esperado uma mensagem de sucesso de envio do formulário, porém a mensagem nunca aparece pois o campo "Country" não pode ser preenchido.

![image](https://github.com/user-attachments/assets/cdaa9d5e-192d-4f68-a1c9-5b9a26aef2ce)

## Considerações

A função feita para ignorar erros de console para prosseguir com testes de interface não é ideal num cenário real, outro questão a pontuar é que para identificação dos elementos da página o ideal seria a utilização de ids de teste.
O site dificultou muito o desenvolvimentos de cenários com resultados positivos, exigia muitas "gambiarras", então optei por manter o mais simples possível.
