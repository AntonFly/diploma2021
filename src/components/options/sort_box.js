import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import sort from "../../data/sort.json";
import { Context } from "../../pages/project/Context";
import { useContext } from "react";

function Sort_box() {
  const [context, setContext] = useContext(Context);
  const defaultSort = sort.pop();
  sort.push(defaultSort);
  return (
    <Autocomplete
      id="combo-box-demo"
      options={sort}
      getOptionLabel={(option) => option.name}
      style={{ width: 300, padding: 10 }}
      defaultValue={defaultSort}
      renderInput={(params) => (
        <TextField {...params} label="" variant="outlined" />
      )}
      onChange={(event, sort) => {
        setContext({ ...context, sort: sort.sort });
        console.log(context);
      }}
    />
  );
}

export default Sort_box;
