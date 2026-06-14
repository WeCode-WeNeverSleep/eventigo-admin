import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function AdminSidebarBrand() {
    return (
        <Box
            sx={{
                px: 1.5,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid",
                borderColor: "divider",
            }}
        >
            <Box
                sx={{
                    width: 26,
                    height: 26,
                    flexShrink: 0,
                    borderRadius: "50%",
                    border: "1.5px solid",
                    borderColor: "primary.main",
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                }}
            >
                E
            </Box>

            <Box sx={{ minWidth: 0 }}>
                <Typography
                    fontWeight={900}
                    lineHeight={1}
                    fontSize="0.9rem"
                    noWrap
                >
                    EventiGo
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={700}
                    noWrap
                >
                    Admin
                </Typography>
            </Box>
        </Box>
    );
}