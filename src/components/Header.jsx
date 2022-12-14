import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex px-24 py-6 bg-sky-50">
            <h1>Etherscan Clone</h1>
            <Link to="/" className="ml-auto">HOME</Link>
        </header>
    );
}

export default Header;
