const calk = () => {
    let number = document.getElementById("number").value;
    let result = document.getElementById("resultado");
    number = parseInt(number);
    if(isNaN(number)){
        number = 0;
    }
    console.log(number);
    let a = number * 2;
    result.innerHTML = `${number} vezes 2 é igual a ${a}`;
}