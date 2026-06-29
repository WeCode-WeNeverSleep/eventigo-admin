import EventIcon from "@mui/icons-material/Event";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Menu } from "react-admin";
import { AdminSidebarBrand } from "./AdminSidebarBrand";

export function AdminMenu() {
    return (
        <>
            <AdminSidebarBrand />

            <Menu>
                <Menu.DashboardItem icon={<DashboardIcon />} />
                <Menu.ResourceItem name="events" icon={<EventIcon />} />
                <Menu.ResourceItem name="rooms" icon={<MeetingRoomIcon />} />
                <Menu.ResourceItem name="speakers" icon={<RecordVoiceOverIcon />} />
            </Menu>
        </>
    );
}
