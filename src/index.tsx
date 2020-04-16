import React from "react";
import ReactDOM from "react-dom";
import PokedexMain from "./Components/PokedexMain";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { GlobalStyle } from "./theme/GlobalStyle";
import "fonts.css";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <PokedexMain />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
