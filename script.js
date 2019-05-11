$(document).ready(function(){

let pokeButtonL = document.getElementById("leftButton");
pokeButtonL.addEventListener("click", getRandomPokemonLeft);

let pokeButtonR = document.getElementById("rightButton");
pokeButtonR.addEventListener("click", getRandomPokemonRight);

$("#battleButton").click(battle);

let leftDef;
let rightDef;
let leftN;
let rightN;
let lPic;
let rPic;
let alPic;

//starter function to pull a random pokemon from the PokeAPI
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
      leftPic = `<div class="lRemove" style="text-align: center">
      <p>${pokeData["name"]} <br> Defense: ${pokeData["stats"][3]["base_stat"]}</p>
      <img src=${pokeData["sprites"]["front_default"]}></div>`
      //console.log(leftPic);
      leftN = pokeData["name"];
      alPic = pokeData["sprites"]["front_default"];
      leftDef = pokeData["stats"][3]["base_stat"];
      console.log(leftDef);
      //$("#left").remove(".lRemove");
      $(".lRemove").remove();
      $("#left").append(leftPic);
    });
  }

  function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Right Pokemon Data: ", pokeData);
      rPic = `<div class="rRemove" style="text-align: center">
      <p>${pokeData["name"]} <br> Defense: ${pokeData["stats"][3]["base_stat"]}</p>
      <img src=${pokeData["sprites"]["front_default"]}>
      </div>`
      //console.log(rPic);
      rightN = pokeData["name"];
      arPic = pokeData["sprites"]["front_default"];
      rightDef = pokeData["stats"][3]["base_stat"];
      console.log(rightDef);
      //$("#right").remove(".rRemove");
      $(".rRemove").remove();
      $("#right").append(rPic);
    });
  }

  function battle() {
    let message;
    if (leftDef > rightDef) {
      message = `<div style="text-align: center"><h1>Winner: </h1><br><h2> ${leftN} <br></h2>
      <img src=${alPic}></div>`;
    } else if (rightDef > leftDef) {
      message = `<div style="text-align: center"><h1>Winner: </h1><br><h2> ${rightN} <br></h2>
      <img src=${arPic}></div>`;
    } else {
      message = `<h1 style="text-align: center">It's a tie!</h1>`;
    }

    $("#bArea").empty();
    $("#bArea").append(message);
  }


//all code here





});
