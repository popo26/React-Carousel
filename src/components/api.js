import axios from "axios";

const SearchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_ACCESS_KEY}`
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
}



export default SearchImages;