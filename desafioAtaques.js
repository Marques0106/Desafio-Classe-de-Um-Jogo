class AtaqueDoHeroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    retornaFrase(tipo) {
        switch (tipo) {
            case "Mago":
                console.log(`O ${tipo} atacou utilizando Magia!`);
                break;
            case "Guerreiro":
                console.log(`O ${tipo} atacou utilizando sua Espada!`);
                break;
            case "Monge":
                console.log(`O ${tipo} atacou utilizando Artes Marciais!`);
                break;
            case "Ninja":
                console.log(`O ${tipo} atacou utilizando suas Shurikens!`);
                break;
            default:
                console.log('Invalido');
        }
    }
}



let value =1
while (value == 1){
    console.log('O guia diz:\nCaro viajante, ao cruzar essa porta, você ira enfrentar um grande inimigo, para que todos possam saber sua história, se identifique!')
    separador()
    
    let name = prompt("Qual o seu nome?\n> ")
    let idade = prompt("Qual a sua idade?\n> ")
    let tipo = prompt("Insira o valor que represente sua classificação de guilda: \n0.Mago\n1.Guerreiro\n2.Monge\n3.Ninja\n>")
    
    tipo = parseInt(tipo, 10)
    if(tipo >= 0 && tipo <= 3){
        separador()
        console.log('As portas se abrem')
        console.log('Boss: Viajante, você ousa me desafiar?')
        console.log('Boss: Muito bem! Inicie seu ataque!')
        nomeTipo = validarGuilda(tipo) 
        console.log(nomeTipo)
        const heroi = new AtaqueDoHeroi(name,idade,nomeTipo)
        heroi.retornaFrase(nomeTipo)
        opcao = prompt('Deseja continuar?\n0.NAO\n1.SIM')
        opcao = parseInt(opcao,10)
       if(opcao ==0 ){
           value = 0
       }
    }else{
        console.log('Não temos essa guilda identificada!')
        value = 0
    }
}
    
//funcoes
function separador(){
    return console.log("---------------------------~~~~||~~~~---------------------------")
}
function validarGuilda(tipo){
    arrayTipos = ["Mago","Guerreiro","Monge","Ninja"]
    tipo = arrayTipos[tipo]
    return tipo
}
    