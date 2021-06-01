const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const infoContainer = document.getElementById('infoContainer');

searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    let inputData = searchBar.value.trim();
    if(inputData !== ""){
        let xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let pokeInfo = "";
            let pokeData = JSON.parse(this.responseText);
            if(pokeData.length !== 0){
                let image, name, type, hp, attack, defense;
                for(const poke in pokeData){
                    // image = pokeData[poke].sprites.other[1].front_default;
                    name = pokeData[poke].name;
                    // type = pokeData[poke].types.type.name;
                    // hp = pokeData[poke].stats[0].base_stat;
                    // attack = pokeData[poke].stats[1].base_stat;
                    // defense = pokeData[poke].stats[2].base_stat;

                    pokeInfo += `<ul><li>${name}</li></ul>`;

                    console.log(pokeData);
                }
            }
            else{
                pokeInfo = 'Please enter valid Pokemon name!';
            }
            infoContainer.innerHTML = pokeInfo;
        }
    }
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${inputData}`, true);
    xhr.send();
    }
    else{
        while(infoContainer.hasChildNodes()){
            infoContainer.removeChild(infoContainer.firstChild);
        }
    }
});
