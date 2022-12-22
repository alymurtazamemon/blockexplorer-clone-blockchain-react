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
import AddressDetails from "./components/AddressDetails";
import Footer from "./components/Footer";

function App() {
    const { getBlockInformation } = useContext(DataContext);

    useEffect(() => {
        getBlockInformation();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-50">
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/blocks">
                        <Blocks />
                    </Route>
                    <Route path="/block/:blockNumberOrHash">
                        <Block />
                    </Route>
                    <Route exact path="/txs">
                        <Transactions />
                    </Route>
                    <Route path="/tx/:hash">
                        <Transaction />
                    </Route>
                    <Route path="/address/:address">
                        <AddressDetails />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
