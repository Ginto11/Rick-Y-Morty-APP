let character = document.getElementById("character").content;
let section = document.querySelector(".section--characters")
let $fragmento = document.createDocumentFragment();
let numPage = document.getElementById("numPage");
let listaCharacters = "";

console.info("🤗 Hola veo que eres curioso... 😏 soy Nelson Muñoz 😊🌟 y este es mi proyecto 💥, gracias por verlo.✨🤩");

document.addEventListener("DOMContentLoaded", (e) => {
    getAll();
}) 

document.addEventListener("click", (e) => {

    if(e.target.id == "morePage"){
        nextPage();
    }

    if(e.target.id == "menoPage"){
        lessPage();
    }

    if(e.target.id == "search") {
        findByName();
    }
})

function getAll(){
    fetch(`https://rickandmortyapi.com/api/character/?page=19`)
        .then((res) => res.json())
        .then((res) => {
            crearPagesCharacters(res.results)
    })
}

function nextPage(){
    if(numPage.value == 42){
        numPage.value = 42;
        alert("La api no tiene mas paginacion.")
        return;
    }
    let num = parseInt(numPage.value)
    numPage.value = num + 1;
    fetch(`https://rickandmortyapi.com/api/character/?page=${numPage.value}`)
        .then((res) => res.json())
        .then((res) => {
            crearPagesCharacters(res.results)
        })
}

function lessPage(){
    if(numPage.value == 1){
        numPage.value = 1;
        return;
    }
    let num = parseInt(numPage.value)
    numPage.value = num + - 1;
    fetch(`https://rickandmortyapi.com/api/character/?page=${numPage.value}`)
        .then((res) => res.json())
        .then((res) => {
            crearPagesCharacters(res.results)
        })
}

function crearPagesCharacters(lista){
    listaCharacters = "";
    lista.forEach(element => {
        listaCharacters += 
        `
            <div class="contenedor--characters">
                <div class="contenedor--imagen">
                    <img class="imagen" src="${element.image}" alt="${"Imagen:" + element.name}">
                </div>
                <div class="contenedor--info">
                    <h2 class="name"> ${element.name} </h2>
                    <div class="datos">

                        
                        <div style="display: flex; gap: 5px;>
                            <p style="display: inline-block;"><strong>Status:</strong> <p style="display: inline-flex; gap: 3px;" class="status"> ${element.status} </p></p>
                            <p style="display: inline-block;"><strong>Specie:</strong> <p style="display: inline-flex;" class="specie"> ${element.species} </p></p>
                        </div>

                        <div style="display: flex; gap: 5px;>
                            <p style="display: inline-block;"><strong>Type:</strong> <p style="display: inline-block;" class="type"> ${element.type} </p></p>
                            <p style="display: inline-block;"><strong>Gender:</strong> <p style="display: inline-block;" class="gender"> ${element.gender} </p></p>
                        </div>

                        <div style="display: flex; gap: 5px;>
                            <p style="display: inline-block;"><strong>Origin:</strong> <p style="display: inline-block;" class="origin"> ${element.origin.name} </p></p>
                        </div>

                        <div style="display: flex; gap: 5px;>
                            <p style="display: inline-block;"><strong>Location:</strong> <p style="display: inline-block; width: 100%;" class="location"> ${element.location.name} </p></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    section.innerHTML = listaCharacters;
}

function findByName(){
    let name = document.getElementById("name").value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((res) => res.json())
        .then((res) => {
            mappingCharacter(res.results);
        })
}


function mappingCharacter(respuesta){
    listaCharacters = "";
    respuesta.forEach(element => {
        listaCharacters += 
        `
            <div class="contenedor--character">
                <div class="character">
                    <div class="container--image">
                        <img src="${element.image}" />
                    </div>
                    <h2> ${element.name} </h2>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Status:</strong> <p style="display: inline-flex; gap: 3px;" class="status"> ${element.status} </p></p>
                        <p style="display: inline-block;"><strong>Specie:</strong> <p style="display: inline-flex;" class="specie"> ${element.species} </p></p>
                    </div>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Type:</strong> <p style="display: inline-block;" class="type"> ${element.type? element.type : "Unknown"} </p></p>
                        <p style="display: inline-block;"><strong>Gender:</strong> <p style="display: inline-block;" class="gender"> ${element.gender} </p></p>
                    </div>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Origin:</strong> <p style="display: inline-block;" class="origin"> ${element.origin.name} </p></p>
                    </div>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Location:</strong> <p style="display: inline-block; width: 100%;" class="location"> ${element.location.name} </p></p>
                    </div>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Gender:</strong> <p style="display: inline-block; width: 100%;" class="location"> ${element.gender} </p></p>
                    </div>

                    <div style="display: flex; gap: 5px;>
                        <p style="display: inline-block;"><strong>Created:</strong> <p style="display: inline-block; width: 100%;" class="location"> ${element.created} </p></p>
                    </div>

                </div>
            </div>
        `
    })

    section.innerHTML = listaCharacters;
}