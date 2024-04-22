# pokedex-api

Rationale: To fetch needed info from PokeAPI to create a simple pokemon catalog

Left to accomplish for full functionality:
- apply flip card effect using css transform and transition property, add more divisions in html if necessary 
- search function: search thru pokemonElement.classList; display result in div with id="pokemon-container"
- sort function: sort pokemonElement.classList by ID no. or name depending on dropdown option
- add needed details for more info at the back of the card (flipped side)
ID No, 
Name, 
Height, ${pokemon.height}
Weight, ${pokemon.weight}
Types, ${pokemon.types[0].type.name}
Stats, ${pokemon.stats[i].stat.name} tas Base Stat: ${pokemon.stats[i].base_stat} tas Effort:${pokemon.stats[i].effort}
Abilities, ${pokemon.abilities[0].ability.name}
Weaknesses: depends on type, then check corresponding weakness https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses
