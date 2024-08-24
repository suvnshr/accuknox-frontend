import { WidgetContext } from "@/context/WidgetContext";
import { AddOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";

/**
 * Component which renders the add widget button
 */
function AddWidgetButton() {
    const { toggleAddWidgetDrawer } = useContext(WidgetContext);

    return (
        <Button
            color="secondary"
            variant="outlined"
            startIcon={<AddOutlined />}
            // Toggle the add widget drawer on click
            onClick={toggleAddWidgetDrawer}
        >
            Add Widget
        </Button>
    );
}

export default AddWidgetButton;
