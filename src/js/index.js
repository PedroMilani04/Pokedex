const lista = document.querySelectorAll('.pokemon')
const cartao = document.querySelectorAll('.cartao-poke')

lista.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const pokeAberto = document.querySelector('.aberto')
        pokeAberto.classList.remove('aberto')

        const idSelec = pokemon.attributes.id.value

        const cartaoAbrir = document.getElementById('cartao-' + idSelec)
        cartaoAbrir.classList.add('aberto')

        const pokeAtivo = document.querySelector('.ativo')
        pokeAtivo.classList.remove('ativo')

        const pokeSelec = document.getElementById(idSelec)
        pokeSelec.classList.add('ativo')
    })
})