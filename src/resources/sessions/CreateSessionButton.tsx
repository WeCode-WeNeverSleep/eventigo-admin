import AddIcon from "@mui/icons-material/Add";
import { Button, type Identifier, useRecordContext } from "react-admin";

type CreateSessionButtonProps = {
    eventId?: Identifier;
};

export function CreateSessionButton({ eventId }: CreateSessionButtonProps) {
    const record = useRecordContext();
    const targetEventId = eventId ?? record?.id ?? record?.eventId;

    if (!targetEventId) return null;

    return (
        <Button
            component="a"
            href={`#/sessions/create?eventId=${String(targetEventId)}`}
            label="Session"
            startIcon={<AddIcon />}
            size="small"
            sx={{
                minHeight: 26,
                px: 1.4,
                py: 0.35,
                fontSize: "0.72rem",
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 999,
                fontWeight: 800,
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: 0.9,
                },
            }}
        />
    );
}