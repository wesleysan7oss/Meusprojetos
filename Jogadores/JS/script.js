
//DOM
var Nome = document.querySelector('#NomeJogador')
var Foto = document.querySelector('#FotoJogador')

const Halland = document.querySelector('#BotaoHaaland')
 Halland.addEventListener('click', () => {
    Nome.textContent='Erling Halland'
    Foto.src = 'Imagens/haaland.webp'
 })

 const Cristiano = document.querySelector('#BotaoCristiano')
  Cristiano.addEventListener('click', () => {
    Nome.textContent = 'Cristiano Ronaldo' 
    Foto.src = 'Imagens/cr7.jpg'
    })

const Mbappe = document.querySelector('#BotaoMbappe')
  Mbappe.addEventListener('click', () => {
    Nome.textContent = 'Kylian Mbappé'
    Foto.src = 'Imagens/mbappe.webp'
  })

const Neymar = document.querySelector('#BotaoNeymar')
  Neymar.addEventListener('click', () => {
    Nome.textContent = 'Neymar Júnior'
    Foto.src = 'Imagens/neymar.webp'
  })

const Dybala = document.querySelector('#BotaoDybala')
  Dybala.addEventListener('click', () => {
    Nome.textContent = 'Paulo Dybala'
    Foto.src = 'Imagens/dybala.webp'
  })

const Messi = document.querySelector('#BotaoMessi')
  Messi.addEventListener('click', () => {
    Nome.textContent = 'Lionel Messi'
    Foto.src = 'Imagens/messi.jpg'
  })