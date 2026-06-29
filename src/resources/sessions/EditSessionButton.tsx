import EditIcon from "@mui/icons-material/Edit";
import { Button, type Identifier, useRecordContext } from "react-admin";

type EditSessionButtonProps = {
  eventId?: Identifier;
};

export function EditSessionButton({ eventId }: EditSessionButtonProps) {
  const session = useRecordContext();

  if (!session) {
    return null;
  }

  const sessionEventId = eventId ?? session.eventId;

  if (!sessionEventId) {
    return null;
  }

  return (
    <Button
      component="a"
      href={`#/sessions/${session.id}?eventId=${String(sessionEventId)}`}
      label="Edit"
    >
      <EditIcon />
    </Button>
  );
}

