import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AddModal from "./AddModal";
import { onToggleTableEdit } from "../../redux/actions/lexemeTableActions";
import {
  onEditLexemes,
  onDeleteLexemes,
} from "../../redux/actions/lexemeActions";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

export default function TableToolbar(props) {
  const classes = useToolbarStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { numSelected, title, setSelected, selected } = props;
  const { editing, listId, lexemes } = useSelector(
    (state) => state.tableReducer
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {!editing && <Button onClick={handleOpen}>Add</Button>}
      <AddModal open={open} handleClose={handleClose} listId={listId} />
      {!editing && (
        <Button onClick={() => dispatch(onToggleTableEdit())}>Edit</Button>
      )}
      {editing && (
        <Button
          onClick={() => {
            setSelected([]);
            dispatch(onToggleTableEdit());
            dispatch(onEditLexemes(listId, lexemes));
          }}
        >
          Submit
        </Button>
      )}

      {numSelected > 0 ? (
        <Button
          onClick={() =>
            dispatch(
              onDeleteLexemes(
                listId,
                lexemes.filter((lexeme) => !selected.includes(lexeme.id))
              )
            )
          }
        >
          Delete
        </Button>
      ) : (
        <Button disabled>Delete</Button>
      )}
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
