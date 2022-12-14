import { Link } from "react-router-dom";
import { useContext } from "react";

import { DataContext } from "../context/DataContext";

function Main() {
    const { blocksData } = useContext(DataContext);

    return (
        <div>
            <div>
                <h1>Latest Blocks</h1>
                {blocksData.length ? (
                    blocksData.map((block, index) => {
                        if (index >= 10) {
                            return;
                        }

                        return (
                            <div key={block.number}>
                                <Link to={`/block/${block.number}`}>
                                    {block.number}
                                </Link>
                                <span>
                                    Fee Recipient {block.miner.slice(0, 8)}...{" "}
                                    <br />
                                    {block.transactions.length} txs
                                </span>
                                <br />
                            </div>
                        );
                    })
                ) : (
                    <div>Loading...</div>
                )}
                <Link to="/blocks">View All Blocks</Link>
            </div>
            <div>
                <h1>Latest Transactions</h1>
                {blocksData.length ? (
                    blocksData[0].transactions.map((tx, index) => {
                        if (index >= 10) {
                            return;
                        }

                        return (
                            <div key={index}>
                                <Link to={`/tx/${tx.hash}`}>
                                    {tx.hash.slice(0, 16)}...
                                </Link>
                                <p>{tx.from.slice(0, 8)}...</p>
                                <p>{tx.to.slice(0, 8)}...</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
                <Link to="/txs">View All Transactions</Link>
            </div>
        </div>
    );
}

export default Main;
