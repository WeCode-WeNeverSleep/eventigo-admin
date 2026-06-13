import type { RaRecord } from "react-admin";

type SpeakerFormData = RaRecord & {
    links?: string | unknown;
};

export const transformSpeakerPayload = (data: SpeakerFormData) => {
    if (!data.links) {
        return {
            ...data,
            links: undefined,
        };
    }

    if (typeof data.links !== "string") {
        return data;
    }

    try {
        return {
            ...data,
            links: JSON.parse(data.links),
        };
    } catch {
        throw new Error("Links must be valid JSON");
    }
};