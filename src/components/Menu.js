import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { onSetMenu } from "../redux/actions/menuActions";
import { MENU } from "../redux/menuContants";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="Profile"
          onClick={() => dispatch(onSetMenu(MENU.PROFILE))}
        />
        <Tab label="Lists" onClick={() => dispatch(onSetMenu(MENU.LISTS))} />
        <Tab
          label="Matching"
          onClick={() => dispatch(onSetMenu(MENU.MATCHING))}
        />
        <Tab
          label="Writing"
          onClick={() => dispatch(onSetMenu(MENU.WRITING))}
        />
        <Tab
          label="Settings"
          onClick={() => dispatch(onSetMenu(MENU.SETTINGS))}
        />
      </Tabs>
    </Paper>
  );
}
