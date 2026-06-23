// 🔒 KAMER 4: Optional Properties
// Mark optional fields and add null/undefined checks.

// TODO: Mark phoneNumber as optional
interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// TODO: Mark description and releaseDate as optional
interface Film {
  id: number;
  title: string;
  imdbScore: number;
  description: string;
  releaseDate: number;
}

// These objects are missing properties that should be optional
const customer1: Customer = {
  id: 1,
  name: "Emma",
  email: "emma@test.com",
};

const customer2: Customer = {
  id: 2,
  name: "Frank",
  email: "frank@test.com",
  phoneNumber: "06-12345678",
};

const film1: Film = {
  id: 1,
  title: "Inception",
  imdbScore: 8.8,
};

const film2: Film = {
  id: 2,
  title: "Interstellar",
  imdbScore: 8.7,
  description: "A team of explorers travel through a wormhole",
  releaseDate: 2014,
};

// TODO: This function tries to access optional field without checking
function contactCustomer(customer: Customer): string {
  return `Call ${customer.name} at ${customer.phoneNumber}`;
}

function printFilmDetails(film: Film): void {
  console.log(`${film.title} (${film.releaseDate})`);
  console.log(`Description: ${film.description}`);
  console.log(`IMDB: ${film.imdbScore}`);
}

// TODO: Add null/undefined checks for optional fields
function safePrintCustomer(customer: Customer): void {
  let contact = `${customer.name} (${customer.email})`;
  console.log(contact);
}

// TODO: Add null/undefined checks for optional fields
function safeFilmInfo(film: Film): string {
  let info = `${film.title} - ${film.imdbScore}/10`;
  return info;
}

// Use the safe functions
safePrintCustomer(customer1);
safePrintCustomer(customer2);
console.log(safeFilmInfo(film1));
console.log(safeFilmInfo(film2));

// Use the unsafe functions - these will have errors until you fix the interfaces:
console.log(contactCustomer(customer2));
printFilmDetails(film2);

console.log(`\n🔒 Room 4: Optional fields and null checks`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(customer1.name.charCodeAt(0) + 7),
  String.fromCharCode(customer2.phoneNumber.length + 68),
  String.fromCharCode(film1.title.charCodeAt(0) - 6),
  String.fromCharCode(film2.releaseDate - 1939),
].join("");
