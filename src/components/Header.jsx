import { Link } from "react-router-dom";

import ETHERSCAN_LOGO from "../assets/images/etherscan-logo-circle.png";

function Header() {
    return (
        <header className="flex px-24 py-6 bg-white items-center border-b">
            <Link to="/">
                <img src={ETHERSCAN_LOGO} className="h-10"></img>
            </Link>
            <Link to="/">
                <h1 className="ml-4 text-[#21325B] font-bold text-2xl">
                    Etherscan Clone
                </h1>
            </Link>
            <Link to="/" className="ml-auto text-[#21325B] font-bold text-xl">
                HOME
            </Link>
        </header>
    );
}

export default Header;
