import Hero from "./Hero";
import Navigation from "./Navigation";
import { MainContainerStyled } from "./styles/MainContainer.styled";

export default function MainContainer() {
    return (
        <MainContainerStyled>
            <Navigation />
            <Hero />
        </MainContainerStyled>
    )
}