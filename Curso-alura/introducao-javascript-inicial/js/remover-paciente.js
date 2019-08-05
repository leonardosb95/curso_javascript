var pacientes = document.querySelectorAll('.paciente');
var tabela=document.querySelector("table");


    tabela.addEventListener("dblclick", function(event){
        var alvoEvento=event.target;//remove o elemento que foi selecionado, targete significa alvo
        var paiDoAlvo=alvoEvento.parentNode;//seleciona o pai do elemento selecionado
        paiDoAlvo.classList.add("fadeOut");
        setTimeout(function(){
            paiDoAlvo.remove();
        },1000);
      
    });