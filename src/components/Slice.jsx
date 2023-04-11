import React, { Component } from "react";

class slice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      images: [
        "https://images.pexels.com/photos/2017752/pexels-photo-2017752.jpeg",
        "https://images.pexels.com/photos/979729/pexels-photo-979729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1305235/pexels-photo-1305235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      ],
    };
  }

  handleNext = () => {
    const { currentSlide, images } = this.state;
    const totalSlides = images.length;
    const nextSlide = (currentSlide + 1) % totalSlides; 
    this.setState({
      currentSlide: nextSlide,
    });
  };

  handleBack = () => {
    const { currentSlide, images } = this.state;
    const totalSlides = images.length;
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    this.setState({
      currentSlide: prevSlide,
    });
  };

  render() {
    const { currentSlide, images } = this.state;
    const currentImage = images[currentSlide];

    return (
      <div className="carousel">
        <img className="img-slice" src={currentImage} alt={`Slide ${currentSlide + 1}`} />

        <div className="controls">
          <button onClick={this.handleBack}>Back</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default slice;
