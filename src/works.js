
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import regions from '../../data/regions.json'
import { useHistory } from "react-router-dom";



function Search_field() {

    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }

    return (
        <button type="button" onClick={handleClick}>
            Go home
        </button>
    );

    return(
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
                handleEnter(region)
                // this.props.history.push('/region/1');
            }
            }
        />
    )
}

export default Search_field();