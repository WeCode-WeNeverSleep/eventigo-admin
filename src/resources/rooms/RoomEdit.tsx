import { Edit, SimpleForm, TextInput } from "react-admin";

export function RoomEdit() {
    return (
        <Edit redirect="list">
            <SimpleForm>
                <TextInput source="name" label="Name" required />
            </SimpleForm>
        </Edit>
    );
}