import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import { onInitAddList } from "../../redux/actions/listActions";
import createList from "../../lib/createList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "5px",
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function List({ list }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { foreign, native } = useSelector((state) => state.languageReducer);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Fab color="primary">
          <AddIcon
            onClick={() =>
              dispatch(onInitAddList(createList({ foreign, native })))
            }
          />
        </Fab>
      </CardContent>
    </Card>
  );
}
