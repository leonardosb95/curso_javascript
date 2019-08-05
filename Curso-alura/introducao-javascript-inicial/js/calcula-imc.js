
    var peso=[];
    var altura=[];
    var gordura=[];

    var pacientes=document.querySelectorAll('.paciente');
    
    for(var i=0;i<pacientes.length;i++){
        for(var j=0;j<pacientes.length;j++){
            peso[i]=document.querySelector("#tabela-pacientes").querySelectorAll(".paciente")[i].querySelectorAll("td")[1].innerHTML;
            altura[i]=document.querySelector("#tabela-pacientes").querySelectorAll(".paciente")[i].querySelectorAll("td")[2].innerHTML;
            gordura[i]=document.querySelector("#tabela-pacientes").querySelectorAll(".paciente")[i].querySelectorAll("td")[3].innerHTML;
        }
    }
    var imc=[];
    var resultado=[];
    for(var k=0;k<pacientes.length;k++){
    imc[k]=peso[k]/(altura[k]*altura[k]);
    resultado[k]=riscoDoencaTest(imc[k]);
    document.querySelector("#tabela-pacientes").querySelectorAll(".paciente")[k].querySelectorAll("td")[4].innerHTML=imc[k].toFixed(2);
    document.querySelector("#tabela-pacientes").querySelectorAll(".paciente")[k].querySelectorAll("td")[5].innerHTML=resultado[k];
    }


    function riscoDoencaTest(imc){
        var mensagem="";
        
        if(imc<18.5){
        
            mensagem="Normal ou Elevado";
        
        
        }
        else if(imc>=18.5 && imc<=24.9){
        
            mensagem="Pouco Elevado";
        
        }
        else if(imc>=25 && imc<=29.9){
            mensagem="Normal";
        
        }
        else if(imc>=30 && imc<=34.99){
        
            mensagem="Elevado";
        }
        else if(imc>=30 && imc<=39.99){
        
            mensagem="Muito Elevado";
        }
        else if(imc>40){
            mensagem="Muitissimo Elevado";
        
        }
        
        return mensagem;
        
        }

        function validaPeso(peso) {
            if (peso > 0 && peso < 1000) {
                return true;
            } else {
                return false;
            }
        }
        function validaAltura(altura) {
            if (altura > 0 && altura <= 3.00) {
                return true;
            } else {
                return false;
            }
        }
        










    

