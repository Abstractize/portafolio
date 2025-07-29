import { Component } from "react";
import "./ThemeToggle.scss";

export class ThemeToggle extends Component {
    state = {
        theme: "light",
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        this.setState({ theme: newTheme });
        document.body.setAttribute("data-theme", newTheme);
    };

    render() {
        return (
            <button className="theme-toggle" onClick={this.toggleTheme}>
                🌓 Toggle Theme
            </button>
        );
    }
}
