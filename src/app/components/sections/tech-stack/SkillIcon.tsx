import { useState, useEffect } from "react";
import type { TechIcon } from "../../../models/Icon";

import "./TechStack.scss";

export function SkillIcon({ icon }: { icon: TechIcon }) {
    const [theme, setTheme] = useState(() => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        return current === "light" ? "dark" : "light";
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const current = document.documentElement.getAttribute("data-theme") || "light";
            const inverted = current === "light" ? "dark" : "light";
            setTheme(inverted);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const iconSrc = icon.iconUrl
        ? icon.iconUrl
        : `https://skillicons.dev/icons?i=${icon.id}&theme=${theme}`;

    if (icon.displayAbbreviation) {
        return (
            <div
                className="skill-text-icon"
                title={icon.name}
                onClick={() => window.open(icon.redirectUrl, "_blank")}
            >
                {icon.displayAbbreviation}
            </div>
        );
    }

    return (
        <img
            src={iconSrc}
            alt={`Icon for ${icon.name}`}
            title={icon.name}
            className="skill-icon"
            onClick={() => window.open(icon.redirectUrl, "_blank")}
            onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(0.85)")}
            onMouseOut={(e) => (e.currentTarget.style.filter = "")}
        />
    );
}