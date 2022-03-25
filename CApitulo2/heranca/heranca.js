import { FrontendDev, BackendDev } from "./heranca-class.js";

let [tipoDev, devUsaText, nome, idade, princLingua, devUsa, DevsHTML, saudacao] = Array(8).fill();
let Devs = new Array;

window.getDados = function getDados(){
    tipoDev = document.getElementById("tipoDev").value;
    devUsaText = document.getElementById("devUsaText");
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    princLingua = document.getElementById("princLingua").value;
    devUsa = document.getElementById("devUsa").value;
    DevsHTML = document.getElementById("Devs");
    saudacao = document.getElementById("saudacao");
}
getDados();

window.tipoDevFunc = function tipoDevFunc(){
    tipoDev = document.getElementById("tipoDev").value;
    if(tipoDev == "Frontend"){
        devUsaText.innerHTML = "Framework usado: ";
    }else{
        devUsaText.innerHTML = "Banco de Dados usado: ";
    }
}

window.DevFrontend = function DevFrontend(){
    getDados();
    let dev = new FrontendDev(nome, idade, princLingua, tipoDev, devUsa);
    Devs.push(dev);
    dev.saudacao(saudacao);
}

window.DevBackend = function DevBackend(){
    getDados();
    let dev = new BackendDev(nome, idade, princLingua, tipoDev, devUsa);
    Devs.push(dev);
    dev.saudacao(saudacao);
}

window.MostrarDevs = function MostrarDevs(){
    for(let i = 0; Devs.length > i; i++){
        DevsHTML.innerHTML += `Dev ${i + 1}</br>`;
        DevsHTML.innerHTML += `Nome: ${Devs[i].nome}</br>`;
        DevsHTML.innerHTML += `Idade: ${Devs[i].idade}</br>`;
        DevsHTML.innerHTML += `Principal Linguagem: ${Devs[i].principalLinguagem}</br>`;
        DevsHTML.innerHTML += `Tipo de Dev: ${Devs[i].tipoDev}</br>`;
        if(Devs[i].tipoDev == "Frontend"){
            DevsHTML.innerHTML += `Framework usado: ${Devs[i].framework}</br></br>`;
        }else{
            DevsHTML.innerHTML += `Banco de Dados: ${Devs[i].bancoDados}</br></br>`;
        }
    }
}