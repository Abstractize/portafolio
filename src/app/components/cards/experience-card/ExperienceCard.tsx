import { Component } from "react";
import { HtmlRenderer } from "../../utils";

interface Props {
    title: string;
    date: string;
    htmlDescription: string;
}

export class ExperienceCard extends Component<Props> {
    render() {
        const { title, date, htmlDescription } = this.props;

        return (
            <div className="experience-card">
                <h3>{title}</h3>
                <span>{date}</span>
                <HtmlRenderer html={htmlDescription} />
            </div>
        );
    }
}
