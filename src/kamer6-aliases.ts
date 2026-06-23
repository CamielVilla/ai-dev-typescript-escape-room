// 🚪 KAMER 6: Type Aliases
// Extract repeated long types into reusable type aliases.

// TODO: Define a Developer type alias with properties: id, name, email, programmingLanguages, yearsOfExperience
const developer1: Developer = {
  id: 1,
  name: "Alice",
  email: "alice@dev.com",
  programmingLanguages: ["TypeScript", "JavaScript", "Python"],
  yearsOfExperience: 5,
};

// TODO: Use the Developer type alias here (not repeated inline type!)
const developer2: Developer = {
  id: 2,
  name: "Bob",
  email: "bob@dev.com",
  programmingLanguages: ["Rust", "Go"],
  yearsOfExperience: 8,
};

// TODO: Define an ApiResponse type alias with properties: success, data, message (optional)
const apiResponse1: ApiResponse = {
  success: true,
  data: { count: 42 },
};

// TODO: Use the ApiResponse type alias here (not repeated inline type!)
const apiResponse2: ApiResponse = {
  success: false,
  data: {},
  message: "Not found",
};

// TODO: Define a ServerConfig type alias with properties: hostname, port, ssl, timeout (optional)
function createConfig(options: ServerConfig): void {
  console.log(`Connecting to ${options.hostname}:${options.port}`);
}

// TODO: Use the ServerConfig type alias here (not repeated inline type!)
const serverConfig: ServerConfig = {
  hostname: "localhost",
  port: 3000,
  ssl: false,
  timeout: 5000,
};

createConfig(serverConfig);

// TODO: Create a DeveloperCallback type alias for this function signature
function processDevelopers(
  developers: Developer[],
  callback: DeveloperCallback
): void {
  developers.forEach(callback);
}

processDevelopers(
  [developer1, developer2],
  (dev) => console.log(`Developer: ${dev.name}`)
);

console.log(`\n🚪 Room 6: Type Aliases for Developer, ApiResponse, ServerConfig`);
console.log(`API Response 1: ${JSON.stringify(apiResponse1)}`);
console.log(`API Response 2: ${JSON.stringify(apiResponse2)}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(developer1.name.charCodeAt(0) + 3),
  String.fromCharCode(developer2.yearsOfExperience + 71),
  String.fromCharCode(developer1.programmingLanguages.length + 76),
  String.fromCharCode(serverConfig.port.toString().length + 78),
].join("");
