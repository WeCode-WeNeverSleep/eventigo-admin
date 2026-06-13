import type { RaRecord } from "react-admin";

type EventFormData = RaRecord & {
    startDate?: string;
    endDate?: string;
};

export const transformEventPayload = (data: EventFormData) => ({
    ...data,
    startDate: data.startDate
        ? new Date(data.startDate).toISOString()
        : data.startDate,
    endDate: data.endDate
        ? new Date(data.endDate).toISOString()
        : data.endDate,
});