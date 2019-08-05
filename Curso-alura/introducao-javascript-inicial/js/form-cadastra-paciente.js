//AO CLICAR NO BOTÃO DISPARA O EVENTO ONCLICK
document.getElementById("adicionar-paciente").addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector('#formCadastra');
    var paciente = obtemPacienteDoFormulario(form);
    adicionaPacienteNaTabela(paciente);
    form.reset();

});



//função que calcula o IMC
function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);


}

function adicionaPacienteNaTabela(paciente){
    var pacienteTR = montaTR(paciente);
    estilizaResultado();
    validaPaciente(paciente);
    
}
//Criando um objeto paciente
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),

    }

    return paciente;
}

// CRIA A LISTA CONTENDO NOME,PESO,ALTURA E GORDURA CORPORAL
//CONTENDO O IMC COMO RESULTADO

function montaTR(paciente) {

    if (!nome == "" && !peso == "" && !altura == "" && !gordura == "") {
        var tabelaPacientes = document.querySelector("#tabela-pacientes");

        var pacientesTR = document.createElement('tr');
        var nomeTD = document.createElement('td');
        var pesoTD = document.createElement('td');
        var alturaTD = document.createElement('td');
        var gorduraTD = document.createElement('td');
        var imcTD = document.createElement('td');
        var resultadoTD = document.createElement('td');


        adicionaClassName(pacientesTR, nomeTD, pesoTD, alturaTD, gorduraTD, imcTD, resultadoTD);

        tabelaPacientes.appendChild(pacientesTR);
        pacientesTR.appendChild(nomeTD);
        pacientesTR.appendChild(pesoTD);
        pacientesTR.appendChild(alturaTD);;
        pacientesTR.appendChild(gorduraTD);
        pacientesTR.appendChild(imcTD);
        pacientesTR.appendChild(resultadoTD);

        nomeTD.innerHTML = paciente.nome;
        pesoTD.innerHTML = paciente.peso;
        alturaTD.innerHTML = paciente.altura;
        gorduraTD.innerHTML = paciente.gordura;
        imcTD.innerHTML = paciente.imc;
        resultadoTD.innerHTML = riscoDoenca(paciente.imc);
        estilizaResultado(paciente.imc);
        return pacientesTR;
    }





}
//Adiciona class nas tags criadas no HTML
function adicionaClassName(pacientesTR, nomeTD, pesoTD, alturaTD, gorduraTD, imcTD, resultadoTD) {
    pacientesTR.className = "paciente";
    nomeTD.className = "info-nome";
    pesoTD.className = "info-peso";
    alturaTD.className = "info-altura";
    gorduraTD.className = "info-gordura";
    imcTD.className = "info-imc";
    resultadoTD.className = "info-resultado";

}


//Validar o formulario

function riscoDoenca(imc) {
    var mensagem = "";


    if (imc >= 18.5 && imc <= 24.99) {

        mensagem = "Peso normal";

    }
    else if (imc >= 25 && imc <= 29.99) {
        mensagem = "Acima do peso";

    }
    else if (imc >= 30 && imc <= 34.99) {

        mensagem = "Obesidade I";
    }
    else if (imc >= 35 && imc <= 39.99) {

        mensagem = "Obesidade II (severa)";
    }
    else if (imc > 40) {
        mensagem = "Obesidade III (mórbida)";

    }

    return mensagem;

}


function riscoDoencaCorDeFundo(mensagem) {
    var cor;
    mensagem = mensagem.toLowerCase().replace(" ", "");
    if (mensagem == "Peso normal".toLowerCase().replace(" ", "")) {

        cor = "yellow";


    }
    else if (mensagem == "Acima do peso".toLowerCase().replace(" ", "")) {

        cor = "Green";

    }
    else if (mensagem == "Obesidade I".toLowerCase().replace(" ", "")) {

        cor = "orange";
    }
    else if (mensagem == "Obesidade II (severa)".toLowerCase().replace(" ", "")) {
        cor = "red";

    }
    else if (mensagem == "Obesidade III (mórbida)".toLowerCase().replace(" ", "")) {

        cor = "SandyBrown";
    }
    return cor;

}

function estilizaResultado() {
    var pacientes = document.querySelectorAll(".paciente");
    var resultado = [];
    for (var i = 0; i < pacientes.length; i++) {
        resultado[i] = pacientes[i].querySelectorAll('td')[5].innerHTML;
    }
    var cores = [];
    for (var k = 0; k < resultado.length; k++) {
        cores[k] = riscoDoencaCorDeFundo(pacientes[k].querySelectorAll('td')[5].innerHTML);
        pacientes[k].querySelectorAll('td')[5].style.backgroundColor = cores[k];
    }

}

function validaPaciente(paciente) {

    if (paciente.peso < 0) {

        return "Peso não é valido!!";
    }
    else if (paciente.altura<0) {
        
        return "Altura não é valida!!";

    }

} 