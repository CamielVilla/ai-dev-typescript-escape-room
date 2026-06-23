// 🏗️ KAMER 3: Interfaces
// Define interfaces that match these objects.

// TODO: Define the User interface (must have id: number, name: string, email: string, age: number)
const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 28,
};

// TODO: Define the Product interface (must have id: number, name: string, price: number, inStock: boolean)
const product1: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  inStock: true,
};

// TODO: Define the Address interface (street: string, city: string, zipCode: string)
// TODO: Define the Employee interface (id: number, name: string, address: Address, salary: number)
const employee: Employee = {
  id: 42,
  name: "Bob",
  address: {
    street: "Main Street 123",
    city: "Amsterdam",
    zipCode: "1012 XY",
  },
  salary: 50000,
};

// TODO: Replace 'any' with the proper interface types
let user: User = user1;
let product: Product = product1;
let employeeVar: Employee = employee;

// TODO: Replace 'any' with proper interface types for parameters
function printUser(u: User): void {
  console.log(`User: ${u.name} (${u.email})`);
}

function printProduct(p: Product): void {
  console.log(`Product: ${p.name} - €${p.price}`);
}

function printEmployee(e: Employee): void {
  console.log(`Employee: ${e.name}, Address: ${e.address.street}, ${e.address.city}`);
}

printUser(user);
printProduct(product);
printEmployee(employeeVar);

console.log(`\n🏗️ Room 3: Interfaces for User, Product, Address, Employee`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(user1.name.length + 62),
  String.fromCharCode(product1.name.charCodeAt(0) + 3),
  String.fromCharCode(employee.name.charCodeAt(0) + 2),
  String.fromCharCode(employee.address.city.length + 60),
].join("");
