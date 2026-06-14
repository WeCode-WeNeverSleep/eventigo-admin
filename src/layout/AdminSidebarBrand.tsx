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
                gap: 1.2,
                borderBottom: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src="/assets/logo.png"
                alt="EventiGo"
                sx={{
                    width: 34,
                    height: 34,
                    objectFit: "contain",
                    flexShrink: 0,
                }}
            />

            <Box
                sx={{
                    minWidth: 0,
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
            >
                <Typography
                    fontWeight={900}
                    lineHeight={1}
                    fontSize="1.08rem"
                    noWrap
                    sx={{ color: "text.primary" }}
                >
                    Eventi
                    <Box component="span" sx={{ color: "primary.main" }}>
                        Go
                    </Box>
                </Typography>

                <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={700}
                    fontSize="0.72rem"
                    noWrap
                >
                    Admin
                </Typography>
            </Box>
        </Box>
    );
}