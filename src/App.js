import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Collection from "./components/list/Collection";
import LexemeTable from "./components/lexeme/LexemeTable";

function App() {
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
