import { useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import ETHERSCAN_LOGO from "../assets/images/etherscan-logo-circle.png";

function Header() {
    const [address, setAddress] = useState("");
    const history = useHistory();

    function handleOnSubmit(event) {
        event.preventDefault();
        const { location } = history;

        // * if it is not the similar path only then push a new path. It helps to prevent duplicate paths.
        if (location.pathname != `/address/${address}`) {
            history.push(`/address/${address}`);
        }

        setAddress("");
    }

    return (
        <header className="flex px-24 py-6 bg-white items-center border-b">
            <Link to="/">
                <img src={ETHERSCAN_LOGO} className="h-10"></img>
            </Link>
            <h1 className="ml-4 text-[#21325B] font-bold text-2xl mr-auto">
                <Link to="/">Etherscan Clone</Link>
            </h1>
            <form className="w-5/12 ml-4" onSubmit={handleOnSubmit}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block text-gray-900 w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search addresses..."
                        required
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Search
                    </button>
                </div>
            </form>
        </header>
    );
}

export default Header;
