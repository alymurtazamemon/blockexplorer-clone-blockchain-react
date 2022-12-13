import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { DataContext } from "../context/DataContext";

function Main() {
    const { blocksData } = useContext(DataContext);

    return (
        <div>
            <div>
                <h1>Latest Blocks</h1>
                {blocksData.length ? (
                    blocksData.map((block) => (
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
                    ))
                ) : (
                    <div>Loading...</div>
                )}
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
                                <p>{tx.hash.slice(0, 16)}...</p>
                                <p>{tx.from.slice(0, 8)}...</p>
                                <p>{tx.to.slice(0, 8)}...</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Main;
