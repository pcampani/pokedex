$(document).ready(function(){
	var promise = $.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
	promise.done(function(data){
		data.results.forEach(pokemon => {
			var pokemon = $.get(pokemon.url);
			pokemon.done(function(poke){
				$(".pokemon").append(`<img src="${poke.sprites.front_default}">`);
			})
		})
	})
	$(".pokemon").on("click", function(e){
		$(".pokedex").html("");
		var str = e.target.src;
		var id = str.match(/(\d+)/)[0];
		var promise = $.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		promise.done(function(pokemon){
			$(".pokedex").append(`<h2>${pokemon.name}</h2>`);
			$(".pokedex").append(`<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`);
			$(".pokedex").append(`<h2>Types</h2>`);
			pokemon.types.forEach(poke => {
				$(".pokedex").append(`<p>${poke.type.name}</p>`);
			});
			$(".pokedex").append(`<h2>Height</h2>`);
			$(".pokedex").append(`${pokemon.height}`);
			$(".pokedex").append(`<h2>Weight</h2>`);
			$(".pokedex").append(`${pokemon.weight}`);
		})

	})
})