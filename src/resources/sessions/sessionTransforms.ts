import type { RaRecord } from "react-admin";

type SessionFormData = RaRecord & {
    startTime?: string;
    endTime?: string;
    speakerIds?: string[];
};

export const transformSessionPayload = (data: SessionFormData) => ({
    ...data,
    startTime: data.startTime
        ? new Date(data.startTime).toISOString()
        : data.startTime,
    endTime: data.endTime
        ? new Date(data.endTime).toISOString()
        : data.endTime,
    speakerIds: data.speakerIds ?? [],
});