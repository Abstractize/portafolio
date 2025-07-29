import { Component } from "react";
import "./ProjectCard.scss";
import type { Project } from "../../../models/Project";
import { HtmlRenderer, PhoneCarousel, WebCarousel } from "../../utils";

interface Props {
    project: Project;
    reverse?: boolean;
}

export class ProjectCard extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { project } = this.props;

        const url: string = project.liveUrl ? project.liveUrl : project.repoUrl ? project.repoUrl : "app.example.com";

        return (
            <div className="project-card">
                <div className={`project-header ${this.props.reverse ? "reverse" : ""}`}>
                    <h3>{project.title}</h3>
                </div>
                <div className={`project-content two-column-layout ${this.props.reverse ? "reverse" : ""}`}>
                    <div className="project-description">
                        <HtmlRenderer html={project.htmlDescription} />
                        <div className="project-links">
                            {project.repoUrl && (

                                <div className="project-link">
                                    <button
                                        onClick={() => window.open(project.repoUrl, "_blank", "noopener,noreferrer")}
                                        type="button"
                                    >
                                        🛠 View Code
                                    </button>
                                </div>
                            )}
                            {project.liveUrl && (
                                <div className="project-link">
                                    <button
                                        onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                                        type="button"
                                    >
                                        🚀 Live Demo
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                    <div>
                        <div className="project-images">
                            <div>
                                {project.webScreenshots && project.webScreenshots.length > 0 && (
                                    <WebCarousel images={project.webScreenshots} url={url} />
                                )}
                            </div>
                            <div className="project-carrousel">
                                {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
                                    <PhoneCarousel images={project.mobileScreenshots} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
