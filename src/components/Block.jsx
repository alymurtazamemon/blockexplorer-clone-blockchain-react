import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../context/DataContext";

function Block() {
    const { blocksData } = useContext(DataContext);
    const { blockNumberOrHash } = useParams();
    const info = blocksData.find(
        (blockData) =>
            blockData.number == blockNumberOrHash ||
            blockData.hash == blockNumberOrHash
    );

    return (
        <section>
            <h1 className="mx-24 my-8 text-xl text-gray-900">
                Block{" "}
                <span className="text-gray-500 text-lg ml-1">
                    #{info.number}
                </span>
            </h1>
            <div className="bg-white mx-24 px-8 py-4 my-8 border rounded-lg divide-y">
                <h1 className="pb-3 text-[#3498DA] font-bold">Overview</h1>

                <div className="flex">
                    <div className="w-1/2 divide-y">
                        <p className="py-3">Block</p>
                        <p className="py-3">Time Stamp</p>
                        <p className="py-3">Transactions</p>
                        <p className="py-3">Fee Recipient</p>
                        <p className="py-3">Gas Used</p>
                        <p className="py-3">Gas Limit</p>
                        <p className="py-3">Base Fee Per Gas</p>
                        <p className="py-3">Extra Data</p>
                        <p className="py-3">Hash</p>
                        <p className="py-3">Parent Hash</p>
                        <p className="py-3">Nonce</p>
                        <p className="py-3">Difficulty</p>
                    </div>
                    <div className="divide-y w-full">
                        <p className="py-3">{info.number}</p>
                        <p className="py-3">{info.timestamp}</p>
                        <p className="py-3 text-[#357BAD]">
                            <Link to={`/txs?block=${info.number}`}>
                                {info.transactions != undefined
                                    ? info.transactions.length
                                    : 0}
                                {" transactions"}
                            </Link>
                        </p>
                        <p className="py-3">{info.miner}</p>
                        <p className="py-3">{info.gasUsed}</p>
                        <p className="py-3">{info.gasLimit}</p>
                        <p className="py-3">{info.baseFeeInGwei} Gwei</p>
                        <p className="py-3">{info.extraData}</p>
                        <p className="py-3">{info.hash}</p>
                        <p className="py-3 text-[#357BAD]">
                            <Link to={`/block/${info.parentHash}`}>
                                {info.parentHash}
                            </Link>
                        </p>
                        <p className="py-3">{info.nonce}</p>
                        <p className="py-3">{info.difficulty}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Block;
