let idPokemon = document.getElementById("idPokemon");
let nombrePokemon = document.getElementById("nombrePokemon");
let imgPokemon = document.getElementById("imgPokemon");
let tipoPokemon = document.getElementById("tipo");
let tipo2Pokemon = document.getElementById("tipo2");
let fondoPokemon=document.getElementById("contenedorPokemon");

let numPokemon = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
idPokemon.innerText = numPokemon;

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
} 

var json = JSON.parse(Get(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`));
console.log(json);

idPokemon.innerText=`ID #${numPokemon}`;

nombrePokemon.innerText=formatearTexto(json.name);
imgPokemon.src=json.sprites.front_default;
tipoPokemon.innerText=formatearTexto(json.types[0].type.name);
if(json.types[1]!=null){
    tipo2Pokemon.innerText=formatearTexto(json.types[1].type.name);
}
fondoPokemon.classList.remove("normal");
fondoPokemon.classList.add(json.types[0].type.name);

function formatearTexto(cadena){
    return cadena[0].toUpperCase() + cadena.substring(1);
}