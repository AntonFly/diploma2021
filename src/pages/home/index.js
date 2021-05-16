import Search_field from "../../components/search_field/search_field";
import { useEffect, useState } from "react";
import searchRegionContracts from "../../backend/searchRegionContracts";
import { Contract_plate } from "../../components/plates/contract_plate/contract_plate";
import { PreLoading } from "../../components/loading_animation/loading_animation";
import Plug from "../../backend/plug";
import "./style.css";

function App() {
  const [contracts, setContracts] = useState();

  useEffect(() => {
    setTimeout(() => {
      searchRegionContracts({
        pricerange: "1000000-1000000000000000",
        count: "3",
        sort: "-price",
      })
        .then((result) => setContracts(result))
        .catch((e) => console.log(e));
    });
  }, []);

  if (contracts)
    return (
      <div className="app">
        <main className="main">
          <div className="container1">
            <Search_field />
            <div className="plate1">
              {contracts.contracts.data.map((item, index) => {
                if (index < 3) return Contract_plate(item, index);
              })}
            </div>
            {Plug()}
          </div>
        </main>
      </div>
    );
  else return PreLoading();
}

export default App;
