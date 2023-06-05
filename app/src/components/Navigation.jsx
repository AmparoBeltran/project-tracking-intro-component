import { useState } from "react";
import { NavigationStyled } from "./styles/Navigation.styled";
import Menu from "./Menu";

export default function Navigation() {
    const [open, setOpen] = useState(false)

    function handleMenuBtn() {
        setOpen((current) => !current)
    }
    return (
        <NavigationStyled>
            <div className="background"></div>
            <div className="wrapper">
                <div><img src="/images/logo.svg" alt="logo" /></div>
                <button onClick={handleMenuBtn}><img src={`/images/icon-${open ? 'close' : 'hamburger'}.svg`} alt="open-menu" /></button>
                <Menu open={open} />
            </div>

        </NavigationStyled>
    )
}