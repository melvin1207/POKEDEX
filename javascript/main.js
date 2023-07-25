import { buscadorPokemon, showInfo } from "./functions/function.js";
const pokemonCards = document.querySelector("#pokemonCards");
const nameInput = document.querySelector("#nameInput");
const URLactual = window.location.pathname.toString();

fetch("/pokemons.json")
  .then((response) => response.json())
  .then((data) => {
    info(data);
    nameFilter(data);
  })
  .catch((err) => console.error(err));

function nameFilter(pokemones) {
  nameInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const name = nameInput.value.toLowerCase().trim();

    const filteredPokemon = pokemones.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name)
    );
    buscadorPokemon(filteredPokemon);
    if (name === "") {
      pokemonCards.innerHTML = "";
      info(pokemones);
    }
  });
}

function info(data) {
  switch (URLactual) {
    case "/pages/index.html":
      showInfo(data, 0, 38);
      break;
    case "/pages/page2.html":
      showInfo(data, 39, 77);
      break;
    case "/pages/page3.html":
      showInfo(data, 78, 116);
      break;
    case "/pages/page4.html":
      showInfo(data, 117, 155);
      break;
    case "/pages/page5.html":
      showInfo(data, 156, 194);
      break;
    case "/pages/page6.html":
      showInfo(data, 195, 233);
      break;
    case "/pages/page7.html":
      showInfo(data, 234, 272);
      break;
    case "/pages/page8.html":
      showInfo(data, 273, 311);
      break;
    case "/pages/page9.html":
      showInfo(data, 312, 350);
      break;
    case "/pages/page10.html":
      showInfo(data, 351, 389);
      break;
    case "/pages/page11.html":
      showInfo(data, 390, 428);
      break;
    case "/pages/page12.html":
      showInfo(data, 429, 467);
      break;
    case "/pages/page13.html":
      showInfo(data, 468, 506);
      break;
    case "/pages/page14.html":
      showInfo(data, 507, 545);
      break;
    case "/pages/page15.html":
      showInfo(data, 546, 584);
      break;
    case "/pages/page16.html":
      showInfo(data, 585, 623);
      break;
    case "/pages/page17.html":
      showInfo(data, 624, 662);
      break;
    case "/pages/page18.html":
      showInfo(data, 663, 701);
      break;
    case "/pages/page19.html":
      showInfo(data, 702, 740);
      break;
    case "/pages/page20.html":
      showInfo(data, 741, 779);
      break;
    case "/pages/page21.html":
      showInfo(data, 780, 818);
      break;
    case "/pages/page22.html":
      showInfo(data, 819, 857);
      break;
    case "/pages/page23.html":
      showInfo(data, 858, 896);
      break;
    default:
      break;
  }
}
