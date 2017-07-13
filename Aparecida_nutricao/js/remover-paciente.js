var evento = document.querySelector("table");

evento.addEventListener("dblclick", function (event){

    if (event.target.tagName == "TD")
    {
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){
            event.target.parentNode.remove();
        },500);
    }
})

/*

removendo um elemento utilizando o this

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado");
        this.remove();
    })
})
*/
