import EditIcon from "@mui/icons-material/Edit";
import { Button, useRecordContext } from "react-admin";

type EditSessionButtonProps = {
    eventId: string;
};

export function EditSessionButton({ eventId }: EditSessionButtonProps) {
    const session = useRecordContext();

    if (!session) {
        return null;
    }

    return (
        <Button
            component="a"
            href={`#/sessions/${session.id}?eventId=${eventId}`}
            label="Edit"
        >
            <EditIcon />
        </Button>
    );
}