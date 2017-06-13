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
var plantillaPokemon = '<div class="col s12 m2 pokemon">' +
    '<div class="card">' +
    '<div class="card-image">'+
    '<img src="assets/img/**nombreFoto**.png">' +
    '</div>'+
    '<div class="card-title">'+
    '<h4>**nombre**</h4>'+
    '</div>'+
    '<div class="card-action">'+
    '<a href="#modal1" class="poderes">Ver Poderes</a>' +
    '</div>'+
    '</div>'+
    '</div>'; 

var mostrarPersonajes = function(personajes){
    var $listaPokemon = $('#listaDePokemones');
    var plantillaFinal=" ";

    personajes.forEach(function(personaje,index){
        plantillaFinal += plantillaPokemon.replace('**nombre**',personaje.name).replace('**nombreFoto**',personaje.name) 
        
    });
    
    $listaPokemon.html(plantillaFinal);

};







$(document).ready(cargarPagina);
