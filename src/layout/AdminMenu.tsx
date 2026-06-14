import EventIcon from "@mui/icons-material/Event";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import { Menu } from "react-admin";

export function AdminMenu() {
    return (
        <Menu>
            <Menu.ResourceItem
                name="events"
                icon={<EventIcon />}
            />

            <Menu.ResourceItem
                name="rooms"
                icon={<MeetingRoomIcon />}
            />

            <Menu.ResourceItem
                name="speakers"
                icon={<RecordVoiceOverIcon />}
            />
        </Menu>
    );
}