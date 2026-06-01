import {
    DateTimeInput,
    Edit,
    NumberInput,
    ReferenceArrayInput,
    ReferenceInput,
    SelectArrayInput,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { transformSessionPayload } from "./sessionTransforms";

export function SessionEdit() {
    return (
        <Edit transform={transformSessionPayload}>
            <SimpleForm>
                <TextInput source="eventId" label="Event ID" required />
                <TextInput source="title" label="Title" required />
                <TextInput source="description" label="Description" multiline />
                <DateTimeInput source="startTime" label="Start time" required />
                <DateTimeInput source="endTime" label="End time" required />
                <NumberInput source="capacity" label="Capacity" />

                <ReferenceInput source="roomId" reference="rooms">
                    <SelectInput optionText="name" />
                </ReferenceInput>

                <ReferenceArrayInput source="speakerIds" reference="speakers">
                    <SelectArrayInput optionText="fullName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
}