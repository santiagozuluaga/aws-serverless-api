"use strict";

module.exports = {
    create: async (event) => {
        return {
            statusCode: 200,
            body: "Create products"
        };
    },
    find: async (event) => {
        return {
            statusCode: 200,
            body: "Find products"
        };
    },
    findOne: async (event) => {
        return {
            statusCode: 200,
            body: "Find one product"
        };
    },
    update: async (event) => {
        return {
            statusCode: 200,
            body: "Update product"
        };
    },
    delete: async (event) => {
        return {
            statusCode: 200,
            body: "Delete product"
        };
    }
};