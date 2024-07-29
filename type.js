document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const typeName = params.get('type');

    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    const typeData = await response.json();

    const typeList = document.getElementById('type-list');

    typeData.pokemon.forEach(pokemonEntry => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.textContent = pokemonEntry.pokemon.name;
        pokemonCard.addEventListener('click', () => {
            window.location.href = `pokemon.html?name=${pokemonEntry.pokemon.name}`;
        });
        typeList.appendChild(pokemonCard);
    });
});
