interface Person {
    id: number;
    name: string;
    age: number; 
    SayMyName(): string;

}

// classe serve para criar objetos, ou seja, instâncias de uma classe.
// A classe é um molde, um template para criar objetos com as mesmas propriedades e métodos.
class person implements Person {
    id: number;
    name: string;
    age: number;

    // constructor é um método especial que é chamado
    //  quando criamos uma nova instância da classe. Ele 
    // é usado para inicializar as propriedades do objeto.
    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    // método da classe, que pode ser 
    // chamado em qualquer instância da classe.
    SayMyName(): string  {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}
const user = new person(1, "wagner", 20) 