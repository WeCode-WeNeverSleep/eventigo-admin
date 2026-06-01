import {
    Datagrid,
    DateField,
    EditButton,
    List,
    TextField,
} from "react-admin";

export function EventList() {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="location" />
                <DateField source="startDate" showTime />
                <DateField source="endDate" showTime />
                <EditButton />
            </Datagrid>
        </List>
    );
}