// import { StrictMode } from "react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import 'notyf/notyf.min.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    //   <StrictMode>
    <MantineProvider>
        <BrowserRouter basename="/Twitter-react-ts">
            <App />
        </BrowserRouter>
    </MantineProvider>
    //   </StrictMode>,
);