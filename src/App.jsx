import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import alchemy from "./utils/alchemy";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Block from "./components/Block";
import Transactions from "./components/Transactions";
import Transaction from "./components/Transaction";

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
                    <Main blockNumber={blockNumber} />
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
