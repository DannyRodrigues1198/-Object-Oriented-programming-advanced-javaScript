/**
 * ATIVIDADE 1
 * Crie uma classe cliente e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto cliente, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
var Cliente = /** @class */ (function () {
    // Método construtor;
    function Cliente(nome, cpf, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    return Cliente;
}());
// Iniciar o programa com o terminal limpo;
console.clear();
//criar objetos
var cliente = new Cliente('Danilo', '000.000.000-00', 'masculino');
// Exibição dos dados;
console.clear();
console.log('*****CLIENTE*****');
console.log(cliente.nome);
console.log(cliente.cpf);
console.log(cliente.sexo);
