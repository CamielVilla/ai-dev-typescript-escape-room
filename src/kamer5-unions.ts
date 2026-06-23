// 🎨 KAMER 5: Union Types
// Define union types for status fields that accept multiple specific values.

// TODO: Create a union type for OrderStatus (must be "pending" | "shipped" | "delivered")
type OrderStatus = "pending" | "shipped" | "delivered";

// TODO: Create a union type for Theme (must be "light" | "dark" | "auto")
type Theme = "light" | "dark" | "auto";

// TODO: Create a union type for PaymentMethod (must be "credit_card" | "paypal" | "bank_transfer")
type PaymentMethod = "credit_card" | "paypal" | "bank_transfer";

interface Order {
  id: number;
  status: OrderStatus;
  amount: number;
  paymentMethod: PaymentMethod;
}

interface User {
  id: number;
  name: string;
  theme: Theme;
  orders: Order[];
}

// ERROR: These variables have WRONG values for their union types - fix them!
// "processing" is not a valid OrderStatus, "system" is not a valid Theme, "paypal_pro" is not a valid PaymentMethod
const order1: Order = {
  id: 1,
  status: "processing",
  amount: 99.99,
  paymentMethod: "paypal_pro",
};

const user1: User = {
  id: 1,
  name: "Carlos",
  theme: "system",
  orders: [order1],
};

// TODO: Handle all possible values - use proper type narrowing
function handleOrderStatus(status: OrderStatus): string {
  if (status === "pending") {
    return "Your order is being processed...";
  }
  if (status === "shipped") {
    return "Your order is on the way!";
  }
  if (status === "delivered") {
    return "Your order has been received!";
  }
  return "Order was cancelled";
}

// TODO: Handle all possible values - use proper type narrowing
function applyTheme(theme: Theme): { bg: string; text: string } {
  if (theme === "light") {
    return { bg: "#ffffff", text: "#000000" };
  }
  if (theme === "dark") {
    return { bg: "#1a1a1a", text: "#ffffff" };
  }
  return { bg: "#f0f0f0", text: "#333333" };
}

// TODO: Handle all possible values - use proper type narrowing
function processPayment(method: PaymentMethod): boolean {
  if (method === "credit_card") {
    console.log("Processing credit card payment...");
    return true;
  }
  if (method === "paypal") {
    console.log("Redirecting to PayPal...");
    return true;
  }
  console.log("Processing bank transfer...");
  return true;
}

const status = handleOrderStatus("shipped");
const colors = applyTheme("dark");
processPayment("paypal");

console.log(`\n🎨 Room 5: Union Types for Status, Theme, PaymentMethod`);
console.log(`Status message: ${status}`);
console.log(`Applied theme: ${JSON.stringify(colors)}`);
console.log(`User: ${user1.name}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(user1.name.charCodeAt(0) + 12),
  String.fromCharCode(order1.amount.toString().length + 75),
  String.fromCharCode(user1.orders.length + 68),
  String.fromCharCode(user1.id + 77),
].join("");
