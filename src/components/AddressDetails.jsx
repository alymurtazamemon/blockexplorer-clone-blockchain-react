import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useParams, Link } from "react-router-dom";
import alchemy from "../utils/alchemy";

function AddressDetails() {
    const { address } = useParams();
    const [balance, setBalance] = useState("");
    const [loading, setLoading] = useState(true);
    const [externalTxs, setExternalTxs] = useState([]);

    useEffect(() => {
        // * immediatly called function.
        (async () => {
            const balance = await alchemy.core.getBalance(address);
            setBalance(ethers.utils.formatEther(balance).toString());
            const { transfers } = await alchemy.core.getAssetTransfers({
                fromBlock: "0x0",
                fromAddress: address,
                category: ["external"],
                withMetadata: true,
                maxCount: "0x64",
            });
            setExternalTxs(transfers.filter((tx) => tx.category == "external"));
            setLoading(false);
        })();
    }, [address]);

    return loading ? (
        <h1 className="text-center">Loading...</h1>
    ) : (
        <div>
            <div className="bg-white mx-24 px-8 py-4 my-8 border rounded-lg divide-y">
                <h1 className="font-bold">
                    Balance{" "}
                    <span className="ml-4 font-normal">{balance} Ether</span>
                </h1>
            </div>
            <div className="bg-white mx-24 px-8 py-4 my-8 border rounded-lg divide-y">
                <div className="flex py-1 bg-sky-50">
                    <h1 className="w-2/12">Txn Hash</h1>
                    <h1 className="w-1/12">Block</h1>
                    <h1 className="w-3/12">Age</h1>
                    <h1 className="w-2/12">From</h1>
                    <h1 className="w-2/12">To</h1>
                    <h1 className="w-3/12">Value</h1>
                </div>
                {externalTxs.length <= 0 ? (
                    <p className="py-4">No any external transaction found.</p>
                ) : (
                    externalTxs.map((tx, index) => {
                        return (
                            <div key={index} className="flex py-4">
                                <p className="w-2/12 text-[#357BAD]">
                                    <Link to={`/tx/${tx.hash}`}>
                                        {tx.hash.slice(0, 16)}...
                                    </Link>
                                </p>
                                <p className="w-1/12">{Number(tx.blockNum)}</p>
                                <p className="w-3/12">
                                    {tx.metadata.blockTimestamp}
                                </p>
                                <p className="w-2/12">
                                    {tx.from.slice(0, 16)}...
                                </p>
                                <p className="w-2/12 text-[#357BAD]">
                                    <Link to={`/address/${tx.to}`}>
                                        {tx.to.slice(0, 16)}...
                                    </Link>
                                </p>
                                <p className="w-3/12">
                                    {tx.value} {tx.asset}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default AddressDetails;
