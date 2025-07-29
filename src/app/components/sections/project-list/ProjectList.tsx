import { Component } from "react";
import { ProjectCard } from "../../cards";
import type { Project } from "../../../models/Project";

interface ProjectListProps {
    projectList: Project[];
    className?: string;
}

export class ProjectList extends Component<ProjectListProps> {
    render() {
        if (!this.props.projectList || this.props.projectList.length === 0) {
            return <></>;
        }
        return (
            <section className={`project-list-section ${this.props.className}`}>
                <h2>Projects</h2>
                <p>Below are selected projects that demonstrate my skills and expertise.</p>

                <div className="project-list">
                    {this.props.projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </section>
        );
    }
}