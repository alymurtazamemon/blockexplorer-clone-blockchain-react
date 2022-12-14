import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../context/DataContext";

function Block() {
    const { blocksData } = useContext(DataContext);
    const { blockNumber } = useParams();
    const info = blocksData.find(
        (blockData) => blockData.number == blockNumber
    );

    return (
        <section>
            <p>Block {info.number}</p>
            <p>Time Stamp {info.timestamp}</p>
            <p>
                Transactions
                <Link to={`/txs?block=${info.number}`}>
                    {info.transactions != undefined
                        ? info.transactions.length
                        : 0}
                    {" transactions"}
                </Link>
            </p>
            <p>Fee Recipient {info.miner}</p>
            <p>Gas Used {info.gasUsed}</p>
            <p>Gas Limit {info.gasLimit}</p>
            <p>Base Fee Per Gas {info.baseFeeInGwei} Gwei</p>
            <p>Extra Data {info.extraData}</p>
            <p>Hash {info.hash}</p>
            <p>Parent Hash {info.hash}</p>
            <p>Nonce {info.nonce}</p>
            <p>Difficulty {info.difficulty}</p>
        </section>
    );
}

export default Block;
