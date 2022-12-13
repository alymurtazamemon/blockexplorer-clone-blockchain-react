import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Main({ blockNumber }) {
    const [blocksList, setBlocksList] = useState(<div>Loading...</div>);

    useEffect(() => {
        if (blockNumber) {
            const listofLinks = [];

            for (let i = 0; i < 20; i++) {
                listofLinks.push(
                    <div key={blockNumber - i}>
                        <Link to={`/block/${blockNumber - i}`}>
                            {blockNumber - i}
                        </Link>
                        <br />
                    </div>
                );
            }

            setBlocksList(listofLinks);
        }
    }, [blockNumber]);

    return blocksList;
}

export default Main;
