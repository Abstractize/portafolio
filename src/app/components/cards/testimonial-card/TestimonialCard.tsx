import { Component } from "react";
import "./TestimonialCard.scss";

export type Props = {
    name: string;
    role: string;
    quote: string;
};

export class TestimonialCard extends Component<Props> {
    render() {
        const { name, role, quote } = this.props;
        return (
            <div className="testimonial-card">
                <blockquote style={{ fontStyle: "italic", justifyContent: "flex-start" }}>“{quote}”</blockquote>
                <p style={{ textAlign: "right" }}>
                    — <strong>{name}</strong>, {role}
                </p>
            </div>
        );
    }
}
