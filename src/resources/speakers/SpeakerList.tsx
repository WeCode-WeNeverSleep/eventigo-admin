import {
    Datagrid,
    EditButton,
    List,
    TextField,
    UrlField,
} from "react-admin";

export function SpeakerList() {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="fullName" />
                <UrlField source="avatarUrl" />
                <TextField source="bio" />
                <TextField source="links"/>
                <EditButton />
            </Datagrid>
        </List>
    );
}