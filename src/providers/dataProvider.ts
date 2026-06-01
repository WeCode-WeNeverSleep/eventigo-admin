import type { DataProvider } from "react-admin";
import { env } from "../config/env";
import { httpClient } from "./httpClient";

const getResourceUrl = (resource: string) => {
    return `${env.apiUrl}/admin/${resource}`;
};

const getSessionResourceUrl = (eventId: string) => {
    return `${env.apiUrl}/admin/events/${eventId}/sessions`;
};

export const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        if (resource === "sessions") {
            const eventId = params.filter?.eventId;

            if (!eventId) {
                return {
                    data: [],
                    total: 0,
                };
            }

            const data = await httpClient(getSessionResourceUrl(eventId));

            return {
                data,
                total: data.length,
            };
        }

        const data = await httpClient(getResourceUrl(resource));

        return {
            data,
            total: data.length,
        };
    },

    getOne: async (resource, params) => {
        if (resource === "sessions") {
            const eventId = params.meta?.eventId;

            if (!eventId) {
                throw new Error("Missing eventId for session details");
            }

            const data = await httpClient(
                `${getSessionResourceUrl(eventId)}/${params.id}`
            );

            return {
                data,
            };
        }

        const data = await httpClient(`${getResourceUrl(resource)}/${params.id}`);

        return {
            data,
        };
    },

    create: async (resource, params) => {
        if (resource === "sessions") {
            const eventId = params.data.eventId;

            if (!eventId) {
                throw new Error("Missing eventId for session creation");
            }

            const { eventId: _eventId, ...payload } = params.data;

            const data = await httpClient(getSessionResourceUrl(eventId), {
                method: "POST",
                body: JSON.stringify(payload),
            });

            return {
                data,
            };
        }

        const data = await httpClient(getResourceUrl(resource), {
            method: "POST",
            body: JSON.stringify(params.data),
        });

        return {
            data,
        };
    },

    update: async (resource, params) => {
        if (resource === "sessions") {
            const eventId = params.data.eventId ?? params.previousData?.eventId;

            if (!eventId) {
                throw new Error("Missing eventId for session update");
            }

            const { eventId: _eventId, ...payload } = params.data;

            const data = await httpClient(
                `${getSessionResourceUrl(eventId)}/${params.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(payload),
                }
            );

            return {
                data,
            };
        }

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

   getManyReference: async (resource, params) => {
    if (resource === "sessions" && params.target === "eventId") {
        const data = await httpClient(getSessionResourceUrl(String(params.id)));

        return {
            data,
            total: data.length,
        };
    }

    throw new Error(`getManyReference is not implemented for ${resource}`);
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