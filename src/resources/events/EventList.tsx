import {
    Datagrid,
    DateField,
    FunctionField,
    List,
    TextField,
} from "react-admin";
import { CreateSessionButton } from "../sessions/CreateSessionButton";

export function EventList() {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="location" />
                <DateField source="startDate" showTime />
                <DateField source="endDate" showTime />
                <FunctionField
                    label="Sessions"
                    render={(record) => record._count?.sessions ?? 0}
                />
                <CreateSessionButton />
            </Datagrid>
        </List>
    );
}