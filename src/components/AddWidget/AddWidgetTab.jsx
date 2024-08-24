import React, { useContext } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { CheckBox } from "@mui/icons-material";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { WidgetContext } from "@/context/WidgetContext";
import { nanoid } from "nanoid";

/**
 * Component which renders the list of widgets in a category in the form of checkboxes
 * @param {Array} row the list of widgets for the current tab
 * @param {Number} rowIndex the index of the category currently selected in the tabs
 */
function AddWidgetTab({ row, rowIndex }) {
    const { toggleWidgetVisitbility } = useContext(WidgetContext);

    return (
        <TabPanel
            value={row.categoryID}
            sx={{
                overflowY: "scroll",
                maxHeight: "200px",
            }}
        >
            {row.widgets.map((widget, widgetIndex) => (
                <React.Fragment key={"widget-checkbox" + nanoid()}>
                    <Box>
                        <FormControlLabel
                            // render the checkbox
                            control={<Checkbox color="secondary" />}
                            // make the checkbox checked if it is visible and vice-versa
                            checked={widget.visible}
                            label={widget.name}
                            // toggle the widget visibility on togglw of checkbox
                            onChange={() =>
                                toggleWidgetVisitbility(rowIndex, widgetIndex)
                            }
                        />
                    </Box>
                </React.Fragment>
            ))}
        </TabPanel>
    );
}

export default AddWidgetTab;
