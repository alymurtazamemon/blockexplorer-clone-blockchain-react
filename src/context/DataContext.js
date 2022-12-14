import React from "react";
import { useState } from "react";

import alchemy from "../utils/alchemy";

const DataContext = React.createContext();

function DataContextProvider({ children }) {
    const [blocksData, setBlocksData] = useState([]);
    const [transactions, setTransactions] = useState([]);

    async function getBlockInformation() {
        const blockNumber = await alchemy.core.getBlockNumber();

        for (let i = 0; i < 20; i++) {
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

            setBlocksData((prevData) => {
                return [...prevData, blockObject];
            });

            if (i == 0) {
                setTransactions((prevData) => {
                    return [...prevData, ...blockObject.transactions];
                });
            }
        }
    }

    return (
        <DataContext.Provider
            value={{ getBlockInformation, blocksData, transactions }}
        >
            {children}
        </DataContext.Provider>
    );
}

export { DataContextProvider, DataContext };
