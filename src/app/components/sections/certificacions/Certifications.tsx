import { Component } from "react";
import type { Certification } from "../../../models/Certification";
import { CertificationBadge } from "../../cards";
import "./Certifications.scss";

interface Props {
    certifications: Certification[];
    className?: string;
}

export class Certifications extends Component<Props> {
    render() {
        if (!this.props.certifications || this.props.certifications.length === 0) {
            return <></>;
        }
        return (
            <section className={`certifications ${this.props.className}`}>
                <h2>📜 Certifications</h2>
                <ul className="certification-list">
                    {this.props.certifications.map((certification, index) => (
                        <li key={index}>
                            <CertificationBadge
                                emoji={certification.emoji}
                                name={certification.label}
                                url={certification.url}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
