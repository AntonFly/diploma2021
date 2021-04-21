import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import regions from '../../data/regions.json'

function Search_field() {
    let history = useHistory();

    function handleEnter(region) {
        let url = "/region/"+region
        history.push(url);
    }

    return (
        <Autocomplete
            id="combo-box-demo"
            options={regions}
            getOptionLabel={(option) => option.region+" "+option.code}
            style={{ width: 800 }}
            renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
            //TODO переход на сраницу
            onChange={(event, region) =>{
                handleEnter(region.code)
            }
            }
        />
    );
}
export default Search_field