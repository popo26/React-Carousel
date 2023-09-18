import { useState } from "react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import SearchImages from "./components/api";

function App() {

    const [images, setImages] = useState([])

    const handleSubmit = async (search) => {
        const result = await SearchImages(search);
        console.log(result);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <Carousel images={images} />
        </div>
    )
};


export default App;