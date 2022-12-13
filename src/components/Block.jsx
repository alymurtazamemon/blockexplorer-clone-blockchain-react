import alchemy from "../utils/alchemy";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Block() {
    const [blockInfo, setBlockInfo] = useState(<div>Loading...</div>);
    const { blockNumber } = useParams();

    useEffect(() => {
        async function getBlockInformation() {
            const info = await alchemy.core.getBlockWithTransactions(
                Number(blockNumber)
            );
            console.log(info);
            setBlockInfo(
                <section>
                    <p>Block {info.number}</p>
                    <p>Time Stamp {info.timestamp}</p>
                    <p>
                        Transactions{" "}
                        <Link to={`/txs?block=${info.number}`}>
                            {info.transactions != undefined
                                ? info.transactions.length
                                : 0}
                            {" transactions"}
                        </Link>
                    </p>
                    <p>Fee Recipient {info.miner}</p>
                    <p>Gas Used {info.gasUsed.toString()}</p>
                    <p>Gas Limit {info.gasLimit.toString()}</p>
                    <p>
                        Base Fee Per Gas{" "}
                        {info.baseFeePerGas.toString() / 1000000000} Gwei
                    </p>
                    <p>Extra Data {info.extraData}</p>
                    <p>Hash {info.hash}</p>
                    <p>Parent Hash {info.hash}</p>
                    <p>Nonce {info.nonce}</p>
                    <p>Difficulty {info.difficulty}</p>
                </section>
            );
        }

        getBlockInformation();
    }, []);

    return blockInfo;
}

export default Block;
