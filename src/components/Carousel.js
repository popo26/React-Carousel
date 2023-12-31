import { useState, useEffect } from "react";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";

function Carousel({ images, rendered }) {

    const defaultImages = [one, two, three];

    const [image, setImage] = useState(defaultImages[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (rendered && images.length === 0) {
            setImage(defaultImages[0]);
            alert("No result retrived");
        } else if (rendered) {
            setImage(images[0].urls.regular);
        };
    }, [rendered]);


    const handlePrev = () => {
        const newIndex = index - 1;
        if (images.length === 0) {
            images = defaultImages;
            setIndex(newIndex < 0 ? images.length - 1 : newIndex);
            setImage(newIndex < 0 ? images[images.length - 1] : images[newIndex])
        } else {
            setIndex(newIndex < 0 ? images.length - 1 : newIndex);
            setImage(newIndex < 0 ? images[images.length - 1].urls.regular : images[newIndex].urls.regular)
        }
    };


    const handleNext = () => {
        const newIndex = index + 1;
        if (images.length === 0) {
            images = defaultImages;
            setIndex(newIndex >= images.length ? 0 : newIndex);
            setImage(newIndex >= images.length ? images[0] : images[newIndex])
        } else {
            setIndex(newIndex >= images.length ? 0 : newIndex);
            setImage(newIndex >= images.length ? images[0].urls.regular : images[newIndex].urls.regular)
        }
    };


    return (
        <div className="slideshow-container">

            <div className="mySlides">
                <img className="photo" src={image} alt="img" />
                <div className="text"></div>
            </div>

            <a className="prev" onClick={handlePrev}>❮</a>
            <a className="next" onClick={handleNext}>❯</a>
        </div>

    )
};

export default Carousel;