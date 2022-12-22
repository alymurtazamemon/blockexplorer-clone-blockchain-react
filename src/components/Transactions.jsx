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

    return (
        <section className="bg-white mx-24 px-8 py-4 my-8 border rounded-lg divide-y">
            <div className="flex py-1 bg-sky-50">
                <p className="w-3/12 py-3 text-[#6C757E] font-bold">Txn Hash</p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Block</p>
                <p className="w-3/12 py-3 text-[#6C757E] font-bold">From</p>
                <p className="w-3/12 py-3 text-[#6C757E] font-bold">To</p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Data</p>
            </div>
            {blockNumber
                ? transactionsToComponent(
                      blocksData.find(
                          (blockData) => blockData.number == blockNumber
                      ).transactions
                  )
                : transactionsToComponent(transactions)}
        </section>
    );
}

function transactionsToComponent(txs) {
    return txs.map((tx, index) => {
        return (
            <section key={index} className="flex py-4">
                <p className="w-3/12 text-[#357BAD]">
                    <Link to={`/tx/${tx.hash}`}>{tx.hash.slice(0, 16)}...</Link>
                </p>
                <p className="w-2/12 text-[#357BAD]">
                    <Link to={`/block/${tx.blockNumber}`}>
                        {tx.blockNumber}
                    </Link>
                </p>
                <p className="w-3/12 text-[#357BAD]">
                    <Link to={`/address/${tx.from}`}>
                        {tx.from.slice(0, 16)}...
                    </Link>
                </p>
                <p className="w-3/12 text-[#357BAD]">
                    <Link to={`/address/${tx.to}`}>
                        {tx.to.slice(0, 16)}...
                    </Link>
                </p>
                <p className="w-2/12">{tx.data.slice(0, 16)}...</p>
            </section>
        );
    });
}

export default Transactions;
