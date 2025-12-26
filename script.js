class Cliente{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

let ArrClientes = [new Cliente("Carlos", "Eduardo"), new Cliente("Rebeca", "Eduarda"), new Cliente("Caio", "Ribeiro")]

let clientesNomeCompleto = ArrClientes.map(a => `${a.nome} ${a.sobrenome}`)
console.log(clientesNomeCompleto)