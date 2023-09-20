import { useState } from "react";
import { Divider, Input } from "antd";

function SearchForFood({ searchFood }) {

    const [searchInput, setSearchInput] = useState("");

    const handleInput = e => {
        setSearchInput(e.target.value);

        console.log("SEARCHED", e.target.value);
        searchFood(e.target.value);
    };

    return (
        <div className="SearchForFood">
            <Divider>Search for Food</Divider>
            <Input
                type="text"
                name="name"
                value={searchInput}
                onChange={handleInput}
            />
        </div>
    );
}

export default SearchForFood;