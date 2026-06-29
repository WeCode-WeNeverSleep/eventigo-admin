import {
  DateTimeInput,
  DeleteButton,
  Edit,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SaveButton,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
import { useSearchParams } from "react-router-dom";
import { transformSessionPayload } from "./sessionTransforms";

export function SessionEdit() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");

  return (
    <Edit
      queryOptions={{ meta: { eventId } }}
      mutationOptions={{ meta: { eventId } }}
      mutationMode="pessimistic"
      redirect="list"
      transform={transformSessionPayload}
    >
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton />
            <DeleteButton
              mutationMode="pessimistic"
              mutationOptions={{ meta: { eventId } }}
              redirect={`/events/${eventId}`}
            />
          </Toolbar>
        }
      >
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
    </Edit>
  );
}

