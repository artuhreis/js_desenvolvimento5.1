const tituloH1 = document.getElementById("titulo");
tituloH1.innerText = 'Esse é o Titulo dessa Página!'

const link = document.querySelector("a");
link.innerText = "Clique aqui pra acessar o Proz Educação";

const listaNOrdenada = document.querySelector("ul");
listaNOrdenada.innerHTML = `
    <li>Teste 1</li>
    <li>Teste 2</li>
    <li>Teste 3</li>
`

const lista_ordenada = document.getElementById("lista-ordenada")
lista_ordenada.innerHTML = `
    <li><a href="https://www.linkedin.com/feed/">Meu Linkedin</a></li>
    <li><a href="https://github.com/artuhreis">Meu GitHuB</a></li>
    <li><a href="https://www.twitch.tv/artuhreis">Meu Canal na Twitch TV</a></li>
`