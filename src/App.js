import React from "react";
import "./App.css";

import Header from "../src/components/header/header";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header brand="Финансовый агрегатор" />
        <main className="main">
          <Switch>
            <Route path="/region/:code" component={ProjectPage} />
            <Route
              path="/contract/:contract"
              component={() => {
                window.open(
                  "https://spending.gov.ru/goscontracts/contracts/" +
                    window.location
                      .toString()
                      .substring(
                        window.location.toString().lastIndexOf("/") + 1
                      )
                );
                let history = useHistory();
                history.goBack();
                return null;
              }}
            />
            <Route
              path="/customer/:customer"
              component={() => {
                window.open(
                  "https://spending.gov.ru/goscontracts/customers/" +
                    window.location
                      .toString()
                      .substring(
                        window.location.toString().lastIndexOf("/") + 1
                      )
                );
                let history = useHistory();
                history.goBack();
                return null;
              }}
            />
            <Route exact path="/product:code/:index" component={ProjectPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
          <Footer footerInfo="ВКР" />
        </main>
      </div>
    );
  }
}

export default App;
