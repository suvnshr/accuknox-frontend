import { WidgetContext } from "@/context/WidgetContext";
import { CloseOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";

/**
 * Component which renders the add widget drawer header
 */
function AddWidgetDrawerHeader() {
    const { toggleAddWidgetDrawer } = useContext(WidgetContext);

    return (
        <Box>
            <Grid
                justifyContent="space-between"
                alignItems="center"
                container
                sx={{
                    background: (t) => t.palette.secondary.main,
                    py: 1,
                    px: 2,
                }}
            >
                <Grid item>
                    <Typography color="#fff" variant="h6">
                        Add Widget
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton onClick={toggleAddWidgetDrawer}>
                        <CloseOutlined htmlColor="#fff" />
                    </IconButton>
                </Grid>
            </Grid>

            <Typography sx={{ px: 2, my: 1 }}>
                Personalize your dashboard by adding the following widget:
            </Typography>
        </Box>
    );
}

export default AddWidgetDrawerHeader;
