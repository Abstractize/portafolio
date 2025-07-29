import { Component } from "react";

import "./CertificationBadge.scss";

type Props = {
    emoji: string;
    name: string;
    url: string;
};

export class CertificationBadge extends Component<Props> {
    render() {
        const { emoji, name, url } = this.props;
        return (
            <a href={url} className="cert-badge" target="_blank">
                {emoji} {name}
            </a>
        );
    }
}
