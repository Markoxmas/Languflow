import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Collection from "./components/list/Collection";
import LexemeTable from "./components/lexeme/LexemeTable";
import Menu from "./components/Menu";
import { onLoadLists } from "./redux/actions/listActions";
import { MENU } from "./redux/menuContants";

function App() {
  const dispatch = useDispatch();
  dispatch(onLoadLists());
  const menuValue = useSelector((state) => state.menuReducer.value);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" />
        <Menu />
        {menuValue === MENU.PROFILE && (
          <h1 style={{ textAlign: "center" }}>Under construction!</h1>
        )}
        {menuValue === MENU.LISTS && <Collection />}
        {menuValue === MENU.LEXEMES && <LexemeTable />}
        {menuValue === MENU.MATCHING && (
          <h1 style={{ textAlign: "center" }}>Under construction!</h1>
        )}
        {menuValue === MENU.WRITING && (
          <h1 style={{ textAlign: "center" }}>Under construction!</h1>
        )}
        {menuValue === MENU.SETTINGS && (
          <h1 style={{ textAlign: "center" }}>Under construction!</h1>
        )}
      </Container>
    </>
  );
}

export default App;
