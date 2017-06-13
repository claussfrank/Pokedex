var cargarPagina = function(){
    cargarPersonajes();
    $('.modal').modal();

    //    $(document).on("click", ".poderes", mostrarPoderes);
};

var cargarPersonajes = function(){
    var url = 'http://pokeapi.co/api/v2/pokemon/';
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
    '<h4>**nombre**</h4>'+
    '</div>'+
    '<div class="card-action">'+
    '<a href="#modal1" class="">Ver Caracteristicas </a>' +
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
    
    $.getJSON(url,function(response){
        var pokemonColor = response.color;
        var pokemonGenera = response.genera[0];
        var pokemonHabitat = response.habitat.name;
        var pokemonShape = response.shape;
        
        modalPokemon(nombrePokemon,nombrePokemon,pokemonColor,pokemonGenera,pokemonHabitat,pokemonShape)
       
    });
    console.log(url);   
};
var modalPokemon = function(nombreImagen,nombrePokemon,pokemonColor,pokemonHabitat, pokemonShape,pokemonGenera ){
    $("#imagenPokemon").attr("src","assets/img/"+ nombreImagen +".png");
    $("#nombrePokemon").text(nombrePokemon);
    $("#colorPokemon").text(pokemonColor.name);
    $("#shapePokemon").text(pokemonShape.name);
    $("#habitatPokemon").text(pokemonHabitat);
    $("#generoPokemon").text(pokemonGenera.genus);
};



$(document).on("click",".pokemon",caracteristicasPokemon);
$(document).ready(cargarPagina);
