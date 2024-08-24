"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "@/theme/theme";
import DashboardRoot from "@/components/Dashboard/DashboardRoot";
import { WidgetContextProvider } from "@/context/WidgetContext";
import AppBar from "@/components/Dashboard/DashboardAppBar";
import DashboardAppBar from "@/components/Dashboard/DashboardAppBar";

// Home page
export default function Home() {
  return (
    // Use theme provider to use MUI theme, across all child components
    <ThemeProvider theme={theme}>

      {/* Use widget context provider to use `WidgetContext` across all child components */}
      <WidgetContextProvider>
        <main>
          {/* App Bar */}
          <DashboardAppBar />

          {/* The root component */}
          <DashboardRoot />
        </main>
      </WidgetContextProvider>
    </ThemeProvider>
  );
}
