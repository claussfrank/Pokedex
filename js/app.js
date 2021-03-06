var cargarPagina = function(){
    cargarPersonajes();
    $('.modal').modal();

    //    $(document).on("click", ".poderes", mostrarPoderes);
};

var cargarPersonajes = function(){
    var url = 'https://pokeapi.co/api/v2/pokemon/';
    $.getJSON(url, function(response){
        var personajes = response.results;
        mostrarPersonajes(personajes);
    });  
};
var plantillaPokemon = '<div class="col s12 m2 pokemon" data-url="//pokeapi.co/api/v2/pokemon-species/**numeroPokemon**/">' +
    '<div class="card">' +
    '<div class="card-image">'+
    '<img src="assets/img/**nombreFoto**.png">' +
    '</div>'+
    '<div class="card-title">'+
    '<h4><a href="#modal1" class="">**nombre**</a></h4>'+
    '</div>'+
    '<div class="card-action">'+
   
    '</div>'+
    '</div>'+
    '</div>'; 

var mostrarPersonajes = function(personajes){
    var $listaPokemon = $('#listaDePokemones');
    var plantillaFinal=" ";

    personajes.forEach(function(personaje,index){
        plantillaFinal += plantillaPokemon.replace('**nombre**',personaje.name).replace('**nombreFoto**',personaje.name).replace('**numeroPokemon**',index+1)  
        
    });
    
    $listaPokemon.html(plantillaFinal);

};

var caracteristicasPokemon= function(){
    var url = $(this).data("url");
    var nombrePokemon = $(this)[0].textContent
    console.log($(this))
    
    $.getJSON(url,function(response){
        var pokemonColor = response.color;
        var pokemonGenera = response.genera[0];
        var pokemonHabitat = response.habitat.name;
        var pokemonShape = response.shape;
        console.log(response);
        
        modalPokemon(nombrePokemon,nombrePokemon,pokemonColor,pokemonHabitat, pokemonShape,pokemonGenera)
       
    });
    console.log(url);   
};
var modalPokemon = function(nombreImagen,nombrePokemon,pokemonColor,pokemonHabitat, pokemonShape,pokemonGenera){
    $("#imagenPokemon").attr("src","assets/img/"+nombreImagen+".png");
    $("#nombrePokemon").text(nombrePokemon);
    $("#colorPokemon").text(pokemonColor.name);
    $("#habitatPokemon").text(pokemonHabitat);
    $("#shapePokemon").text(pokemonShape.name);
    
    $("#generoPokemon").text(pokemonGenera.genus);
};



$(document).on("click",".pokemon",caracteristicasPokemon);
$(document).ready(cargarPagina);
