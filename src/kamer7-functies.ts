// 🆓 KAMER 7: Function Types
// Define function type aliases and fix function signatures.

// TODO: Define type alias for a validator callback (takes string, returns boolean)
type Validator = (value: string) => boolean;

// TODO: Define type alias for a transform callback (takes generic item T, returns generic U)
// This will be used by transformArray function
type Transformer<T, U> = (item: T) => U;

// TODO: Define type alias for an event handler callback (takes event object, returns void)
// This will be used by createEventDispatcher function
type EventHandler = (event: unknown) => void;

interface Validation {
  field: string;
  validator: Validator;
  errorMessage: string;
}

// TODO: Add proper generic types for parameters and return type
function transformArray<T, U>(items: T[], callback: Transformer<T, U>): U[] {
  return items.map(callback);
}

// TODO: Add proper return type annotation (it's currently missing!)
function validateField(validators: Validation[], value: string) {
  for (const validator of validators) {
    if (!validator.validator(value)) {
      return {
        valid: false,
        error: validator.errorMessage,
      };
    }
  }
  return {
    valid: true,
  };
}

// TODO: Add proper types for parameters and return type
function createErrorHandler(callback: Validator): EventHandler {
  return (error: any) => {
    console.log(`Error: ${error.message}`);
    callback(error);
  };
}

// TODO: Add proper types for parameters and return type
function createEventDispatcher(handlers: EventHandler[]): EventHandler {
  return (event: any) => {
    handlers.forEach((handler) => handler(event));
  };
}

// TODO: Add proper generic types for this function (currently too restrictive with 'any')
function filter<T>(items: T[], predicate: Transformer<T, boolean>): T[] {
  return items.filter(predicate);
}

// Examples of usage:
const emailValidator: Validation = {
  field: "email",
  validator: (email: string) => email.includes("@"),
  errorMessage: "Invalid email format",
};

const passwordValidator: Validation = {
  field: "password",
  validator: (pwd: string) => pwd.length >= 8,
  errorMessage: "Password must be at least 8 characters",
};

// Transform callback
const doubles = transformArray([1, 2, 3, 4], (x: number) => x * 2);

// Validation
const validationResult = validateField(
  [emailValidator, passwordValidator],
  "test@example.com"
);

// Error handler - this should fail because Validator expects string, not error object
const errorHandler = createErrorHandler((err: any) =>
  console.log(`Handled: ${err.message}`)
);

errorHandler({ message: "Something went wrong" });

// Event dispatcher
const dispatcher = createEventDispatcher([
  (event: any) => console.log(`Event: ${event.type}`),
]);

dispatcher({ type: "click", data: { x: 100, y: 200 } });

// Generic filter
const evenNumbers = filter([1, 2, 3, 4, 5], (n: number) => n % 2 === 0);

console.log(`\n🆓 Room 7: Complex Function Types, Callbacks, Higher-order Functions`);
console.log(`Validation result: ${JSON.stringify(validationResult)}`);
console.log(`Doubled numbers: ${doubles.join(", ")}`);
console.log(`Even numbers: ${evenNumbers.join(", ")}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(emailValidator.field.charCodeAt(0) - 31),
  String.fromCharCode(passwordValidator.errorMessage.length + 44),
  String.fromCharCode(doubles.length + 65),
  String.fromCharCode(evenNumbers.length + 67),
].join("");
