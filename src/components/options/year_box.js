import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import years from "../../data/years.json";
import { Context } from "../../pages/project/Context";
import { useContext } from "react";

function Year_box() {
  const [context, setContext] = useContext(Context);
  console.log(context);
  const defaultYear = years.pop();
  years.push(defaultYear);
  return (
    <Autocomplete
      id="combo-box-demo"
      options={years}
      getOptionLabel={(option) => option.year}
      style={{ width: 125 }}
      defaultValue={defaultYear}
      renderInput={(params) => (
        <TextField {...params} label="" variant="outlined" />
      )}
      onChange={(event, year) => {
        setContext({ ...context, year: year.year });
      }}
    />
  );
}

export default Year_box;
