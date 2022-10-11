import React, { ReactElement, useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./model/Theme";
import theme from "./theme";
import "./App.css";

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(theme.light);

  return (
    <ThemeProvider theme={globalTheme}>
      
    </ThemeProvider>
  )
};

export default App;
