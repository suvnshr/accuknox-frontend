import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import WidgetRow from "../Widget/WidgetRow";
import DashboardHeader from "./DashboardHeader";
import { WidgetContext } from "@/context/WidgetContext";
import AddWidgetDrawer from "../AddWidget/AddWidgetDrawer";
import { nanoid } from "nanoid";

/**
 * The dashboard root contains all the contents of the page
 */
function DashboardRoot() {
    // List of all widgets
    const { widgetsData } = useContext(WidgetContext);

    return (
        <Container sx={{ mb: 2 }}>
            <DashboardHeader />

            {/* Render all the widget rows */}
            {widgetsData.map((row, rowIndex) => (
                <WidgetRow
                    // Use `nanoid()` to avoid key name duplication and collisions
                    key={"widget-row-" + nanoid()}
                    rowData={row}
                    rowIndex={rowIndex}
                />
            ))}
            <AddWidgetDrawer />
        </Container>
    );
}

export default DashboardRoot;
