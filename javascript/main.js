import {
  showInfo,
  showInfo0,
  showInfo1,
  showInfo2,
  showInfo3,
  showInfo4,
  showInfo5,
  showInfo6,
  showInfo7,
  showInfo8,
  showInfo9,
  showInfo10,
  showInfo11,
  showInfo12,
  showInfo13,
  showInfo14,
  showInfo15,
  showInfo16,
  showInfo17,
  showInfo18,
  showInfo19,
  showInfo20,
  showInfo21,
  showInfo22,
} from "./functions/function.js";
const pokemonCards = document.querySelector("#pokemonCards");
const modalTitle = document.querySelector("#modalTitle");
const bodyModal = document.querySelector("#bodyModal");
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
    showInfo(filteredPokemon);
    if (name === "") {
      pokemonCards.innerHTML = "";
      switch (URLactual) {
        case "/pages/index.html":
          showInfo0(pokemones);
          break;
        case "/pages/page2.html":
          showInfo1(pokemones);
          break;
        case "/pages/page3.html":
          showInfo2(pokemones);
          break;
        case "/pages/page4.html":
          showInfo3(pokemones);
          break;
        case "/pages/page5.html":
          showInfo4(pokemones);
          break;
        case "/pages/page6.html":
          showInfo5(pokemones);
          break;
        case "/pages/page7.html":
          showInfo6(pokemones);
          break;
        case "/pages/page8.html":
          showInfo7(pokemones);
          break;
        case "/pages/page9.html":
          showInfo8(pokemones);
          break;
        case "/pages/page10.html":
          showInfo9(pokemones);
          break;
        case "/pages/page11.html":
          showInfo10(pokemones);
          break;
        case "/pages/page12.html":
          showInfo11(pokemones);
          break;
        case "/pages/page13.html":
          showInfo12(pokemones);
          break;
        case "/pages/page14.html":
          showInfo13(pokemones);
          break;
        case "/pages/page15.html":
          showInfo14(pokemones);
          break;
        case "/pages/page16.html":
          showInfo15(pokemones);
          break;
        case "/pages/page17.html":
          showInfo16(pokemones);
          break;
        case "/pages/page18.html":
          showInfo17(pokemones);
          break;
        case "/pages/page19.html":
          showInfo18(pokemones);
          break;
        case "/pages/page20.html":
          showInfo19(pokemones);
          break;
        case "/pages/page21.html":
          showInfo10(pokemones);
          break;
        case "/pages/page22.html":
          showInfo21(pokemones);
          break;
        case "/pages/page23.html":
          showInfo22(pokemones);
          break;
        default:
          break;
      }
    }
  });
}

function info(data) {
  if (URLactual === "/pages/index.html") {
    showInfo0(data);
  } else if (URLactual === "/pages/page2.html") {
    showInfo1(data);
  } else if (URLactual === "/pages/page3.html") {
    showInfo2(data);
  } else if (URLactual === "/pages/page4.html") {
    showInfo3(data);
  } else if (URLactual === "/pages/page5.html") {
    showInfo4(data);
  } else if (URLactual === "/pages/page6.html") {
    showInfo5(data);
  } else if (URLactual === "/pages/page7.html") {
    showInfo6(data);
  } else if (URLactual === "/pages/page8.html") {
    showInfo7(data);
  } else if (URLactual === "/pages/page9.html") {
    showInfo8(data);
  } else if (URLactual === "/pages/page10.html") {
    showInfo9(data);
  } else if (URLactual === "/pages/page11.html") {
    showInfo10(data);
  } else if (URLactual === "/pages/page12.html") {
    showInfo11(data);
  } else if (URLactual === "/pages/page13.html") {
    showInfo12(data);
  } else if (URLactual === "/pages/page14.html") {
    showInfo13(data);
  } else if (URLactual === "/pages/page15.html") {
    showInfo14(data);
  } else if (URLactual === "/pages/page16.html") {
    showInfo15(data);
  } else if (URLactual === "/pages/page17.html") {
    showInfo16(data);
  } else if (URLactual === "/pages/page18.html") {
    showInfo17(data);
  } else if (URLactual === "/pages/page19.html") {
    showInfo18(data);
  } else if (URLactual === "/pages/page20.html") {
    showInfo19(data);
  } else if (URLactual === "/pages/page21.html") {
    showInfo20(data);
  } else if (URLactual === "/pages/page22.html") {
    showInfo21(data);
  } else if (URLactual === "/pages/page23.html") {
    showInfo22(data);
  }
}
