import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Collection from "./components/list/Collection";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" />
        <Collection />
      </Container>
    </>
  );
}

export default App;
