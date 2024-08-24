import React, { createContext, useState } from "react";

// Bring in the default widget layout from JSON
import widgetsData from "./widgets.json";

// Initial state of the `WidgetContent`
const initialWidgetState = {
    widgetsData: widgetsData,
    addWidgetDrawerOpen: false,
    searchQuery: "",
    setWidgetsData: () => {},
    setAddWidgetDrawerOpen: () => {},
    toggleAddWidgetDrawer: () => {},
    toggleWidgetVisitbility: () => {},
    createWidget: () => {},
    performSearch: () => {},
};

// Define the `WidgetContent`
export const WidgetContext = createContext(initialWidgetState);

/**
 * The `WidgetContent` provider, this makes the context available to all the child components
 */
export function WidgetContextProvider({ children }) {

    // All Widgets data
    const [widgetsData, setWidgetsData] = useState(
        initialWidgetState.widgetsData
    );

    // Search query
    const [searchQuery, setSearchQuery] = useState(
        initialWidgetState.searchQuery
    );

    // Boolean to toggle the Add widget Drawer
    const [addWidgetDrawerOpen, setAddWidgetDrawerOpen] = useState(
        initialWidgetState.addWidgetDrawerOpen
    );

    // Toggle the add widget drawer
    const toggleAddWidgetDrawer = () => {
        setAddWidgetDrawerOpen(!addWidgetDrawerOpen);
    };

    // Toggle the visbilty of a widget
    const toggleWidgetVisitbility = (rowIndex, widgetIndex) => {
        const widgetsDataCopy = [...widgetsData];

        // Toggle the `visible` flag for this widget
        widgetsDataCopy[rowIndex].widgets[widgetIndex].visible =
            !widgetsDataCopy[rowIndex].widgets[widgetIndex].visible;

        setWidgetsData(widgetsDataCopy);
    };

    // Create a new widget in a category
    const createWidget = (categoryID, widgetName, widgetText) => {
        const widgetsDataCopy = [...widgetsData];

        // Find the index of the category
        const categoryIndex = widgetsData.findIndex(
            (el) => el.categoryID === categoryID
        );

        if (categoryIndex !== -1) {
            // Add the widget to the category
            widgetsData[categoryIndex].widgets.push({
                name: widgetName,
                text: widgetText,
                visible: true,
            });
        }

        setWidgetsData(widgetsDataCopy);
    };

    // Perform search, update the `searchQuery`
    const performSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <WidgetContext.Provider
            value={{
                widgetsData,
                setWidgetsData,
                addWidgetDrawerOpen,
                setAddWidgetDrawerOpen,
                toggleAddWidgetDrawer,
                toggleWidgetVisitbility,
                createWidget,
                performSearch,
                searchQuery,
            }}
        >
            {children}
        </WidgetContext.Provider>
    );
}
