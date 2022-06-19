"use strict";

module.exports = {
    create: async (event) => {
        return {
            statusCode: 200,
            body: "Create client"
        };
    },
    find: async (event) => {
        return {
            statusCode: 200,
            body: "Find clients"
        };
    },
    findOne: async (event) => {
        return {
            statusCode: 200,
            body: "Find one client"
        };
    },
    update: async (event) => {
        return {
            statusCode: 200,
            body: "Update client"
        };
    },
    delete: async (event) => {
        return {
            statusCode: 200,
            body: "Delete client"
        };
    }
};