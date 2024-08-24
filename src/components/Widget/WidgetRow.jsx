import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import WidgetCard from "./WidgetCard";
import AddWidgetCard from "../AddWidget/AddWidgetCard";
import { WidgetContext } from "@/context/WidgetContext";
import { nanoid } from "nanoid";

/**
 * Component which render a widget row
 * @param {Array} rowData list of widgets in the current row
 * @param {Number} rowIndex the index of the row in the root widget data array
 */
function WidgetRow({ rowData, rowIndex }) {
    const { searchQuery } = useContext(WidgetContext);

    // Filter the widgets and return all the widgets which match the `searchQuery`
    const filteredWidgetList = rowData.widgets.filter(
        (widget) =>
            widget.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
                -1 ||
            widget.text.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );

    return (
        <Box>
            <Typography sx={{ mb: 1, mt: 2 }} variant="h6" fontWeight="500">
                {rowData.categoryName}
            </Typography>
            <Grid container spacing={2}>

                {/* Loop over the widget list to render widgets */}
                {filteredWidgetList.map((widget, widgetIndex) => (
                    <WidgetCard
                        widgetData={widget}
                        rowIndex={rowIndex}
                        widgetIndex={widgetIndex}

                        // Use `nanoid()` to avoid name duplication and collisions
                        key={"widget-" + nanoid()}
                    />
                ))}

                {/* render the Add widget card */}
                <AddWidgetCard
                    filteredWidgetList={filteredWidgetList}
                    searchQuery={searchQuery}
                />
            </Grid>
        </Box>
    );
}

export default WidgetRow;
