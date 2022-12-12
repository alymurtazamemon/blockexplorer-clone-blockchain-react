import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Block from "./components/Block";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

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
