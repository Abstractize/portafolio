import { Component } from "react";
import "./LandingHero.scss";

interface LandingHeroProps {
    name: string;
    description: string;
    className?: string;
}

export class LandingHero extends Component<LandingHeroProps> {
    render() {
        return (
            <div className={`landing-hero ${this.props.className}`}>
                <h1>👋 Hi, I'm {this.props.name}</h1>
                <p>
                    {this.props.description}
                </p>
            </div>
        );
    }
}
