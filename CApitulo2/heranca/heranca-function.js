export function tipoDevFunc(devUsaText){
    tipoDev = document.getElementById("tipoDev").value;
    if(tipoDev == "Frontend"){
        devUsaText.innerHTML = "Framework usado: ";
    }else{
        devUsaText.innerHTML = "Banco de Dados usado: ";
    }
}

export function DevFrontend(){
    console.log("Frontend");
}

export function DevBackend(){
    console.log("Backend");
}