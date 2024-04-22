const pokemonContainer = document.getElementById("pokemon-container");
const pokemonsNumber = 101;// will display first 100 by ID

const fetchPokemons = async () => {
    for (let i = 1; i < pokemonsNumber; i++) {
      await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const resolve = await fetch(apiUrl);
    const pokemon = await resolve.json();
    createPokemonCard(pokemon, id); 
};

fetchPokemons();

const createPokemonCard = (pokemon, id) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    if (id < 10) {    
      id = "0" + id;  // append 0 to single digit ID no.

    }

    const pokeInnerHTML = `
    <div class="card">
      <div id="pokemon-card-f" class="front">
        <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png" alt="">
        </div>
          <div class="info">
            <h3 class="name">${name}</h3>
            <h5 class="name">ID No.: ${id}</h5>
            <small class="type">Type: ${pokemon.types[0].type.name}</small>
          </div> 
        </div>

    </div>
    <div id="pokemon-card-b" class="back">
      <div class="info">
        <h3 class="name">${name}</h3>
        <h5 class="name">ID No.: ${id}</h5>
        <small class="type">Type: ${pokemon.types[0].type.name}</small>
      </div> 
    </div>
      `;

    pokemonElement.innerHTML = pokeInnerHTML;
    pokemonContainer.appendChild(pokemonElement);
};
