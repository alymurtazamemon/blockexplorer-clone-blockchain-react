import alchemy from "../utils/alchemy";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

function Block(props) {
    const [blockInfo, setBlockInfo] = useState({});

    useEffect(() => {
        async function getBlockInformation() {
            const info = await alchemy.core.getBlockWithTransactions(
                props.blockNumber
            );
            console.log(info);
            setBlockInfo({
                number: info.number,
                nonce: info.nonce,
                miner: info.miner,
                parentHash: info.parentHash,
                timestamp: info.timestamp,
                hash: info.hash,
                difficulty: info.difficulty,
                extraData: info.extraData,
                transactions: info.transactions,
                baseFeePerGas:
                    info.baseFeePerGas == null || undefined
                        ? ethers.utils.parseUnits("0", "wei").toString()
                        : ethers.utils
                              .parseUnits(info.baseFeePerGas.toString(), "wei")
                              .toString(),
                gasLimit: info.gasLimit.toString(),
                gasUsed: info.gasUsed.toString(),
            });
        }

        getBlockInformation();
    }, []);

    return (
        <section>
            <p>Block {blockInfo.number}</p>
            <p>Time Stamp {blockInfo.timestamp}</p>
            <p>
                Transactions{" "}
                {blockInfo.transactions != undefined
                    ? blockInfo.transactions.length
                    : 0}{" "}
                transactions
            </p>
            <p>Fee Recipient {blockInfo.miner}</p>
            <p>Gas Used {blockInfo.gasUsed}</p>
            <p>Gas Limit {blockInfo.gasLimit}</p>
            <p>Base Fee Per Gas {blockInfo.baseFeePerGas} Wei</p>
            <p>Extra Data {blockInfo.extraData}</p>
            <p>Hash {blockInfo.hash}</p>
            <p>Parent Hash {blockInfo.hash}</p>
            <p>Nonce {blockInfo.nonce}</p>
            <p>Difficulty {blockInfo.difficulty}</p>
        </section>
    );
}

export default Block;
