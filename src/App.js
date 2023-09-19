import { useState } from "react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import SearchImages from "./components/api";

function App() {

    const [images, setImages] = useState([])
    const [isSearched, setIsSearched] = useState(false);

    const handleSubmit = async (search) => {
        try {
            const result = await SearchImages(search);
            setImages(result);
            setIsSearched(true);
        } catch (error) {
            setIsSearched(false)
            console.error("Error")
            alert("Oops!")
        }
    }

    setTimeout(() => setIsSearched(false), 500);

    console.log(isSearched)

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} rendered={isSearched} />
            <Carousel images={images} rendered={isSearched} />
        </div>
    )
};


export default App;