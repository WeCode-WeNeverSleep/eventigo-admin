import {
  Create,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useSearchParams } from "react-router-dom";
import { transformSessionPayload } from "./sessionTransforms";

export function SessionCreate() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");

  return (
    <Create redirect={`/events/${eventId}`} transform={transformSessionPayload}>
      <SimpleForm defaultValues={{ eventId }}>
        <TextInput source="title" label="Title" required />
        <TextInput source="description" label="Description" multiline />
        <DateTimeInput source="startTime" label="Start time" required />
        <DateTimeInput source="endTime" label="End time" required />
        <NumberInput source="capacity" label="Capacity" />

        <ReferenceInput source="roomId" reference="rooms">
          <SelectInput optionText="name" />
        </ReferenceInput>

        <ReferenceArrayInput source="speakerIds" reference="speakers">
          <SelectArrayInput optionText="fullName" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
}

