import AddIcon from "@mui/icons-material/Add";
import { Button, type Identifier, useRecordContext } from "react-admin";

type CreateSessionButtonProps = {
    eventId?: Identifier;
};

export function CreateSessionButton({ eventId }: CreateSessionButtonProps) {
    const record = useRecordContext();
    const targetEventId = eventId ?? record?.id ?? record?.eventId;

    if (!targetEventId) {
        return null;
    }

    return (
        <Button
            component="a"
            href={`#/sessions/create?eventId=${String(targetEventId)}`}
            label="Create session"
        >
            <AddIcon />
        </Button>
    );
}