import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
    return (
        <div className="border-b-4 border-green-700 text-end fixed top-0 bg-green-600 font-bond w-full text-lg text-white">
            <ul>
                <li className="inline-block py-4">
                    <Link to="/" className="pl-6 pr-8">
                        Home
                    </Link>
                </li>
                <li className="inline-block py-4">
                    <Link to="/about" className="pl-6 pr-8">
                        About
                    </Link>
                </li>
                <li className="inline-block py-4">
                    <Link to="/articles" className="pl-6 pr-8">
                        Articles
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
