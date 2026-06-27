import {
    defaultDarkTheme,
    defaultLightTheme,
    type RaThemeOptions,
} from "react-admin";

import type { Theme } from "@mui/material/styles";

export const darkTheme: RaThemeOptions = {
    ...defaultDarkTheme,
    palette: {
        ...defaultDarkTheme.palette,
        mode: "dark",
        primary: {
            main: "#13DCF6",
            contrastText: "#0B211A",
        },
        secondary: {
            main: "#FF3A5A",
        },
        background: {
            default: "#070E15",
            paper: "#0E1720",
        },
        text: {
            primary: "#EFF6FB",
            secondary: "#8E9AA4",
        },
        divider: "rgba(255,255,255,0.2)",
    },
    typography: {
        ...defaultDarkTheme.typography,
        fontFamily: '"Chivo", sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundImage: "none",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundImage: "none",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 700,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: 800,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#0E1720",
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                },
                root: {
                    borderRadius: 20,
                    border: "1px solid rgba(19,220,246,0.08)",
                    backgroundImage: "none",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                    backgroundColor: `${theme.palette.primary.main}14`,

                    "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}26`,
                    },
                }),
            },
        },
        RaMenuItemLink: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    borderRadius: 12,
                    margin: "4px 8px",
                    fontWeight: 700,

                    "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}14`,
                        color: theme.palette.primary.main,
                    },

                    "&.RaMenuItemLink-active": {
                        backgroundColor: `${theme.palette.primary.main}26`,
                        color: theme.palette.primary.main,
                        fontWeight: 800,
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                    },
                }),
            },
        },
    },
};

export const lightTheme: RaThemeOptions = {
    ...defaultLightTheme,
    palette: {
        ...defaultLightTheme.palette,
        mode: "light",
        primary: {
            main: "#0094CD",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#EF4B67",
        },
        background: {
            default: "#F9FCFF",
            paper: "#ECF3F8",
        },
        text: {
            primary: "#07121E",
            secondary: "#5B646F",
        },
        divider: "rgba(0,0,0,0.1)",
    },
    typography: {
        ...defaultLightTheme.typography,
        fontFamily: '"Chivo", sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
};