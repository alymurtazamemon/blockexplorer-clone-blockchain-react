import React from "react";
import { useState } from "react";

import alchemy from "../utils/alchemy";

const DataContext = React.createContext();

function DataContextProvider({ children }) {
    const [blocksData, setBlocksData] = useState([]);

    async function getBlockInformation() {
        const blockNumber = await alchemy.core.getBlockNumber();

        for (let i = 0; i < 10; i++) {
            const info = await alchemy.core.getBlockWithTransactions(
                blockNumber - i
            );

            const blockObject = {
                number: info.number,
                timestamp: info.timestamp,
                miner: info.miner,
                gasUsed: info.gasUsed.toString(),
                gasLimit: info.gasLimit.toString(),
                baseFeeInGwei: info.baseFeePerGas.toString() / 1000000000,
                extraData: info.extraData,
                hash: info.hash,
                parentHash: info.parentHash,
                nonce: info.nonce,
                difficulty: info.difficulty,
                transactions: info.transactions,
            };
            
            setBlocksData(prevData => {
                return [...prevData, blockObject];
            })
        }
    }

    return (
        <DataContext.Provider value={{ getBlockInformation, blocksData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContextProvider, DataContext };
