import {
    Datagrid,
    DateField,
    List,
    NumberField,
    TextField,
} from "react-admin";

export function SessionList() {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="room.name" label="Room" />
                <NumberField source="capacity" />
                <DateField source="startTime" showTime />
                <DateField source="endTime" showTime />
            </Datagrid>
        </List>
    );
}