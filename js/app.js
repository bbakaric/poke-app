const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');

const getPokemonData = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
    const response = await fetch(url);

    if(response.status == 404 || response.statusText == 'Not Found' || `${term}` == ''){
        alert('Pokemon not found!');
        return;
    }

    const pokemon = await response.json()

    // console.log(pokemon);

    document.getElementById('poke_name').innerHTML = `Name: ${pokemon.name}`;
    document.getElementById('poke_type').innerHTML = `Type: ${pokemon.types[0].type.name}`;
    document.getElementById('poke_hp').innerHTML = `HP: ${pokemon.stats[0].base_stat}`;
    document.getElementById('poke_attack').innerHTML = `Attack: ${pokemon.stats[1].base_stat}`;
    document.getElementById('poke_defense').innerHTML = `Defense: ${pokemon.stats[2].base_stat}`;
    document.getElementById('table').classList.add('show-table');
    document.getElementById("poke_image").setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
}

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getPokemonData(searchBar.value);
});

randomBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * (899 - 1)) + 1;
    getPokemonData(randomId);
});