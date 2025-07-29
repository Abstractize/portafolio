import { Component } from "react";
import { ExperienceCard } from "../../cards/";

import "./ExperienceTimeline.scss";
import type { Experience } from "../../../models/Experience";

interface Props {
    experienceList: Experience[];
    className?: string;
}

export class ExperienceTimeline extends Component<Props> {
    render() {
        if (!this.props.experienceList || this.props.experienceList.length === 0) {
            return <></>;
        }
        return (
            <section className={`experience-timeline ${this.props.className}`}>
                <h2>💼 Experience & 🎓 Education</h2>
                <div className="experience-timeline-content">
                    <ul>
                        {this.props.experienceList?.map((experience, index) => (
                            <li className="exp-li" key={index}>
                                <ExperienceCard
                                    title={experience.title}
                                    date={experience.date}
                                    htmlDescription={experience.htmlDescription}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}