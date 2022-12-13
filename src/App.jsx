import { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import alchemy from "./utils/alchemy";
import "./App.css";

import Block from "./components/Block";
import Transactions from "./components/Transactions";
import Transaction from "./components/Transaction";
import Header from "./components/Header";

function App() {
    const [blockNumber, setBlockNumber] = useState();

    useEffect(() => {
        async function getBlockNumber() {
            const blockNumber = await alchemy.core.getBlockNumber();
            setBlockNumber(blockNumber);
            // await alchemy.core.getBlock(blockNumber).then(console.log);
        }

        getBlockNumber();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Link to={`/block/${blockNumber}`}>{blockNumber}</Link>
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
