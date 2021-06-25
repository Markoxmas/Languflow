import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import List from "./List";

export default function Collection() {
  const lists = useSelector((state) => state.listsReducer);
  return (
    <Grid container direction="row">
      {lists.map((list) => (
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <List list={list} />
        </Grid>
      ))}
    </Grid>
  );
}
