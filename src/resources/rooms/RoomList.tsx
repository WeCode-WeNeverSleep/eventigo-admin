import { Datagrid, List, TextField } from "react-admin";

export function RoomList() {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}