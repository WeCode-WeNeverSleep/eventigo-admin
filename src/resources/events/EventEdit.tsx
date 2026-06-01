import {
    DateField,
    DateTimeInput,
    Datagrid,
    Edit,
    EditButton,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin";
import { transformEventPayload } from "./eventTransforms";

export function EventEdit() {
    return (
        <Edit transform={transformEventPayload}>
            <SimpleForm>
                <TextInput source="title" label="Title" required />
                <TextInput source="description" label="Description" multiline />
                <TextInput source="location" label="Location" required />
                <DateTimeInput source="startDate" label="Start date" required />
                <DateTimeInput source="endDate" label="End date" required />

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
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit>
    );
}