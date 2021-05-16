import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Context } from "../../pages/project/Context";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export default function Checkboxes() {
  const [context, setContext] = useContext(Context);
  const [value, setValue] = React.useState("2");

  const handleChange = (event) => {
    setValue(event.target.value);
    setContext({ ...context, fz: event.target.name });
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label=""
        name="gender1"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="0"
          control={<Radio />}
          label="Фз 44"
          name="44"
        />
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="Фз 223"
          name="223"
        />
        <FormControlLabel value="2" control={<Radio />} label="Все" name="" />
      </RadioGroup>
    </FormControl>
  );
}
