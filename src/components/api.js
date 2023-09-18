import axios from "axios";

const SearchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID V1TDgoOjCcZiFMAUR2CX6LWcxgrTmsKn23munQPZZVc',
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
}



export default SearchImages;