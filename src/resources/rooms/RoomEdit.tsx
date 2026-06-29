import { Edit, SimpleForm, TextInput } from "react-admin";
import { AdminToolbar } from "../../components/AdminToolbar";

export function RoomEdit() {
    return (
        <Edit redirect="list">
            <SimpleForm toolbar={<AdminToolbar />}>
                <TextInput source="name" label="Name" required />
            </SimpleForm>
        </Edit>
    );
}