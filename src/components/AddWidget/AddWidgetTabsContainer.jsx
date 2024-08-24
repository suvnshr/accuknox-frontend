import React from "react";
import AddWidgetTab from "./AddWidgetTab";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Box } from "@mui/material";
import { nanoid } from "nanoid";

/**
 * Component which renders the Tabs for each category
 * and the Tab contents of the category
 *  in the add widget drawer
 * @param {String} currentCategoryID The category ID of the current category selected
 * @param {Function} handleTabChange Function which handles the change in tabs,
 *                              by changing the currently selected category
 * @param {Array} widgetsData List of all widgets
 */
function AddWidgetTabsContainer({
    currentCategoryID,
    handleTabChange,
    widgetsData,
}) {
    return (
        <TabContext value={currentCategoryID}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList color="secondary" onChange={handleTabChange}>
                    {widgetsData.map((row) => (
                        <Tab
                            key={"widget-tab" + nanoid()}
                            color="secondary"
                            label={row.categoryID}
                            value={row.categoryID}
                        />
                    ))}
                </TabList>
            </Box>

            {widgetsData.map((row, rowIndex) => (
                <AddWidgetTab
                    key={"widget-tab-content" + nanoid()}
                    row={row}
                    rowIndex={rowIndex}
                />
            ))}
        </TabContext>
    );
}

export default AddWidgetTabsContainer;
