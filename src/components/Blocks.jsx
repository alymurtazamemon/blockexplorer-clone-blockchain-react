import { useContext } from "react";

import { DataContext } from "../context/DataContext";

function Blocks() {
    const { blocksData } = useContext(DataContext);

    return blocksData.map((blockData) => {
        return (
            <section className="flex">
                <p>{blockData.number}</p>
                <p>{blockData.timestamp}</p>
                <p>{blockData.transactions.length}</p>
                <p>{blockData.miner.slice(0, 16)}...</p>
                <p>{blockData.gasUsed}</p>
                <p>{blockData.gasLimit}</p>
                <p>{blockData.baseFeeInGwei} Gwei</p>
            </section>
        );
    });
}

export default Blocks;
