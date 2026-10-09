const btn = document.querySelector("#claro"); 

function claro() {
    
    btn.addEventListener("click", () => {
        document.body.classList.toggle("claro");
    });
}