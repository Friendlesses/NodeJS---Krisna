"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService = __importStar(require("./services/productService"));
const userService = __importStar(require("./services/userService"));
const orderService = __importStar(require("./services/orderService"));
const validate_1 = require("./utils/validate");
const productSchema_1 = require("./schemas/productSchema");
const userSchema_1 = require("./schemas/userSchema");
const orderSchema_1 = require("./schemas/orderSchema");
let products = [];
let users = [];
let orders = [];
const newProduct = {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1500,
    category: "Electronics",
    stock: 100
};
if ((0, validate_1.validate)(newProduct, productSchema_1.productSchema)) {
    products = productService.addProduct(products, newProduct);
}
else {
    console.log("Invalid product data");
}
const newUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    address: "123 Main St"
};
if ((0, validate_1.validate)(newUser, userSchema_1.userSchema)) {
    users = userService.addUser(users, newUser);
}
else {
    console.log("Invalid user data");
}
const newOrder = {
    id: 1,
    userId: 1,
    products: [{ productId: 1, quantity: 1 }],
    totalAmount: 1500,
    orderDate: new Date(),
    status: "pending"
};
if ((0, validate_1.validate)(newOrder, orderSchema_1.orderSchema)) {
    orders = orderService.placeOrder(orders, newOrder);
}
else {
    console.log("Invalid order data");
}
console.log(productService.getProducts(products));
console.log(userService.getUsers(users));
console.log(orderService.getOrders(orders));
orders = orderService.updateOrderStatus(orders, 1, "shipped");
console.log(orderService.getOrders(orders));
