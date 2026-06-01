import { Create, SimpleForm, TextInput } from "react-admin";

export function RoomCreate() {
    return (
        <Create redirect="list">
            <SimpleForm>
                <TextInput source="name" label="Name" required />
            </SimpleForm>
        </Create>
    );
}