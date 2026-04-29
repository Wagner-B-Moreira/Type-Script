 // 📌 Tipo para pedidos (orders)
type Orders = {
  productsId: string;
  price: number;
};


// 📌 type para definir objeto (User)
type User = {
  firstName: string; // corrigido (antes: fistNmae)
  age: number;
  email: string;
  password: string;
  orders: Orders[]; // lista de pedidos (array de tuplas/objetos)
  register(): string; // função que retorna string
};


// 📌 Criando um objeto do tipo User
const user: User = {
  firstName: "Wagner",
  email: "wagnermoreira@example.com",
  age: 20,
  password: "securepassword",
  orders: [{ productsId: "1", price: 10.99 }],
  register() {
    return "User registered successfully";
  }
};


// 📌 Intersection (&) → junta tipos
type Author = {
  books: string[];
};

// Author & User = precisa ter TUDO dos dois
const author: Author & User = {
  firstName: "Wagner",
  email: "wagnermoreira@example.com",
  books: ["Book 1", "Book 2"],
  age: 20,
  password: "securepassword",
  orders: [{ productsId: "1", price: 10.99 }],
  register() {
    return "Author registered successfully";
  }
};


// 📌 Interface → define formato de objeto (parecido com type)
interface UserInterface {
  firstName: string;
  name: string;
}

// Criando objeto com interface
const userInterface: UserInterface = {
  firstName: "Wagner",
  name: "wagner",
};


// 📌 Saída
console.log(userInterface);
console.log(user);
console.log(author);