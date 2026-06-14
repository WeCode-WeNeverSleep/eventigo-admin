import Typography from "@mui/material/Typography";
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
            <Typography
                variant="h6"
                sx={{
                    flex: 1,
                    fontWeight: 800,
                    letterSpacing: 0.4,
                    color: "primary.main",
                }}
            >
                EventiGo Admin
            </Typography>

            <TitlePortal />
        </AppBar>
    );
}