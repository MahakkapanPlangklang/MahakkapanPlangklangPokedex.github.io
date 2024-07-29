document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const abilityName = params.get('ability');

    const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
    const abilityData = await response.json();

    const abilityList = document.getElementById('ability-list');

    abilityData.pokemon.forEach(pokemonEntry => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.textContent = pokemonEntry.pokemon.name;
        pokemonCard.addEventListener('click', () => {
            window.location.href = `pokemon.html?name=${pokemonEntry.pokemon.name}`;
        });
        abilityList.appendChild(pokemonCard);
    });
});
