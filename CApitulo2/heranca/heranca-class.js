export default class Dev{
    constructor(nome, idade, principalLinguagem, tipoDev){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDev = tipoDev;
    }
    saudacao(html){
        /* console.log(`Oi, sou dev ${this.tipoDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`); */
        html.innerHTML = `Oi, sou dev ${this.tipoDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`;
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