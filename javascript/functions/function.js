function showInfo(pokemones) {
  console.log(pokemones);
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

  buildModalN(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo0(pokemones) {
  pokemonCards.innerHTML = "";
  for (let i = 0; i <= 38; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo1(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 39; i <= 77; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo2(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 78; i <= 116; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo3(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 117; i <= 155; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo4(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 156; i <= 194; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo5(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 195; i <= 233; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo6(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 234; i <= 272; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo7(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 273; i <= 311; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo8(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 312; i <= 350; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo9(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 351; i <= 389; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo10(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 390; i <= 428; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo11(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 429; i <= 467; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo12(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 468; i <= 506; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo13(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 507; i <= 545; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo14(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 546; i <= 584; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo15(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 585; i <= 623; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo16(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 624; i <= 662; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo17(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 663; i <= 701; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo18(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 702; i <= 740; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo19(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 741; i <= 779; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo20(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 780; i <= 818; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo21(pokemones) {
  console.log(pokemones);
  pokemonCards.innerHTML = "";
  for (let i = 819; i <= 857; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function showInfo22(pokemones) {
  pokemonCards.innerHTML = "";
  for (let i = 858; i <= 896; i++) {
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

  buildModal(moreInfo, pokemones, asignColorType);

  asignColor(asignColorType);
}

function buildModalN(moreInfo, pokemones, asignColorType) {
  var URLactual = window.location.pathname.toString();
  console.log(URLactual);
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

function buildModal(moreInfo, pokemones, asignColorType) {
  var URLactual = window.location.pathname.toString();
  switch (URLactual) {
    case "/pages/index.html":
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
      break;
    case "/pages/page2.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 39;
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
      break;
    case "/pages/page3.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 78;
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
      break;
    case "/pages/page4.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 117;
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
      break;
    case "/pages/page5.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 156;
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
      break;
    case "/pages/page6.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 195;
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
      break;
    case "/pages/page7.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 234;
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
      break;
    case "/pages/page8.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 273;
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
      break;
    case "/pages/page9.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 312;
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
      break;
    case "/pages/page10.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 351;
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
      break;
    case "/pages/page11.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 390;
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
      break;
    case "/pages/page12.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 429;
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
      break;
    case "/pages/page13.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 468;
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
                      .map(
                        (element) => `<div class="m-2 tipo">${element}</div>`
                      )
                      .join("")}
                    </div>
                    </section>
                    `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page14.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 507;
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
                        .map(
                          (element) => `<div class="m-2 tipo">${element}</div>`
                        )
                        .join("")}
                      </div>
                      </section>
                      `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page15.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 546;
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
                          .map(
                            (element) =>
                              `<div class="m-2 tipo">${element}</div>`
                          )
                          .join("")}
                        </div>
                        </section>
                        `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page16.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 585;
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
      break;
    case "/pages/page17.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 624;
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
      break;
    case "/pages/page18.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 663;
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
                      .map(
                        (element) => `<div class="m-2 tipo">${element}</div>`
                      )
                      .join("")}
                    </div>
                    </section>
                    `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page19.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 702;
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
                        .map(
                          (element) => `<div class="m-2 tipo">${element}</div>`
                        )
                        .join("")}
                      </div>
                      </section>
                      `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page20.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 741;
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
                          .map(
                            (element) =>
                              `<div class="m-2 tipo">${element}</div>`
                          )
                          .join("")}
                        </div>
                        </section>
                        `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page21.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 780;
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
                            .map(
                              (element) =>
                                `<div class="m-2 tipo">${element}</div>`
                            )
                            .join("")}
                          </div>
                          </section>
                          `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page22.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 819;
          modalTitle.innerHTML = `${pokemones[index].name}`;
          bodyModal.innerHTML = `
                            <img src="${
                              pokemones[index].ThumbnailImage
                            }" alt="${pokemones[index].name} image">
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
                              .map(
                                (element) =>
                                  `<div class="m-2 tipo">${element}</div>`
                              )
                              .join("")}
                            </div>
                            </section>
                            `;
          asignColor(asignColorType);
        });
      });
      break;
    case "/pages/page23.html":
      moreInfo.forEach((nodo, index) => {
        nodo.addEventListener("click", function (e) {
          index = index + 858;
          modalTitle.innerHTML = `${pokemones[index].name}`;
          bodyModal.innerHTML = `
                              <img src="${
                                pokemones[index].ThumbnailImage
                              }" alt="${pokemones[index].name} image">
                              <section class="container rounded text-bg-dark">
                              <h4>Debilidades</h4>
                              <ul style="list-style: none;">
                                ${pokemones[index].weakness
                                  .map((element) => `<li>${element}</li>`)
                                  .join("")}
                              </ul>
                              <h6>Peso: ${pokemones[index].weight} lbs</h6> 
                              <h6>Altura: ${pokemones[index].height} Ins</h6>
                              <h6>Habilidades: ${
                                pokemones[index].abilities
                              }</h6>
                              <div class="d-flex flex-row m-2 flex-wrap ">
                              ${pokemones[index].type
                                .map(
                                  (element) =>
                                    `<div class="m-2 tipo">${element}</div>`
                                )
                                .join("")}
                              </div>
                              </section>
                              `;
          asignColor(asignColorType);
        });
      });
      break;

    default:
      break;
  }
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

export {
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
};
