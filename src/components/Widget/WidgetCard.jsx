import React, { useContext } from "react";

import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { WidgetContext } from "@/context/WidgetContext";

/**
 * Component which renders the widget card
 * @param {Array} widgetData Data of the widget rendered
 * @param {Number} rowIndex The index of the row in which in the widget is rendred
 * @param {Number} widgetIndex the index of the widget rendered
 */
function WidgetCard({ widgetData, rowIndex, widgetIndex }) {
    const { toggleWidgetVisitbility, searchQuery } = useContext(WidgetContext);

    // Show the widget when the widget matches the search query
    const showWidgetWhenSearched = !widgetData.visible && searchQuery;

    // Only show the widget when it is set to be visible or it matches the search query
    if (widgetData.visible || showWidgetWhenSearched) {
        return (
            <Grid xs={4} item>
                <Card
                    variant="outlined"
                    elevation={2}
                    sx={{
                        minHeight: "150px",
                    }}
                >
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "Center",
                            }}
                        >


                            {/* Widget name */}
                            <Typography
                                color="secondary"
                                variant="body1"
                                fontWeight="500"
                            >
                                {widgetData.name}
                            </Typography>

                            {/* Don't show the hide button if the widget is already hidden 
                            and matches the search qyery */}
                            {!showWidgetWhenSearched ? (
                                <IconButton
                                    color="secondary"

                                    // Hide the widget on click of the close button
                                    onClick={() =>
                                        toggleWidgetVisitbility(
                                            rowIndex,
                                            widgetIndex
                                        )
                                    }
                                >
                                    <CloseOutlined fontSize="small" />
                                </IconButton>
                            ) : (
                                <Chip label="hidden" />
                            )}
                        </Box>

                        {/* Widget text */}

                        <Typography
                            sx={{
                                color: (t) =>
                                    t.palette.getContrastText(
                                        t.palette.primary.main
                                    ),
                            }}
                            variant="body1"
                        >
                            {widgetData.text}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    } else return null;
}

export default WidgetCard;
