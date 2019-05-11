$(document).ready(function(){


//starter function to pull a random pokemon from the PokeAPI
    $("#leftButton").click(getRandomPokemonLeft)
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
      
      
    });
  }
  $("#rightButton").click(getRandomPokemonRight)
  function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Right Pokemon Data: ", pokeData);
      
    
    });
  }
  


//all code here





})
