import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </RecoilRoot>
);
