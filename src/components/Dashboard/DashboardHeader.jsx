import { Grid, IconButton, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import AddWidgetButton from "../AddWidget/AddWidgetButton";
import {
    AccessTimeOutlined,
    MoreVertOutlined,
    SyncOutlined,
} from "@mui/icons-material";

/**
 * Component which renders the Dashboard heading, add widget button and few more icons
 */
function DashboardHeader() {
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography sx={{ my: 2 }} variant="h5" fontWeight="500">
                    CNAPP Dashboard
                </Typography>
            </Grid>

            <Grid item sx={{ display: "flex", alignItems: "center" }}>
                {/* Add widget button */}
                <AddWidgetButton />

                <IconButton sx={{ mx: 1 }}>
                    <SyncOutlined />
                </IconButton>
                <IconButton sx={{ mr: 1 }}>
                    <MoreVertOutlined />
                </IconButton>

                <Select
                    size="small"
                    startAdornment={
                        <IconButton color="secondary" sx={{ pl: 1 }}>
                            <AccessTimeOutlined />
                        </IconButton>
                    }
                    color="secondary"
                    value={2}
                >
                    <MenuItem value={2}>Last 2 days</MenuItem>
                </Select>
            </Grid>
        </Grid>
    );
}

export default DashboardHeader;
