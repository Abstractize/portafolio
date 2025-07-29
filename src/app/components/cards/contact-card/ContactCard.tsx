import { Component } from "react";
import "./ContactCard.scss";

interface ContactCardProps {
    iconSrc: string;
    label: string;
    url: string;
    alt?: string;
}

export class ContactCard extends Component<ContactCardProps> {
    render() {
        const { iconSrc, label, url, alt } = this.props;

        return (
            <a className="contact-card" href={url} target="_blank" rel="noreferrer">
                <img src={iconSrc} alt={alt ?? label} />
                <span>{label}</span>
            </a>
        );
    }
}