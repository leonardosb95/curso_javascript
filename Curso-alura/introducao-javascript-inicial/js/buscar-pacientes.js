var botaoAdicionar = document.querySelector("#teste");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
			
			console.log(resposta);
          
    });

    xhr.send();
});
