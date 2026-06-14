import {
    Datagrid,
    DateField,
    FunctionField,
    List,
    TextField,
} from "react-admin";
import AddIcon from "@mui/icons-material/Add";
import { Button, useRecordContext } from "react-admin";

function CreateSessionButton() {
    const event = useRecordContext();

    if (!event) return null;

    return (
        <Button
            component="a"
            href={`#/sessions/create?eventId=${String(event.id)}`}
            label="Create session"
        >
            <AddIcon />
        </Button>
    );
}

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