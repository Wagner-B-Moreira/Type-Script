 // Interface com função (método)
interface Usuario {
  nome: string;
  saudacao(): string; // função que retorna string
}

const user: Usuario = {
  nome: "Wagner",
  saudacao() {
    return "Olá " + this.nome;
  }
};


// Interface representando uma função diretamente
interface Soma {
  (a: number, b: number): number; // recebe 2 números e retorna número
}

const somar: Soma = (a, b) => a + b;


// Interface com função como propriedade
interface Calculadora {
  somar: (a: number, b: number) => number; // função dentro do objeto
}

const calc: Calculadora = {
  somar: (a, b) => a + b
};


/*
RESUMO:
- Interface pode ter funções
- Pode ser:
  1. Método → saudacao(): string
  2. Função direta → (a, b) => number
  3. Função como propriedade → somar: (...) => ...
*/