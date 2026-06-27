import {
    DateField,
    Datagrid,
    NumberField,
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceManyField,
} from "react-admin";
import { EditSessionButton } from "../sessions/EditSessionButton";

import { CreateSessionButton } from "../sessions/CreateSessionButton";

export function EventShow() {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="title" />
                <TextField source="description" />
                <TextField source="location" />
                <DateField source="startDate" showTime />
                <DateField source="endDate" showTime />
                <CreateSessionButton />
                <ReferenceManyField
                    label="Sessions"
                    reference="sessions"
                    target="eventId"
                >
                    <Datagrid
                        bulkActionButtons={false}
                        rowClick={(id, _resource, record) =>
                            `/sessions/${id}?eventId=${String(record.eventId)}`
                        }
                    >
                        <TextField source="title" />
                        <TextField source="room.name" label="Room" />
                        <NumberField source="capacity" />
                        <DateField source="startTime" showTime />
                        <DateField source="endTime" showTime />
                        <EditSessionButton />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    );
}