import EditIcon from "@mui/icons-material/Edit";
import { Button, useRecordContext } from "react-admin";
import { Link } from "react-router-dom";

export function EditSessionButton() {
    const session = useRecordContext();

    if (!session) return null;

    return (
        <Button
            component={Link}
            to={`/sessions/${session.id}?eventId=${session.eventId}`}
            label="Edit"
        >
            <EditIcon />
        </Button>
    );
}