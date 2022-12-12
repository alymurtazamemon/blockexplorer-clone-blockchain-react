import { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Block from "./components/Block";
import alchemy from "./utils/alchemy";

import "./App.css";

function App() {
    const [blockNumber, setBlockNumber] = useState();

    useEffect(() => {
        async function getBlockNumber() {
            const blockNumber = await alchemy.core.getBlockNumber();
            setBlockNumber(blockNumber);
            // await alchemy.core.getBlock(blockNumber).then(console.log);
        }

        getBlockNumber();
    });

    return (
        <div className="App">
            <Link to={`/block/${blockNumber}`}>{blockNumber}</Link>

            <Switch>
                <Route path="/block/:blockNumber">
                    <Block blockNumber={blockNumber} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
