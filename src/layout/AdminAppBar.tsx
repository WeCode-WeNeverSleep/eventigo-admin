import { AppBar } from "react-admin";

export function AdminAppBar() {
    return (
        <AppBar
            sx={{
                backgroundColor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                boxShadow: "none",
                color: "text.primary",

                "& .RaAppBar-title": {
                    display: "none",
                },
            }}
        >
            <div style={{ flex: 1 }} />
        </AppBar>
    );
}