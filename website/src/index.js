import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline to reset browser styles

const theme = createTheme({
  palette: {
    background: {
      default: '#1f242d', // --bg-color
      paper: '#323946',   // --second-bg-color
    },
    text: {
      primary: '#fff',    // --text-color
    },
    primary: {
      main: '#0ef',       // --main-color
    },
  },
  // other theme options
});

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your entire application with ThemeProvider and CssBaseline */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
