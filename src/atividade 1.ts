/**
 * ATIVIDADE 1
 * Crie uma classe cliente e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto cliente, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
class Cliente {
    // Atributos;
    public nome: string;
    public cpf: string;
    public sexo: string;
    // Método construtor;
    constructor (nome: string, cpf: string, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
}

// Iniciar o programa com o terminal limpo;
console.clear ();
//criar objetos
const cliente = new Cliente ('Danilo','000.000.000-00','masculino')
// Exibição dos dados;
console.clear ();
console.log ('*****CLIENTE*****');

console.log (cliente.nome);
console.log (cliente.cpf);
console.log (cliente.sexo);