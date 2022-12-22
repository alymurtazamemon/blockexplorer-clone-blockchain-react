import { useContext } from "react";

import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

function Blocks() {
    const { blocksData } = useContext(DataContext);

    const blocks = blocksData.map((blockData, index) => {
        return (
            <div key={index} className="flex py-4">
                <p className="w-2/12 text-[#357BAD]">
                    <Link to={`/block/${blockData.number}`}>
                        {blockData.number}
                    </Link>
                </p>
                <p className="w-2/12">{blockData.timestamp}</p>
                <p className="w-1/12 text-[#357BAD]">
                    <Link to={`/txs?block=${blockData.number}`}>
                        {blockData.transactions.length}
                    </Link>
                </p>
                <p className="w-3/12 text-[#357BAD]">
                    <Link to={`/address/${blockData.miner}`}>
                        {blockData.miner.slice(0, 16)}...
                    </Link>
                </p>
                <p className="w-2/12">{blockData.gasUsed}</p>
                <p className="w-2/12">{blockData.gasLimit}</p>
                <p className="w-2/12">{blockData.baseFeeInGwei} Gwei</p>
            </div>
        );
    });

    return (
        <section className="bg-white mx-24 px-8 py-4 my-8 border rounded-lg divide-y">
            <p className="pb-4 text-sm text-[#6C757E]">
                Block #{blocksData[blocksData.length - 1].number} to #
                {blocksData[0].number} (Total of {blocksData.length} Blocks)
            </p>
            <div className="flex py-4 bg-sky-50">
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Block</p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Age</p>
                <p className="w-1/12 py-3 text-[#6C757E] font-bold">Txn</p>
                <p className="w-3/12 py-3 text-[#6C757E] font-bold">
                    Fee Reciptant
                </p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Gas Used</p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">
                    Gas Limit
                </p>
                <p className="w-2/12 py-3 text-[#6C757E] font-bold">Base Fee</p>
            </div>
            {blocks}
        </section>
    );
}

export default Blocks;
