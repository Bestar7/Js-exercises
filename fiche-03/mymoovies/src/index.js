import grootImage from "./img/groot.jpg";
import stormtrooperImage from "./img/stormtrooper.jpg";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

"use strict"

// This is the entry point to your app : add all relevant import and custom code
const homePage = `
<div class="text-center">
  <h3>Welcome to myMoovies !</h3>
  <h6>Quel sont vos films favoris</h6>
  <form action="add();">
    <label for="fname">Film name:</label><br>
    <input type="text" id="fname" name="fname" placeholder="SpoderMan" required><br>
    <label for="length">Last name:</label><br>
    <input type="number" id="length" name="length" placeholder="152" required><br>
    <label for="revenue">Revenue:</label><br>
    <input type="number" id="revenue" name="revenue" placeholder="152" required><br>
    <label for="link">imdb link:</label><br>
    <input type="url" id="link" name="link" placeholder="https://www.imdb.com/title/SpoderMan/" required><br>
    <input type="submit" value="Submit">
  </form> 
  <h6>Vos films</h6>
  <p>Here you can find a selection of our favorite moovies ; )</p>
  <div class="pb-3">
    <img class="img-thumbnail w-50" src="${grootImage}" alt="Groot" />
  </div>
  <div>
    <img
      class="img-thumbnail w-50"
      src="${stormtrooperImage}"
      alt="Stormtrooper"
    />
  </div>
</div>`;

const main = document.querySelector("main");

main.innerHTML = homePage;

// form handler
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault(); // empêche d'envoyer les champs (et de les vider)
  console.log("sent !!!");
  localFilmListMaker();
})

function localFilmListMaker(){
  form.length;
}