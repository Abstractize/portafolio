import type { BlogPost } from "./BlogPost";
import type { Certification } from "./Certification";
import type { Contact } from "./Contact";
import type { Experience } from "./Experience";
import type { Project } from "./Project";
import type { TechStack } from "./TechStack";
import type { Testimonial } from "./Testimonial";

export interface Curriculum {
    name: string;
    description: string;
    techStack: TechStack;
    projectList: Project[];
    contactList: Contact[];
    experienceList: Experience[];
    testimonials: Testimonial[];
    certifications: Certification[];
    blogPosts: BlogPost[];
}