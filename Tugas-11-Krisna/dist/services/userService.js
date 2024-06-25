"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.updateUser = exports.removeUser = exports.addUser = void 0;
const addUser = (users, newUser) => {
    return [...users, newUser];
};
exports.addUser = addUser;
const removeUser = (users, userId) => {
    return users.filter(user => user.id !== userId);
};
exports.removeUser = removeUser;
const updateUser = (users, updatedUser) => {
    return users.map(user => user.id === updatedUser.id ? updatedUser : user);
};
exports.updateUser = updateUser;
const getUsers = (users) => {
    return users;
};
exports.getUsers = getUsers;
