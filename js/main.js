const form = document.getElementById('novoItem')

const lista = document.getElementById('lista')

const itens = []


form.addEventListener('submit', (evento) => {
  evento.preventDefault()

  const nomeDigitado = evento.target.elements['nome']
  const quantidadeDigitado = evento.target.elements['quantidade']

  criaItemNalista(nomeDigitado.value, quantidadeDigitado.value)

  nomeDigitado.value = ''
  quantidadeDigitado.value = ''

})

function criaItemNalista(nome, quantidade) {
  
  // <li class="item"><strong>7</strong>Camisas</li>
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = quantidade

  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += nome //novoItem.innerHTML = novoItem.innerHTML + nome

  lista.appendChild(novoItem)

  //para armazenar mais de uma informação no localstorage crie um array (const itens = []), monte um objeto (const itemAtual = {}), adicione cada objeto no array itens.push(itemAtual)
  const itemAtual = {
    'nome': nome,
    'quantidade': quantidade
  }

  itens.push(itemAtual)

  localStorage.setItem('item', JSON.stringify(itens))
}


console.log(form)