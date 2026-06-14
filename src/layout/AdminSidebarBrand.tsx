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
                sx={{
                    width: 38,
                    height: 38,
                    flexShrink: 0,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#070E15",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    src="/assets/logo.png"
                    alt="EventiGo"
                    sx={{
                        width: 28,
                        height: 28,
                        objectFit: "contain",
                    }}
                />
            </Box>

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