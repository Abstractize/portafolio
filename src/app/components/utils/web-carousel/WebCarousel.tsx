import { Component } from "react";
import "./WebCarousel.scss";

interface WebCarouselProps {
    images: string[];
    url: string;
}

interface WebCarouselState {
    currentImage: number;
}

export class WebCarousel extends Component<WebCarouselProps, WebCarouselState> {
    state: WebCarouselState = {
        currentImage: 0,
    };

    onPrev = () => {
        this.setState((prevState) => ({
            currentImage:
                prevState.currentImage === 0
                    ? this.props.images.length - 1
                    : prevState.currentImage - 1,
        }));
    };

    onNext = () => {
        this.setState((prevState) => ({
            currentImage:
                prevState.currentImage === this.props.images.length - 1
                    ? 0
                    : prevState.currentImage + 1,
        }));
    };

    render() {
        const { images } = this.props;
        const { currentImage } = this.state;

        return (
            <div className="web-carousel">
                <div className="browser-mockup">
                    <div className="browser-toolbar">
                        <span className="circle red" />
                        <span className="circle yellow" />
                        <span className="circle green" />
                        <div className="browser-url">{this.props.url}</div>
                    </div>
                    <div className="browser-screen">
                        <img
                            src={images[currentImage]}
                            alt={`Screenshot ${currentImage + 1}`}
                            className="browser-image"
                        />
                    </div>
                </div>

                <div className="carousel-controls">
                    <button className="carousel-btn" onClick={this.onPrev}>‹</button>
                    <span className="carousel-indicator">
                        {currentImage + 1} / {images.length}
                    </span>
                    <button className="carousel-btn" onClick={this.onNext}>›</button>
                </div>
            </div>
        );
    }
}