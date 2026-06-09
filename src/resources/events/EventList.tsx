import {
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceManyField,
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
                <ReferenceManyField
                    label="Sessions"
                    reference="sessions"
                    target="eventId"
                >
                    <Datagrid
                        bulkActionButtons={false}
                        rowClick={(id, _resource, record) =>
                            `#/sessions/${id}?eventId=${String(record.eventId)}`
                        }
                    >
                        <TextField source="title" />
                        <TextField source="room.name" label="Room" />
                        <NumberField source="capacity" />
                        <DateField source="startTime" showTime />
                        <DateField source="endTime" showTime />
                    </Datagrid>
                </ReferenceManyField>
            </Datagrid>
        </List>
    );
}