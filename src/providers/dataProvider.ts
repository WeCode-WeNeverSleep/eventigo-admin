import type { DataProvider } from "react-admin";
import { env } from "../config/env";
import { httpClient } from "./httpClient";

type Speaker = {
    id: string;
};

type SessionRecord = {
    id: string;
    speakers?: Speaker[];
    speakerIds?: string[];
    [key: string]: unknown;
};

const getResourceUrl = (resource: string) => {
    return `${env.apiUrl}/admin/${resource}`;
};

const getSessionResourceUrl = (eventId: string) => {
    return `${env.apiUrl}/admin/events/${eventId}/sessions`;
};

const normalizeSession = (session: SessionRecord) => {
    return {
        ...session,
        speakerIds:
            session.speakers?.map((speaker) => speaker.id) ??
            session.speakerIds ??
            [],
    };
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
                data: data.map(normalizeSession),
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
            const eventId =
                params.meta?.eventId ??
                new URLSearchParams(window.location.search).get("eventId");

            if (!eventId) {
                throw new Error("Missing eventId for session details");
            }

            const data = await httpClient(
                `${getSessionResourceUrl(eventId)}/${params.id}`
            );

            return {
                data: normalizeSession(data),
            };
        }

        const data = await httpClient(`${getResourceUrl(resource)}/${params.id}`);

        return {
            data,
        };
    },

    getMany: async (resource, params) => {
        const data = await Promise.all(
            params.ids.map((id) =>
                httpClient(`${getResourceUrl(resource)}/${id}`)
            )
        );

        return {
            data,
        };
    },

    getManyReference: async (resource, params) => {
        if (resource === "sessions" && params.target === "eventId") {
            const data = await httpClient(getSessionResourceUrl(String(params.id)));

            return {
                data: data.map(normalizeSession),
                total: data.length,
            };
        }

        throw new Error(`getManyReference is not implemented for ${resource}`);
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
                data: normalizeSession(data),
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
            const eventId =
                params.data.eventId ??
                params.previousData?.eventId ??
                params.meta?.eventId ??
                new URLSearchParams(window.location.search).get("eventId");

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
                data: normalizeSession(data),
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

    updateMany: async () => {
        throw new Error("updateMany is not implemented yet");
    },

    delete: async (resource, params) => {
        if (resource === "sessions") {
            const eventId =
                params.previousData?.eventId ??
                params.meta?.eventId ??
                new URLSearchParams(window.location.search).get("eventId");

            if (!eventId) {
                throw new Error("Missing eventId for session deletion");
            }

            await httpClient(
                `${getSessionResourceUrl(eventId)}/${params.id}`,
                {
                    method: "DELETE",
                }
            );
            if(!params.previousData) {
                throw new Error("Missing previousData")
            }
            return {
                data: params.previousData,
            };
        }

        await httpClient(`${getResourceUrl(resource)}/${params.id}`, {
            method: "DELETE",
        });

        if(!params.previousData) {
                throw new Error("Missing previousData")
            }
        return {
            data: params.previousData,
        };
    },

    deleteMany: async () => {
        throw new Error("deleteMany is not implemented");
    },
};