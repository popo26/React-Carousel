import { useState, useEffect } from "react";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";

function Carousel({ images }) {

    const defaultImage = one
    const [image, setImage] = useState(defaultImage);
    const [index, setIndex] = useState(0);

    const handlePrev = () => {

        const newIndex = index - 1;
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
        setImage(newIndex < 0 ? images[images.length - 1].urls.regular : images[newIndex].urls.regular)

        // if (index >= images.length) {
        //     setIndex(0);
        //     setImage(images[0].urls.regular)
        //     // setIndex(9)
        // } else if (index <= 0) {
        //     setIndex(images.length - 1);
        //     setImage(images[9].urls.regular)
        // } else {
        //     setImage(images[index].urls.regular);
        //     setIndex(index - 1)
        // }
        console.log(`Prev (after) Current Index is ${index}`)
    };

    const handleNext = () => {

        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
        setImage(newIndex >= images.length ? images[0].urls.regular : images[newIndex].urls.regular)


        // if (index >= images.length) {
        //     setIndex(1);
        //     setImage(images[0].urls.regular)
        //     // setIndex(1)
        // } else {
        //     setImage(images[index].urls.regular);
        //     setIndex(index + 1)
        // }
        console.log(`Next (after) Current Index is ${index}`)
    };

    const description = images[index].alt_description;

    return (
        <div className="slideshow-container">
            <p>{index}</p>
            <div className="mySlides">
                <img className="photo" src={image} alt="img" />
                <div className="text">{description}</div>
            </div>

            <a className="prev" onClick={handlePrev}>❮</a>
            <a className="next" onClick={handleNext}>❯</a>
        </div>

    )
};

export default Carousel;