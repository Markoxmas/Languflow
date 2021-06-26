import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { onAddList, onEditList } from "../../redux/actions/listActions";
import { onInputChange } from "../../redux/actions/inputActions";

const useStyles = makeStyles({
  root: {
    display: "block",
    margin: "5px",
    textAlign: "center",
  },
  buttons: {
    justifyContent: "center",
  },
  input: {
    margin: "3px",
  },
});

export default function ListEdit() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { list, adding, editing } = useSelector(
    (state) => state.listEditReducer
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            className={classes.input}
            value={list.title}
            onChange={(event) => dispatch(onInputChange(event))}
          />
        </Typography>
        <Typography variant="body2" component="p">
          <TextField
            id="outlined-textarea"
            label="Description"
            multiline
            variant="outlined"
            name="description"
            className={classes.input}
            value={list.description}
            onChange={(event) => dispatch(onInputChange(event))}
          />
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        {adding && (
          <Button onClick={() => dispatch(onAddList(list))}>Submit</Button>
        )}
        {editing && (
          <Button onClick={() => dispatch(onEditList(list))}>Save</Button>
        )}
      </CardActions>
    </Card>
  );
}
