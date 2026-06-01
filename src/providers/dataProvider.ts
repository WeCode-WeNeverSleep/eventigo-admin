import type { DataProvider } from "react-admin";
import { env } from "../config/env";
import { httpClient } from "./httpClient";

export const dataProvider: DataProvider = {
    getList: async (resource) => {
        const data = await httpClient(`${env.apiUrl}/${resource}`);

        return {
            data,
            total: data.length,
        };
    },

    getOne: async (resource, params) => {
        const data = await httpClient(`${env.apiUrl}/${resource}/${params.id}`);

        return {
            data,
        };
    },

    getMany: async () => {
        throw new Error("getMany is not implemented yet");
    },

    getManyReference: async () => {
        throw new Error("getManyReference is not implemented yet");
    },

    create: async () => {
        throw new Error("create is not implemented yet");
    },

    update: async () => {
        throw new Error("update is not implemented yet");
    },

    updateMany: async () => {
        throw new Error("updateMany is not implemented yet");
    },

    delete: async () => {
        throw new Error("delete is not implemented yet");
    },

    deleteMany: async () => {
        throw new Error("deleteMany is not implemented yet");
    },
};