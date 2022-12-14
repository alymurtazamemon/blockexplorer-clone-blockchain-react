import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { DataContext } from "../context/DataContext";

function Transactions() {
    const { blocksData, transactions } = useContext(DataContext);

    const location = useLocation();
    // access the search parameters from the location object
    const searchParams = new URLSearchParams(location.search);
    // access a specific parameter by name
    const blockNumber = searchParams.get("block");

    return blockNumber
        ? transactionsToComponent(
              blocksData.find((blockData) => blockData.number == blockNumber)
                  .transactions
          )
        : transactionsToComponent(transactions);
}

function transactionsToComponent(txs) {
    return txs.map((tx, index) => {
        return (
            <section key={index} className="flex">
                <Link to={`/tx/${tx.hash}`}>
                    <p>{tx.hash.slice(0, 16)}...</p>
                </Link>
                <p>{tx.blockNumber}</p>
                <p>{tx.from.slice(0, 16)}...</p>
                <p>{tx.to.slice(0, 16)}...</p>
                <p>{tx.data.slice(0, 8)}...</p>
            </section>
        );
    });
}

export default Transactions;
