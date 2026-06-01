import type { DataProvider } from "react-admin";
import { env } from "../config/env";
import { httpClient } from "./httpClient";

const getResourceUrl = (resource: string) => {
    return `${env.apiUrl}/admin/${resource}`;
};

export const dataProvider: DataProvider = {
    getList: async (resource) => {
        const data = await httpClient(getResourceUrl(resource));

        return {
            data,
            total: data.length,
        };
    },

    getOne: async (resource, params) => {
        const data = await httpClient(`${getResourceUrl(resource)}/${params.id}`);

        return {
            data,
        };
    },

    create: async (resource, params) => {
        const data = await httpClient(getResourceUrl(resource), {
            method: "POST",
            body: JSON.stringify(params.data),
        });

        return {
            data,
        };
    },

    update: async (resource, params) => {
        const data = await httpClient(`${getResourceUrl(resource)}/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(params.data),
        });

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

    updateMany: async () => {
        throw new Error("updateMany is not implemented yet");
    },

    delete: async () => {
        throw new Error("delete is not implemented");
    },

    deleteMany: async () => {
        throw new Error("deleteMany is not implemented");
    },
};