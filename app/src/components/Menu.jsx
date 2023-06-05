/* eslint-disable react/prop-types */
import { MenuStyled } from "./styles/Menu.styled";

export default function Menu({ open }) {
    return (
        <MenuStyled open={open}>

            <div className="links">
                <a href="#">Product</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <hr />
                <a className="login" href="#">Login</a>
            </div>

        </MenuStyled>
    )
}