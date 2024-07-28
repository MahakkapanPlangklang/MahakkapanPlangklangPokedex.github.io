async function fetchPokemonDetails(pokemonId) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      displayPokemonDetails(data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  }
  
  function displayPokemonDetails(pokemon) {
    document.getElementById('pokemon-sprite').src = pokemon.sprites.front_default;
    document.getElementById('pokemon-name').textContent = pokemon.name;
    document.getElementById('pokemon-height').textContent = pokemon.height;
    document.getElementById('pokemon-weight').textContent = pokemon.weight;
  
    const types = pokemon.types.map(typeInfo => {
      const typeElement = document.createElement('a');
      typeElement.href = `types.html?type=${typeInfo.type.name}`;
      typeElement.textContent = typeInfo.type.name;
      return typeElement;
    });
    document.getElementById('pokemon-types').replaceChildren(...types);
  
    const stats = pokemon.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');
    document.getElementById('pokemon-stats').textContent = stats;
  
    const abilities = pokemon.abilities.map(abilityInfo => {
      const abilityElement = document.createElement('a');
      abilityElement.href = `abilities.html?ability=${abilityInfo.ability.name}`;
      abilityElement.textContent = abilityInfo.ability.name;
      return abilityElement;
    });
    document.getElementById('pokemon-abilities').replaceChildren(...abilities);
  }
  
  // Fetch and display details for a specific Pokemon (example with id 1)
  fetchPokemonDetails(1);
  