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

  const jaExiste = itens.find(item => item.nome === nome.value)
  
  //para armazenar mais de uma informação no localstorage crie um array (const itens = []), monte um objeto (const itemAtual = {}), adicione cada objeto no array itens.push(itemAtual)
  const itemAtual = {
    'nome': nomeDigitado.value,
    'quantidade': quantidadeDigitado.value
  }

  if(jaExiste) {
    itemAtual.id = jaExiste.id
    atualizaItem(itemAtual)
    itens[itens.findIndex(item =>  item.id === jaExiste.id)] = itemAtual
  } else {
    itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0
    criaItemNalista(itemAtual)
    itens.push(itemAtual)
  }
  
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
  numeroItem.dataset.id = item.id

  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += item.nome //novoItem.innerHTML = novoItem.innerHTML + nome

  novoItem.appendChild(botaoDeleta(item.id))

  lista.appendChild(novoItem)
}

function atualizaItem(item) {
  document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement('button')
  elementoBotao.innerText = 'X'
  
  elementoBotao.addEventListener("click", function() {
    deletaItem(this.parentNode, id)
  })

  return elementoBotao
}

function deletaItem(tag, id) {
  tag.remove()

  //remover o item do array
  itens.splice(itens.findIndex(item => item.id === id), 1)

  //atualizar o localstorage
  localStorage.setItem('itens', JSON.stringify(itens))
}