import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../context/DataContext";
import { AiOutlineQuestionCircle } from "react-icons/ai";

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
                        <TitleComponent title="Block" />
                        <TitleComponent title="Time Stamp" />
                        <TitleComponent title="Transactions" />
                        <TitleComponent title="Fee Recipient" />
                        <TitleComponent title="Gas Used" />
                        <TitleComponent title="Gas Limit" />
                        <TitleComponent title="Base Fee Per Gas" />
                        <TitleComponent title="Extra Data" />
                        <TitleComponent title="Hash" />
                        <TitleComponent title="Parent Hash" />
                        <TitleComponent title="Nonce" />
                        <TitleComponent title="Difficulty" />
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
                        <p className="py-3 text-[#357BAD]">
                            <Link to={`/address/${info.miner}`}>
                                {info.miner}
                            </Link>
                        </p>
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

function TitleComponent({ title }) {
    return (
        <div className="flex items-center">
            <AiOutlineQuestionCircle />
            <p className="ml-2 py-3">{title}</p>
        </div>
    );
}

export default Block;
