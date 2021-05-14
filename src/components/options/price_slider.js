import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../pages/project/Context";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 5,
  },
});

function valueLabelFormat(value) {
  const [coefficient, exponent] = value
    .toExponential()
    .split("e")
    .map((item) => Number(item));
  return `${Math.round(coefficient)}e^${exponent}`;
}

export default function NonLinearSlider() {
  const [context, setContext] = useContext(Context);
  const classes = useStyles();
  const [value, setValue] = React.useState(40);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setContext({
      ...context,
      price: (newValue ** 10).toExponential().split("e+"),
    });
  };

  return (
    <div className={classes.root}>
      <Typography id="non-linear-slider" gutterBottom>
        Максимльная стоимость
      </Typography>
      <Slider
        value={value}
        min={1}
        step={0.1}
        max={40}
        scale={(x) => x ** 10}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={(number) => {
          return valueLabelFormat(number);
        }}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
}
