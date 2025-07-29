import { Component } from "react";
import { TestimonialCard } from "../../cards";
import "./Testimonials.scss";
import type { Testimonial } from "../../../models/Testimonial";

interface Props {
    testimonials: Testimonial[];
    className?: string;
}

export class Testimonials extends Component<Props> {
    render() {
        if (!this.props.testimonials || this.props.testimonials.length === 0) {
            return <></>;
        }
        return (
            <section className={`testimonials ${this.props.className}`}>
                <h2>💬 Testimonials & 🏆 Awards</h2>
                {this.props.testimonials?.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        role={testimonial.role}
                        quote={testimonial.quote}
                    />
                ))}
            </section>
        );
    }
}