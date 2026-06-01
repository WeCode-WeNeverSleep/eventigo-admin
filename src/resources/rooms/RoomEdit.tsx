import { Edit, SimpleForm, TextInput } from "react-admin";

export function RoomEdit() {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" label="Name" required />
            </SimpleForm>
        </Edit>
    );
}