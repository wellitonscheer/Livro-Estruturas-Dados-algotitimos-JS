var b = document.getElementById("is").textContent;
var objd = new Object();
function Book(titulo, pagina, isbn){
    this.titulo = titulo;
    this.pagina = pagina;
    this.isbn = isbn;
    //  Criando função
    this.mostraIsbn = function(){
        console.log(this.isbn);
    }
}
var book = new Book("caie", "12", "nao sei");
var a = document.getElementById("is");
a.innerHTML = book;
console.log(Book.prototype);
console.log(a);
console.log(b);

Book.prototype.funcao = function() {
    console.log(this.titulo);
}
book.funcao();
book.mostraIsbn();
