import { WidgetContext } from "@/context/WidgetContext";
import { Box, Drawer } from "@mui/material";
import React, { useContext } from "react";
import AddWidgetTabsContainer from "./AddWidgetTabsContainer";
import AddWidgetForm from "./AddWidgetForm";
import AddWidgetDrawerHeader from "./AddWidgetDrawerHeader";

/**
 * Component which renders the add widget drawer
 */
function AddWidgetDrawer() {
    const {
        widgetsData,
        addWidgetDrawerOpen,
        toggleAddWidgetDrawer,
        setCurrentCategoryID,
        currentCategoryID,
    } = useContext(WidgetContext);

    // Handle change of the tabs, by changing the current selected category ID
    const handleTabChange = (event, newCategoryID) => {
        setCurrentCategoryID(newCategoryID);
    };

    return (
        <Drawer
            anchor={"right"}
            open={addWidgetDrawerOpen}
            sx={{
                position: "relative",
            }}
            onClose={() => toggleAddWidgetDrawer()}
        >
            <Box sx={{ width: "500px" }}>
                {/* Render the header */}
                <AddWidgetDrawerHeader />

                {/* Render the tabs */}
                <AddWidgetTabsContainer
                    widgetsData={widgetsData}
                    currentCategoryID={currentCategoryID}
                    handleTabChange={handleTabChange}
                />

                {/* Render the add widget form */}
                <AddWidgetForm currentCategoryID={currentCategoryID} />
            </Box>
        </Drawer>
    );
}

export default AddWidgetDrawer;
