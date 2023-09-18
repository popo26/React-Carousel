import { useState } from "react";

function SearchBar({ onSubmit }) {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        onSubmit(search)
        setSearch("");
    }

    return (
        <div className="search-div">
            <form onSubmit={handleClick}>
                <input type="text" name="search" onChange={handleChange} />
                <button>Search</button>
            </form>

        </div>
    )
};

export default SearchBar;