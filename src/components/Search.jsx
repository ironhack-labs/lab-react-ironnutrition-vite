import { Divider, Input } from "antd";
const Search = props => {

    const handleSearch = event => {
        props.searchedFoods(event.target.value)
    }
        return (
            <form>
                <Divider>Search</Divider>
                <Input className="search-input" type="text" placeholder="Search" value={props.searchValue} onChange={handleSearch} />
            </form>
        )
}

export default Search;