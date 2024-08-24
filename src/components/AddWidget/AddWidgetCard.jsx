import { alpha, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import AddWidgetButton from "./AddWidgetButton";

/**
 * Component which renders the Add widget button in a card
 * @param {Array} filteredWidgetList List of all widgets after performing search
 * @param {String} searchQuery the current search query
 * @param {String} rowCategoryID the category ID of the current row we are rendering in
 */
function AddWidgetCard({ filteredWidgetList, searchQuery, rowCategoryID }) {
    return (
        <Grid xs={4} item>
            <Card
                variant="outlined"
                sx={{
                    minHeight: "150px",
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "150px",
                        py: "0!important",
                        flexDirection: "column",
                    }}
                >
                    {/* Show a "no results found" message 
                    when no widgets match the search query for this row */}
                    {filteredWidgetList.length === 0 && searchQuery.length ? (
                        <Typography
                            textAlign="center"
                            variant="body1"
                            sx={{
                                mb: 2,
                                py: 1,
                                wordBreak: "break-word",
                                overflow: "hidden",
                            }}
                        >
                            No widgets found for "{searchQuery}"
                        </Typography>
                    ) : null}

                    {/* Show the add widget button */}
                    <Box sx={{ py: 1 }}>
                        <AddWidgetButton rowCategoryID={rowCategoryID} />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default AddWidgetCard;
