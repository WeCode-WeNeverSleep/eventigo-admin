import {
  DateField,
  DateTimeInput,
  Datagrid,
  Edit,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
  Button,
} from "react-admin";
import { Link } from "react-router-dom";
import { EditSessionButton } from "../sessions/EditSessionButton";
import { transformEventPayload } from "./eventTransforms";
import { AdminToolbar } from "../../components/AdminToolbar";

function EventSessionsList() {
  const event = useRecordContext();

  if (!event) {
    return null;
  }

  return (
    <>
      <Button
        component={Link}
        to={`/sessions/create?eventId=${String(event.id)}`}
        label="Create session"
      />

      <ReferenceManyField
        label="Sessions"
        reference="sessions"
        target="eventId"
      >
        <Datagrid
          bulkActionButtons={false}
          rowClick={(id) => `/sessions/${id}?eventId=${String(event.id)}`}
        >
          <TextField source="title" />
          <TextField source="room.name" label="Room" />
          <NumberField source="capacity" />
          <DateField source="startTime" showTime />
          <DateField source="endTime" showTime />
          <EditSessionButton eventId={String(event.id)} />
        </Datagrid>
      </ReferenceManyField>
    </>
  );
}

export function EventEdit() {
  return (
    <Edit
      redirect="list"
      transform={transformEventPayload}
      mutationMode="pessimistic"
    >
      <SimpleForm toolbar={<AdminToolbar />}>
        <TextInput source="title" label="Title" required />
        <TextInput source="description" label="Description" multiline />
        <TextInput source="location" label="Location" required />
        <DateTimeInput source="startDate" label="Start date" required />
        <DateTimeInput source="endDate" label="End date" required />

        <EventSessionsList />
      </SimpleForm>
    </Edit>
  );
}

