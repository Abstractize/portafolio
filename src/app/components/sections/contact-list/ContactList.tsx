import { Component } from "react";
import { ContactCard } from "../../cards";
import type { Contact } from "../../../models/Contact";
import "./ContactList.scss";


interface Props {
    contactList: Contact[];
    className?: string;
}

export class ContactList extends Component<Props> {
    render() {
        if (!this.props.contactList || this.props.contactList.length === 0) {
            return <></>;
        }
        return (
            <section className={`contact-list ${this.props.className}`}>
                <h2>📝 Contact</h2>
                <p>
                    Interested in collaborating or just want to say hi? Feel free to reach out!
                </p>
                <p>Feel free to connect with me:</p>
                <div style={{ display: "flex", gap: "1rem" }}>
                    {this.props.contactList.map((contact, index) => (
                        <ContactCard
                            key={index}
                            iconSrc={contact.iconSrc}
                            label={contact.label}
                            url={contact.url}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
