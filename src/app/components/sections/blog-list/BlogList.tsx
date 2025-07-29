import { Component } from "react";
import type { BlogPost } from "../../../models/BlogPost";
import "./BlogList.scss";

interface Props {
    blogPosts: BlogPost[];
    className?: string;
}

export class BlogList extends Component<Props> {
    render() {
        if (!this.props.blogPosts || this.props.blogPosts.length === 0) {
            return <></>;
        }
        return (
            <section className={`blog-list ${this.props.className}`}>
                <h2>📝 Blog</h2>
                <ul>
                    {this.props.blogPosts.map((post, index) => (
                        <li key={index}>
                            <a href={post.url} target="_blank">
                                {post.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}