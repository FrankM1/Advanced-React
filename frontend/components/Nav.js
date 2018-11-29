import Link from "next/link";
import NavStyle from "./styles/NavStyles";

const Nav = () => (
    <NavStyle>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
    </NavStyle>
);

export default Nav;