import { AppBar, TitlePortal } from "react-admin";

export function AdminAppBar() {
    return (
        <AppBar
            sx={{
                backgroundColor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                boxShadow: "none",
            }}
        >
            <TitlePortal />
        </AppBar>
    );
}