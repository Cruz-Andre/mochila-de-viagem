const form = document.getElementById('novoItem')

const lista = document.getElementById('lista')

//JSON.parse() para colocar os dados transformados em string para sua formatação original
//localstorage.getItem() para buscar os dados armazenados localmente se existirem ou
//ou então cria um array vazio.
const itens = JSON.parse(localStorage.getItem('itens')) || []

console.log(itens)

itens.map(item => criaItemNalista(item))

form.addEventListener('submit', (evento) => {
  evento.preventDefault()

  const nomeDigitado = evento.target.elements['nome']
  const quantidadeDigitado = evento.target.elements['quantidade']

  
  //para armazenar mais de uma informação no localstorage crie um array (const itens = []), monte um objeto (const itemAtual = {}), adicione cada objeto no array itens.push(itemAtual)
  const itemAtual = {
    'nome': nomeDigitado.value,
    'quantidade': quantidadeDigitado.value
  }
  
  criaItemNalista(itemAtual)

  itens.push(itemAtual)

  //O JSON.stringify para colocar tudo como string, localstorage só aceita strings
  localStorage.setItem('itens', JSON.stringify(itens))


  nomeDigitado.value = ''
  quantidadeDigitado.value = ''

})

function criaItemNalista(item) {
  
  // <li class="item"><strong>7</strong>Camisas</li>
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = item.quantidade

  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += item.nome //novoItem.innerHTML = novoItem.innerHTML + nome

  lista.appendChild(novoItem)
  
}


console.log(form)