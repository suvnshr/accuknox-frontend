import { WidgetContext } from "@/context/WidgetContext";
import { AddOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";

/**
 * Component which renders the add widget button
 * @param {String} rowCategoryID the category ID of the current row we are rendering in
 */
function AddWidgetButton({ rowCategoryID = null }) {
    const { toggleAddWidgetDrawer } = useContext(WidgetContext);

    return (
        <Button
            color="secondary"
            variant="outlined"
            startIcon={<AddOutlined />}
            // Toggle the add widget drawer on click, 
            // and switch to the category tab
            onClick={() => toggleAddWidgetDrawer(rowCategoryID)}
        >
            Add Widget
        </Button>
    );
}

export default AddWidgetButton;
