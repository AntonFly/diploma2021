import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Context } from "../../pages/project/Context";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

export default function Search_button() {
  const [context, setContext] = useContext(Context);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setContext({ ...context, load: !context.load })}
      >
        Поиск
      </Button>
    </div>
  );
}
