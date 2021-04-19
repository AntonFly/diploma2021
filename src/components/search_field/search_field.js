import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import regions from '../../data/regions.json'

function Search_field() {
    let history = useHistory();

    function handleClick() {
        history.push("/region/1");
    }

    return (
        <Autocomplete
            id="combo-box-demo"
            options={regions}
            getOptionLabel={(option) => option.region}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
            // size="large"
            //TODO переход на сраницу
            onChange={(event, region) =>{
                alert("enter");
                handleClick()
                // this.props.history.push('/region/1');
            }
            }
        />
    );
}
export default Search_field