# Testes na API de "O Senhor dos Aneis" com Cypress

## Sobre o projeto

Essa é uma aplicação de testes automatizados em uma API com informações sobre a saga de livros e filmes "O Senhor dos Aneis". Os testes foram aplicados em todos os endpoints da API, cujos resultados são disponibilizados em relatório gerado pelo Allure. 

Além disso, foi desenvolvida uma pipeline no Github Actions para que os testes sejam executados e o relatórios sejam gerados a cada push ou pull request na branch main do repositório.

## Link da API
https://the-one-api.dev/

## Tecnologias utilizadas

- Cypress
- Allure Report
- Github Actions

## Endpoints com testes automatizados

- [GET] Listar todos os livros (/book)
- [GET] Obter um livro específico (/book/{id})
- [GET] Listar os capítulos de um livro específico (/book/{id}/chapter)
- [GET] Listar todos os filmes (/movie)
- [GET] Obter um filme específico (/movie/{id})
- [GET] Listar citações de um filme específico (/movie/{id}/quote)
- [GET] Listar todos os personagens (/character)
- [GET] Obter um personagem específico (/character/{id})
- [GET] Listar citações de um personagem específico (/character/{id}/quote)
- [GET] Listar todas as citações de filmes (/quote)
- [GET] Obter uma citação de filme específica (/quote/{id})
- [GET] Listar todos os capítulos de livros (/chapter)
- [GET] Obter um capítulo de livro específico (/chapter/{id})

## Relatório gerado
![image](https://github.com/pauloliveiram/the-one-cypress/assets/39312072/1084e469-a2eb-4034-aec4-180d231cb067)

## Como executar os testes

### Pré-requisitos

- Node instalado na máquina
- Java 8 instalado na máquina (Necessário para executar o binário allure)
- Após o clonar o repositório, é necessário gerar um token de autenticação no site da API e inserí-lo na variável vazia "AUTH_TOKEN" no arquivo "cypress.env.json"

```bash

# Clonar repositório
git clone https://github.com/pauloliveiram/the-one-cypress.git

# Entrar na pasta do projeto
cd the-one-cypress

# Instalar dependências especificadas no arquivo package.json 
npm install
	
# Executar os testes e gerar arquivos na pasta allure-results
npm run tests
					
# Gerar os relatórios a partir dos arquivos da pasta allure-results e abrir o browser com os relatórios
npm run allure-report
								
# Caso queira executar os testes e gerar os relatórios novamente, antes é necessário limpar a pasta allure-results com o seguinte comando:
npm run clean:folders					
```

 ### ESLint e Prettier
No projeto foram utilizadas as ferramentas ESLint e Prettier para garantir uma melhor qualidade do código desenvolvido. 
- **ESLint:** é responsável por analisar o código e identificar problemas de acordo com regras pré-estabelecidas
- **Prettier:** é responsável por formatar o código de acordo com regras pré-estabelecidas

```bash

# Executar o ESLint
npx eslint .

# Executar o Prettier
npx prettier . --write
```

# Autor

Paulo Oliveira



