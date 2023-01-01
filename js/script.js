document.querySelector(".boton-menu").addEventListener("click", () => {
    document.querySelector(".menu-responsivo").classList.add("active");
    document.querySelector(".menu-responsivo").classList.remove("inactive");
});

document.querySelector(".btn-cerrar-menu").addEventListener("click", ()=>{
    document.querySelector(".menu-responsivo").classList.add("inactive");
    document.querySelector(".menu-responsivo").classList.remove("active");
});