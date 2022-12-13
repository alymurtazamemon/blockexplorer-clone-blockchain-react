import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import alchemy from "../utils/alchemy";
import { ethers } from "ethers";

function Transaction() {
    const [txDetails, setTxDetails] = useState(<div>Loading...</div>);
    const { hash } = useParams();

    useEffect(() => {
        async function getTransaction() {
            const info = await alchemy.core.getTransactionReceipt(hash);

            setTxDetails(
                <div>
                    <p>Transaction Hash {info.transactionHash}</p>
                    <p>
                        Block Number {info.blockNumber} {info.confirmations}{" "}
                        Block Confirmations
                    </p>
                    <p>Block Hash {info.blockHash}</p>
                    <p>From {info.from}</p>
                    <p>To {info.to}</p>
                    <p>
                        Gas Limit & Usage by Txn {info.gasUsed.toString()} |
                        21000{" "}
                    </p>
                    <p>
                        Gas Price{" "}
                        {info.effectiveGasPrice.toString() / 1000000000} Gwei
                    </p>
                </div>
            );
        }

        getTransaction();
    }, []);

    return txDetails;
}

export default Transaction;
