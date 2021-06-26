import React from "react";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Collection from "./components/list/Collection";
import LexemeTable from "./components/lexeme/LexemeTable";
import { onLoadLists } from "./redux/actions/listActions";

function App() {
  const dispatch = useDispatch();
  dispatch(onLoadLists());
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" />
        <Collection />
        <LexemeTable />
      </Container>
    </>
  );
}

export default App;
