"use client";

import React, { useContext, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";

import {
    AccountCircleOutlined,
    ChevronRightOutlined,
    NotificationsOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { WidgetContext } from "@/context/WidgetContext";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid " + alpha(theme.palette.common.black, 0.1),
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    marginLeft: theme.spacing(3),
    width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "40ch",
    },
}));

/**
 * The dashboard app bar
 */
export default function DashboardAppBar() {
    const { performSearch } = useContext(WidgetContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        noWrap
                        component="div"
                    >
                        Home
                    </Typography>
                    <IconButton
                        size="small"
                        edge="start"
                        aria-label="open drawer"
                        color="prinary"
                        sx={{ mx: 0 }}
                    >
                        <ChevronRightOutlined />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        color="secondary"
                        component="div"
                        sx={{ mx: 0 }}
                    >
                        Dashboard V2
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    <Search>
                        <SearchIconWrapper>
                            <SearchOutlined color="secondary" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search anything..."
                            inputProps={{
                                "aria-label": "search",

                                // Perform search when the search field is change
                                onChange: (ev) =>
                                    performSearch(ev.target.value),
                            }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Dashboard action icons */}
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="show 12 new notifications"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <Badge badgeContent={12} color="error">
                                <NotificationsOutlined />
                            </Badge>
                        </IconButton>

                        <Button
                            size="large"
                            variant="text"
                            sx={{
                                boxShadow: "none",
                                fontSize: "0.95rem",
                                color: (t) =>
                                    t.palette.getContrastText(
                                        t.palette.primary.main
                                    ),
                            }}
                            startIcon={
                                <AccountCircleOutlined fontSize="large" />
                            }
                        >
                            Jane Doe
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
