import { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { DataContext } from "./context/DataContext";

import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Blocks from "./components/Blocks";
import Block from "./components/Block";
import Transactions from "./components/Transactions";
import Transaction from "./components/Transaction";

function App() {
    const { getBlockInformation } = useContext(DataContext);

    useEffect(() => {
        getBlockInformation();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/blocks">
                    <Blocks />
                </Route>
                <Route path="/block/:blockNumber">
                    <Block />
                </Route>
                <Route exact path="/txs">
                    <Transactions />
                </Route>
                <Route path="/tx/:hash">
                    <Transaction />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
