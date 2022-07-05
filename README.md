<h2 align="center">Custom Chart</h2>


## Sobre 

<p>O projeto Custom Charts foi desenvolvido a partir de um desafio proposto pela educadora da Rocketseat <a href="https://www.instagram.com/jakeliny.gracielly/">Jakeliny Gracielly</a>.<br/>
O desafio consiste em concluir um dos projetos do site DevChallenge ou da Plataforma Discover da Rocketseat e adicionar uma nova feature que faça sentido no contexto do projeto.</p>

<p>O desafio que escolhi como base foi o <a href="https://github.com/Lorenalgm/AmazingGraph">Amazing Graph</a>, o projeto consiste em uma Landing Page relacionada ao tema de construção de gráficos. Com isso tive a ideia de desenvolver uma feature que permitisse que o usuário personalizasse seu próprio gráfico, definindo títulos, valores e a categoria do mesmo.</p>

<p>A Tela de customização conta com dois campos de input, um para títulos ou descrições e outro para valores numéricos, em ambos os campos os valores devem ser inseridos intercaladamente por vírgulas, após a inserção basta clicar no botão to send que o gráfico se adapta aos requisitos. Além disso, podemos alterar a categoria do gráfico por meio do botão à direita, toggle chart, alternando entre os tipos Pie Chart e Doughnut Chart.</p>

____

<img src="https://user-images.githubusercontent.com/84761488/168529426-791e9a52-95ec-4136-a534-6dcd54ef605c.png">
<img src="https://user-images.githubusercontent.com/84761488/168529515-700bb750-7bba-4864-9aca-2ee2fc680cbc.png">



## Features

* Obtém informações da API do <a href="https://github.com">GitHub</a> e atualiza o gráfico da home.
* Permite que o usuário crie ou altere os títulos e valores do gráfico.
* Permite que o usuário alterne entre duas categorias de gráficos: Pie Chart e Doughnut Chart.

## Tecnologias

<p>O projeto conta com recursos fornecidos pelo react e libs externas, sendo esses:</p>

* <a href="https://reactrouter.com">React Router DOM</a> - Roteamento client-side
* <a href="https://styled-components.com">Styled Components</a> - CSS in JS
* Context - Descentralização de dados
* <a href="https://axios-http.com/ptbr/">Axios</a> - HTTP Client
* <a href="https://phosphoricons.com/">Phosphor Icons</a> - ícones
* <a href="https://vitejs.dev">Vite</a> - build tool

## Extras

* Alguns elementos do template original foram modificados visando proporcionar uma melhor experiência de usuário.

## Requisitos

Antes de executar o projeto é necessário ter o <a href="https://nodejs.org/en/">Node</a> instalado

## Como executar?

~~~javascript
//clone o repositório
$ git clone https://github.com/banRayan/marmiTech-challenge.git

//acesse 
$ cd marmiTech-challenge

//Instale as dependências 
$ npm install

//Inicie o projeto
$ npm run dev
~~~

