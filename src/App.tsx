import React, { ReactElement, useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./model/Theme";
import theme from "./theme";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(theme.light);

  return (
    <ThemeProvider theme={globalTheme}>
      <Home></Home>
    </ThemeProvider>
  );
};

export default App;
