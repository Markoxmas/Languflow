import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import List from "./List";
import AddListButton from "./AddListButton";
import ListEdit from "./ListEdit";

export default function Collection() {
  const lists = useSelector((state) => state.listsReducer);
  const { adding, editing, editingId } = useSelector(
    (state) => state.listEditReducer
  );
  return (
    <Grid container direction="row">
      {lists.map((list) => (
        <Grid item lg={3} md={4} sm={6} xs={12}>
          {editing && editingId === list.id ? (
            <ListEdit />
          ) : (
            <List list={list} />
          )}
        </Grid>
      ))}
      {adding && (
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ListEdit />
        </Grid>
      )}
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <AddListButton />
      </Grid>
    </Grid>
  );
}
