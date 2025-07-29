import { Component } from "react";
import "./PhoneCarousel.scss";

interface PhoneCarouselProps {
    images: string[];
}

interface PhoneCarouselState {
    currentImage: number;
}

export class PhoneCarousel extends Component<PhoneCarouselProps, PhoneCarouselState> {
    state: PhoneCarouselState = {
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
            <div className="phone-carousel">
                <div className="phone-mockup">
                    <div className="phone-notch" />
                    <div className="phone-screen">
                        <img
                            src={images[currentImage]}
                            alt={`Screenshot ${currentImage + 1}`}
                            className="phone-image"
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