import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import alchemy from "../utils/alchemy";
import { Link } from "react-router-dom";

function Transactions() {
    const [transactions, setTransactions] = useState(<div>Loading...</div>);
    const location = useLocation();
    // access the search parameters from the location object
    const searchParams = new URLSearchParams(location.search);
    // access a specific parameter by name
    const blockNumber = searchParams.get("block");

    useEffect(() => {
        async function getBlockTransactions() {
            const info = await alchemy.core.getBlockWithTransactions(
                Number(blockNumber)
            );

            const txsRows = info.transactions.map((tx, index) => {
                // * need only 10 items
                if (index >= 10) {
                    return;
                }

                return (
                    <div key={index} className="flex">
                        <Link to={`/tx/${tx.hash}`}>
                            <p>{tx.hash.slice(0, 16)}...</p>
                        </Link>
                        <p>{tx.blockNumber}</p>
                        <p>{tx.from.slice(0, 16)}...</p>
                        <p>{tx.to.slice(0, 16)}...</p>
                        <p>{tx.data.slice(0, 8)}...</p>
                    </div>
                );
            });

            setTransactions(
                <div>
                    <div className="flex">
                        <h2>Tx Hash</h2>
                        <h2>Block Number</h2>
                        <h2>From</h2>
                        <h2>To</h2>
                        <h2>Method</h2>
                    </div>
                    {txsRows}
                </div>
            );
        }

        getBlockTransactions();
    }, []);

    return transactions;
}

export default Transactions;
