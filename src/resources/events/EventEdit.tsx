import {
    DateField,
    DateTimeInput,
    Datagrid,
    Edit,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext,
} from "react-admin";
import { EditSessionButton } from "../sessions/EditSessionButton";
import { transformEventPayload } from "./eventTransforms";

function EventSessionsList() {
    const event = useRecordContext();

    if (!event) {
        return null;
    }

    return (
        <ReferenceManyField
            label="Sessions"
            reference="sessions"
            target="eventId"
        >
            <Datagrid bulkActionButtons={false}>
                <TextField source="title" />
                <TextField source="room.name" label="Room" />
                <NumberField source="capacity" />
                <DateField source="startTime" showTime />
                <DateField source="endTime" showTime />
                <EditSessionButton eventId={String(event.id)} />
            </Datagrid>
        </ReferenceManyField>
    );
}

export function EventEdit() {
    return (
        <Edit transform={transformEventPayload}>
            <SimpleForm>
                <TextInput source="title" label="Title" required />
                <TextInput source="description" label="Description" multiline />
                <TextInput source="location" label="Location" required />
                <DateTimeInput source="startDate" label="Start date" required />
                <DateTimeInput source="endDate" label="End date" required />

                <EventSessionsList />
            </SimpleForm>
        </Edit>
    );
}