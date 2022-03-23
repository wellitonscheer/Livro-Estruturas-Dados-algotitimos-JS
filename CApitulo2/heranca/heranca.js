import { FrontendDev, BackendDev } from "./heranca-class.js";
let tipoDev = document.getElementById("tipoDev").value;
let devUsaText = document.getElementById("devUsaText");
let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
let princLingua = document.getElementById("princLingua").value;
let devUsa = document.getElementById("devUsa").value;

function tipoDevFunc(){
    tipoDev = document.getElementById("tipoDev").value;
    if(tipoDev == "Frontend"){
        devUsaText.innerHTML = "Framework usado: ";
    }else{
        devUsaText.innerHTML = "Banco de Dados usado: ";
    }
}

function DevFrontend(){
    console.log("Frontend");
}

function DevBackend(){
    console.log("Backend");
}