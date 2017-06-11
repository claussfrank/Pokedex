$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
	function (response) {
	var pokemons = response.results;
	console.log(pokemons);
});

var cargarPagina = function(){
    $('.modal').modal();
};




 $(document).ready(cargarPagina);
 