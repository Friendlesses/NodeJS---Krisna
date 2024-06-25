"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
exports.orderSchema = {
    id: "number",
    userId: "number",
    products: "object",
    totalAmount: "number",
    orderDate: "object",
    status: "string"
};
