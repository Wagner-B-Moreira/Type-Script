
// tipos Basicos
let age: number = 20;
console.log(age);

// tipo boolena serve para armazenar valores de verdadeiro ou falso 
const fistName: boolean = true;
const isValid: boolean = false;

// tipo any serve para quando nao saebmos o tipo da variavel que vamos usar
let idk: any = 10;
idk = '12';
idk = true;

// [] arrays server para armazernar lista de valores do mesmo tipo
const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
const booelaans: boolean[] = [true, false, true, false]

// tuplas 
const person: [number, string, boolean] = [26, "wagner", false]
console.log(person);

// lista de tuplas é uma lista de arrays com tipos definidos
const people: [number, string][] = [
    [1, "wagner"],
    [2, "Moreira"],
    [3, "bastosr"],
]
console.log(people);

// Intersection É quando você junta dois tipos em um só.  
const productsId: number | string | boolean = 20
console.log(productsId);


// Enum é um jeito de criar um conjunto de valores fixos com nomes.
//  Tipo uma lista controlada de opções. 
enum direction {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}


const direction1: direction = direction.up;
console.log(direction1); 

// Type Assertion (Asserção de tipo)
// É quando você diz pro TypeScript:
//  “confia em mim, eu sei qual é o tipo disso” 
// modo !
 let valor: any = "Wagner";
 let tamanho = (valor as string).length;