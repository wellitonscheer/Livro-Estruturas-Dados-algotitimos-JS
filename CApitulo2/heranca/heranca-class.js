/* export {FrontendDev as Frontend,
    BackendDev as Backend} */

export class Dev{
    constructor(nome, idade, principalLinguagem, tipoDev){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDev = tipoDev;
    }
    saudacao(){
        console.log(`Oi, sou dev ${this.tipoDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`);
    }
}

export class FrontendDev extends Dev{
    constructor(nome, idade, principalLinguagem, tipoDev, framework){
    super(nome, idade, principalLinguagem, tipoDev);
    this.framework = framework;
    }
}

export class BackendDev extends Dev{
    constructor(nome, idade, principalLinguagem, tipoDev, bancoDados){
        super(nome, idade, principalLinguagem, tipoDev);
        this.bancoDados = bancoDados;
    }
}

/* const FrontendDev1 = new FrontendDev("Pedro", "25", "JavaScript", "Frontend", "React");
console.log(FrontendDev1);
FrontendDev1.saudacao();

const BackendDev1 = new BackendDev("João", "37", "C#", "Backend", "MySQL");
console.log(BackendDev1);
BackendDev1.saudacao(); */