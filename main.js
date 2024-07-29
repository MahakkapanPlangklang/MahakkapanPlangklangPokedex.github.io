document.addEventListener('DOMContentLoaded', () => {
    let offset = 0;

    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.addEventListener('click', loadPokemon);

    async function loadPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        const data = await response.json();

        const pokemonList = document.getElementById('pokemon-list');

        for (const pokemon of data.results) {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            pokemonCard.textContent = pokemon.name;
            pokemonCard.addEventListener('click', () => {
                window.location.href = `pokemon.html?name=${pokemon.name}`;
            });
            pokemonList.appendChild(pokemonCard);
        }

        offset += 20;
    }

    loadPokemon();
});
