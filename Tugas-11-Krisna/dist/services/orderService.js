"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.updateOrderStatus = exports.cancelOrder = exports.placeOrder = void 0;
const placeOrder = (orders, newOrder) => {
    return [...orders, newOrder];
};
exports.placeOrder = placeOrder;
const cancelOrder = (orders, orderId) => {
    return orders.filter(order => order.id !== orderId);
};
exports.cancelOrder = cancelOrder;
const updateOrderStatus = (orders, orderId, status) => {
    return orders.map(order => order.id === orderId ? Object.assign(Object.assign({}, order), { status }) : order);
};
exports.updateOrderStatus = updateOrderStatus;
const getOrders = (orders) => {
    return orders;
};
exports.getOrders = getOrders;
