import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/welcome/ff535484-6880-4653-b06e-89983ecf4ed5" />
            }
          />
          <Route path="/welcome/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
);
