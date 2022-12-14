import { Link } from "react-router-dom";
import { useContext } from "react";

import { DataContext } from "../context/DataContext";

function Main() {
    const { blocksData } = useContext(DataContext);

    return (
        <div className="flex px-24 py-8 items-stretch">
            <div className="text-left px-4 border rounded-lg divide-y w-1/2 mr-2">
                <h1 className="py-4 text-xl font-bold">Latest Blocks</h1>
                {blocksData.length ? (
                    blocksData.map((block, index) => {
                        if (index >= 10) {
                            return;
                        }

                        return (
                            <div
                                key={block.number}
                                className="flex justify-between py-4"
                            >
                                <div className="flex w-1/2">
                                    <h2 className="mr-4 bg-gray-100 rounded-lg px-4 py-3 my-auto">
                                        Bk
                                    </h2>
                                    <Link
                                        to={`/block/${block.number}`}
                                        className="my-auto"
                                    >
                                        {block.number}
                                    </Link>
                                </div>
                                <div className="w-1/2">
                                    Fee Recipient {block.miner.slice(0, 16)}...
                                    <br />
                                    {block.transactions.length} txs
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>Loading...</div>
                )}
                <div className="py-4 text-center">
                    <Link to="/blocks">View All Blocks</Link>
                </div>
            </div>
            <div className="text-left px-8 border rounded-lg  divide-y w-1/2 ml-2">
                <h1 className="py-4 text-xl font-bold">Latest Transactions</h1>
                {blocksData.length ? (
                    blocksData[0].transactions.map((tx, index) => {
                        if (index >= 10) {
                            return;
                        }

                        return (
                            <div
                                key={index}
                                className="flex justify-between py-4"
                            >
                                <div className="flex">
                                    <h2 className="mr-4 bg-gray-100 rounded-full px-4 py-3 my-auto">
                                        Tx
                                    </h2>
                                    <Link
                                        to={`/tx/${tx.hash}`}
                                        className="my-auto"
                                    >
                                        {tx.hash.slice(0, 16)}...
                                    </Link>
                                </div>
                                <p className="my-auto">
                                    {tx.from.slice(0, 8)}...
                                </p>
                                <p className="my-auto">
                                    {tx.to.slice(0, 8)}...
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
                <div className="py-4 text-center">
                    <Link to="/txs">View All Transactions</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
