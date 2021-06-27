import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { onAddLexemes } from "../../redux/actions/lexemeActions";
import {
  onAddEmptyLexeme,
  onInputChange,
} from "../../redux/actions/inputActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField: {
    margin: "5px",
  },
}));

export default function AddModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tableLexemes = useSelector((state) => state.tableReducer.lexemes);
  const lang = useSelector((state) => state.languageReducer);
  const newLexemes = useSelector((state) => state.modalReducer.lexemes);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Lexemes</h2>
            {newLexemes.map((newLexeme, index) => (
              <div>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name={index + "-" + "foreign"}
                  label={lang.foreign}
                  value={newLexeme.foreign}
                  onChange={(event) => dispatch(onInputChange("modal", event))}
                  className={classes.inputField}
                />
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name={index + "-" + "native"}
                  label={lang.native}
                  value={newLexeme.native}
                  onChange={(event) => dispatch(onInputChange("modal", event))}
                  className={classes.inputField}
                />
              </div>
            ))}
            <Button onClick={() => dispatch(onAddEmptyLexeme())}>
              Add line
            </Button>
            <Button
              onClick={() => {
                props.handleClose();
                dispatch(
                  onAddLexemes(props.listId, [...tableLexemes, ...newLexemes])
                );
              }}
            >
              Submit
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
