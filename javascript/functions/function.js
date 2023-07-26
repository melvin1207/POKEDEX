function buscadorPokemon(pokemones) {
  pokemonCards.innerHTML = "";
  pokemones.forEach((pokemon) => {
    const image = document.createElement("p");
    image.innerHTML += `
    <div class="card text-bg-light rounded" style="width: 18rem;">
    <img src="${pokemon.ThumbnailImage}" class="card-img-top" alt="...">
    <div class="card-body text-bg-dark rounded">
      <p class="card-text">N.º ${pokemon.number}</p>
      <h5 class="card-title text-center">${pokemon.name}</h5>
      <div class="d-flex flex-row m-2 flex-wrap ">
      ${pokemon.type
        .map((element) => `<div class="m-2 tipo">${element}</div>`)
        .join("")}
      </div>
      <button type="button" class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
        More Information
      </button>
    </div>
    </div>
    `;
    pokemonCards.appendChild(image);
  });

  const asignColorType = document.getElementsByClassName("tipo");
  const moreInfo = document.querySelectorAll(".moreInfo");

  buildModalBusqueda(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo(pokemones, min, max) {
  pokemonCards.innerHTML = "";
  for (let i = min; i <= max; i++) {
    const image = document.createElement("p");
    image.innerHTML += `
    <div class="card text-bg-light rounded" style="width: 18rem;">
    <img src="${pokemones[i].ThumbnailImage}" class="card-img-top" alt="...">
    <div class="card-body text-bg-dark rounded">
      <p class="card-text">N.º ${pokemones[i].number}</p>
      <h5 class="card-title text-center">${pokemones[i].name}</h5>
      <div class="d-flex flex-row m-2 flex-wrap ">
      ${pokemones[i].type
        .map((element) => `<div class="m-2 tipo">${element}</div>`)
        .join("")}
      </div>
      <button type="button" class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
        More Information
      </button>
    </div>
    </div>
    `;
    pokemonCards.appendChild(image);
  }

  const asignColorType = document.getElementsByClassName("tipo");
  const moreInfo = document.querySelectorAll(".moreInfo");

  buildModal(moreInfo, pokemones, asignColorType, min);

  asignColor(asignColorType);
}

function buildModalBusqueda(moreInfo, pokemones, asignColorType) {
  var URLactual = window.location.pathname.toString();
  moreInfo.forEach((nodo, index) => {
    nodo.addEventListener("click", function (e) {
      modalTitle.innerHTML = `${pokemones[index].name}`;
      bodyModal.innerHTML = `
      <img src="${pokemones[index].ThumbnailImage}" alt="${
        pokemones[index].name
      } image">
      <section class="container rounded text-bg-dark">
      <h4>Debilidades</h4>
      <ul style="list-style: none;">
        ${pokemones[index].weakness
          .map((element) => `<li>${element}</li>`)
          .join("")}
      </ul>
      <h6>Peso: ${pokemones[index].weight} lbs</h6> 
      <h6>Altura: ${pokemones[index].height} Ins</h6>
      <h6>Habilidades: ${pokemones[index].abilities}</h6>
      <div class="d-flex flex-row m-2 flex-wrap ">
      ${pokemones[index].type
        .map((element) => `<div class="m-2 tipo">${element}</div>`)
        .join("")}
      </div>
      </section>

      `;
      asignColor(asignColorType);
    });
  });
}

function buildModal(moreInfo, pokemones, asignColorType, min) {
  var URLactual = window.location.pathname.toString();
  moreInfo.forEach((nodo, index) => {
    nodo.addEventListener("click", function (e) {
      index = index + min;
      modalTitle.innerHTML = `${pokemones[index].name}`;
      bodyModal.innerHTML = `
      <img src="${pokemones[index].ThumbnailImage}" alt="${
        pokemones[index].name
      } image">
      <section class="container rounded text-bg-dark">
      <h4>Debilidades</h4>
      <ul style="list-style: none;">
        ${pokemones[index].weakness
          .map((element) => `<li>${element}</li>`)
          .join("")}
      </ul>
      <h6>Peso: ${pokemones[index].weight} lbs</h6> 
      <h6>Altura: ${pokemones[index].height} Ins</h6>
      <h6>Habilidades: ${pokemones[index].abilities}</h6>
      <div class="d-flex flex-row m-2 flex-wrap ">
      ${pokemones[index].type
        .map((element) => `<div class="m-2 tipo">${element}</div>`)
        .join("")}
      </div>
      </section>

      `;
      asignColor(asignColorType);
    });
  });
}

function asignColor(tipos) {
  for (let i = 0; i <= tipos.length - 1; i++) {
    if (tipos[i].innerHTML === "grass") {
      tipos[i].classList.add("bg-grass");
    } else if (tipos[i].innerHTML === "poison") {
      tipos[i].classList.add("bg-poison");
    } else if (tipos[i].innerHTML === "fire") {
      tipos[i].classList.add("bg-fire");
    } else if (tipos[i].innerHTML === "water") {
      tipos[i].classList.add("bg-water");
    } else if (tipos[i].innerHTML === "bug") {
      tipos[i].classList.add("bg-bug");
    } else if (tipos[i].innerHTML === "flying") {
      tipos[i].classList.add("bg-flying");
    } else if (tipos[i].innerHTML === "normal") {
      tipos[i].classList.add("bg-normal");
    } else if (tipos[i].innerHTML === "dark") {
      tipos[i].classList.add("bg-dark");
    } else if (tipos[i].innerHTML === "electric") {
      tipos[i].classList.add("bg-electric");
    } else if (tipos[i].innerHTML === "fighting") {
      tipos[i].classList.add("bg-fighting");
    } else if (tipos[i].innerHTML === "ice") {
      tipos[i].classList.add("bg-ice");
    } else if (tipos[i].innerHTML === "ground") {
      tipos[i].classList.add("bg-ground");
    } else if (tipos[i].innerHTML === "steel") {
      tipos[i].classList.add("bg-steel");
    } else if (tipos[i].innerHTML === "dragon") {
      tipos[i].classList.add("bg-dragon");
    } else if (tipos[i].innerHTML === "fairy") {
      tipos[i].classList.add("bg-fairy");
    } else if (tipos[i].innerHTML === "ghost") {
      tipos[i].classList.add("bg-ghost");
    } else if (tipos[i].innerHTML === "psychic") {
      tipos[i].classList.add("bg-psychic");
    } else if (tipos[i].innerHTML === "rock") {
      tipos[i].classList.add("bg-rock");
    }
  }
}

export { buscadorPokemon, showInfo };
