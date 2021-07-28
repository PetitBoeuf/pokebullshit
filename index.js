const pokemonimages = ["Absol/stat-absol.png", "Amphinobi/stat-greninja.png", "Blancoton/stat-eldegoss.png","Carchacrok/stat-garchomp.png","Crabaraque/stat-crustle.png","Dracaufeu/stat-charizard.png", "Ectoplasma/stat-gengar.png","Feunard Alola/stat-alolan-ninetales.png","Flagadoss/stat-slowbro.png","Flambusard/stat-talonflame.png","Florizarre/stat-venusaur.png","Grodoudou/stat-wigglytuff.png","Lucario/stat-lucario.png","Mackogneur/stat-machamp.png","Mr Mime/stat-mrmime.png","Nigosier/stat-cramorant.png","Pikachu/stat-pikachu.png","Pyrobut/stat-cinderace.png","Ronflex/stat-snorlax.png","Zeraora/stat-zeraora.png"];

var randomPokemon = pokemonimages.splice(Math.floor(Math.random() * pokemonimages.length),1);
document.querySelectorAll('.bg-pokemon')[0].src = randomPokemon;


var andAnotherOne = pokemonimages[Math.floor(Math.random() * pokemonimages.length)];

document.querySelectorAll('.bg-pokemon')[1].src = andAnotherOne;