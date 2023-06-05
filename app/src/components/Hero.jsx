import { HeroStyled } from "./styles/Hero.styled";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="hero-img"><img src="/images/illustration-devices.svg" alt="illustration devices" /></div>
            <div className="card">
                <div className="new-feature">
                    <span className="new">new</span>
                    <span>Monograph Dashboard</span>
                </div>
                <div className="title">
                    <h1>Powerful insights into your team</h1>
                    <p>Project planning and time tracking for agile teams</p>
                </div>
                <div className="cta">
                    <button>Schedule a demo</button>
                    <span>to see a live preview</span>
                </div>
            </div>
        </HeroStyled>
    )
}