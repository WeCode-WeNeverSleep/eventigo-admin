import { Create, SimpleForm, TextInput } from "react-admin";
import { transformSpeakerPayload } from "./speakerTransforms";

export function SpeakerCreate() {
    return (
        <Create transform={transformSpeakerPayload}>
            <SimpleForm>
                <TextInput source="fullName" label="Full name" required />
                <TextInput source="avatarUrl" label="Avatar URL" />
                <TextInput source="bio" label="Bio" multiline />
                <TextInput
                    source="links"
                    label="Links JSON"
                    multiline
                    helperText='Example: ["https://linkedin.com/in/john", "https://github.com/john"]'
                />
            </SimpleForm>
        </Create>
    );
}