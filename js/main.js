const form = document.getElementById('novoItem')

const lista = document.getElementById('lista')


form.addEventListener('submit', (evento) => {
  evento.preventDefault()

  criaItemNalista(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
  
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

}


console.log(form)