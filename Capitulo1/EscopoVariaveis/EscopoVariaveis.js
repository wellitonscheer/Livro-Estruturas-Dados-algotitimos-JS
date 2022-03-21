var MyVariable = "global";
var MyOtherVariable = "global";
function MyFunction(){
    var MyVariable = "local";
    return MyVariable;
}

function MyOtherFunction(){
    MyOtherVariable = "local";
    return MyOtherVariable;
}

console.log(MyVariable);
console.log(MyFunction());
console.log(MyOtherVariable);
console.log(MyOtherFunction());
console.log(MyOtherVariable);