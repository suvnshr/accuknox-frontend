import { WidgetContext } from "@/context/WidgetContext";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";

/**
 * Component which renders the add widget form
 * @param {String} currentCategoryID the current category selcted in the Add widget drawer
 */
function AddWidgetForm({ currentCategoryID }) {
    const { createWidget } = useContext(WidgetContext);

    // Function which runs on submit of the create widget form
    const onCreateWidget = (ev) => {
        ev.preventDefault();

        // Access the form
        const createWidgetForm = ev.target;

        // Access the form fields
        const formElements = createWidgetForm.elements;

        // Access the widget name and text
        const widgetName = formElements.widgetName.value;
        const widgetText = formElements.widgetText.value;

        // if the widget name and text are not empty
        // then create a widget in the selected category
        if (widgetName && widgetText) {
            createWidget(currentCategoryID, widgetName, widgetText);

            // Reset the form
            createWidgetForm.reset();
        }
    };

    return (
        <Grid
            container
            // render this component using the `form` tag
            component="form"
            direction="column"
            // Call `onCreateWidget` on submit of the form
            onSubmit={onCreateWidget}
            sx={{
                position: "absolute",
                background: "#fff",
                bottom: 20,
                right: 0,
                px: 3,
                borderTop: (t) => `1px dashed ${t.palette.secondary.main}`,
            }}
            spacing={2}
        >
            <Grid item>
                <Typography variant="h5">
                    Create Widget in {currentCategoryID}
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    required
                    label="Widget name"
                    fullWidth
                    name="widgetName"
                    color="secondary"
                />
            </Grid>
            <Grid item>
                <TextField
                    multiline
                    required
                    label="Widget content"
                    fullWidth
                    name="widgetText"
                    color="secondary"
                />
            </Grid>
            <Grid item>
                <Button variant="contained" type="submit" color="secondary">
                    Create Widget
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddWidgetForm;
