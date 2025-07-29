import { Component } from "react";
import {
    BlogList,
    Certifications,
    ContactList,
    ExperienceTimeline,
    LandingHero,
    ProjectList,
    TechStack,
    Testimonials
} from "../../components/sections";
import { data } from "../../data";

import "./Landing.scss";

export class Landing extends Component {
    render() {
        return (
            <section className="landing">
                <LandingHero className="hero" name={data.name} description={data.description} />

                <TechStack className="tech-stack" techStack={data.techStack} />
                <ExperienceTimeline className="timeline" experienceList={data.experienceList} />

                <ProjectList className="featured-projects" projectList={data.projectList} />
                <Testimonials className="testimonials" testimonials={data.testimonials} />

                <BlogList className="blog" blogPosts={data.blogPosts} />

                <Certifications className="certifications" certifications={data.certifications} />
                <ContactList className="contact" contactList={data.contactList} />
            </section >
        );
    }
}