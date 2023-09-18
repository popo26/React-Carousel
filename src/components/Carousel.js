import { useState, useEffect } from "react";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";

function Carousel({ images }) {

    const imagesArray = [
        one,
        two,
        three
    ]

    const [image, setImage] = useState(imagesArray[0]);
    const [index, setIndex] = useState(0);

    // useEffect(() => {

    // }, [])

    const handlePrev = () => {
        console.log(`Prev Current Index is ${index}`)
       
       setIndex(index -1)

        if (index === images.length) {
            setIndex(0);
            setImage(images[0].urls.regular)
            setIndex(9)
        } else if (index === 0) {
            setIndex(images.length - 1);
            setImage(images[index].urls.regular)
        } else if (index === -1) {
            setIndex(images.length - 1);
            setImage(images[index].urls.regular)
        } else {
            setImage(images[index].urls.regular);
            setIndex(index - 1)
        }
        console.log(`Prev (after) Current Index is ${index}`)
    };

    const handleNext = () => {
        console.log(`Next Current Index is ${index}`)

        // if (index < images.length && index > 0) {
        //     setIndex(index + 1);
        // }


        if (index === images.length) {
            setIndex(0);
            setImage(images[0].urls.regular)
            setIndex(1)
        } else {
            setImage(images[index].urls.regular);
            console.log(`current index ${index}`)
            setIndex(index + 1)
            console.log(index + 1)
        }
        console.log(`Next (after) Current Index is ${index}`)

    };

    return (

        <div className="slideshow-container">

            <div className="mySlides">
                <img className="photo" src={image} alt="img" />
                <div className="text">Caption Text</div>
            </div>

            <a className="prev" onClick={handlePrev}>❮</a>
            <a className="next" onClick={handleNext}>❯</a>
        </div>

    )
};

export default Carousel;