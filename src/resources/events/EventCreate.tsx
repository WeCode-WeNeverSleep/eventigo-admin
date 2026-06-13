import {
    Create,
    DateTimeInput,
    SimpleForm,
    TextInput,
} from "react-admin";

import { transformEventPayload } from "./eventTransforms";

export function EventCreate() {
    return (
        <Create redirect="list" transform={transformEventPayload}>
            <SimpleForm>
                <TextInput source="title" label="Title" required />
                <TextInput source="description" label="Description" multiline />
                <TextInput source="location" label="Location" required />
                <DateTimeInput source="startDate" label="Start date" required />
                <DateTimeInput source="endDate" label="End date" required />
            </SimpleForm>
        </Create>
    );
}