import { Component } from "react";
import "./TechStack.scss";
import type { TechStack as Stack } from "../../../models/TechStack";
import type { TechIcon } from "../../../models/Icon";
import { SkillIcon } from "./SkillIcon";

interface Props {
    techStack: Stack;
    className?: string;
}

export class TechStack extends Component<Props> {
    render() {
        return (
            <section className={`tech-stack ${this.props.className}`}>
                <h2>🛠 Tech Stack</h2>
                <div className="tech-stack-content">
                    <TechCard title="Languages" items={this.props.techStack.languages} />
                    <TechCard title="Frameworks" items={this.props.techStack.frameworks} />
                    <TechCard title="Tools" items={this.props.techStack.tools} />
                    <TechCard title="Databases" items={this.props.techStack.databases} />
                    <TechCard title="Cloud" items={this.props.techStack.cloud} />
                    <TechCard title="Architectures" items={this.props.techStack.architectures} />
                    <TechCard title="Messaging Protocols" items={this.props.techStack.messagingProtocols} />
                    <TechCard title="Operating Systems" items={this.props.techStack.operatingSystems} />
                    <TechCard title="DevOps" items={this.props.techStack.devops} />
                    <TechCard title="Testing" items={this.props.techStack.testing} />
                    <TechCard title="Platforms" items={this.props.techStack.platforms} />
                </div>
            </section>
        );
    }
}

class TechCard extends Component<{ title: string; items: TechIcon[] }> {
    render() {
        return (
            <div className="tech-group">
                <h3>{this.props.title}</h3>
                {
                    this.props.items.length > 0 ? (
                        <div className="skill-icons">
                            {this.props.items.map((item) => (
                                <Skill key={item.id} icon={item} />
                            ))}
                        </div>
                    ) : <> </>
                }
            </div>
        );
    }
}

class Skill extends Component<{ icon: TechIcon }> {
    render() {
        return (
            <div className="skill">
                <SkillIcon icon={this.props.icon} />
                <span className="skill-name">{this.props.icon.name}</span>
            </div>
        );
    }
}
