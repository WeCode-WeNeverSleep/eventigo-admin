import { Edit, SimpleForm, TextInput } from "react-admin";
import { transformSpeakerPayload } from "./speakerTransforms";

export function SpeakerEdit() {
    return (
        <Edit transform={transformSpeakerPayload}>
            <SimpleForm>
                <TextInput source="fullName" label="Full name" required />
                <TextInput source="avatarUrl" label="Avatar URL" />
                <TextInput source="bio" label="Bio" multiline />
                <TextInput
                    source="links"
                    label="Links JSON"
                    multiline
                    format={(value) =>
                        value ? JSON.stringify(value, null, 2) : ""
                    }
                    parse={(value) => value}
                    helperText='Example: ["https://linkedin.com/in/john", "https://github.com/john"]'
                />
            </SimpleForm>
        </Edit>
    );
}