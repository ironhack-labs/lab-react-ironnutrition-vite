// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = e => {
		setSearchTerm(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<>
			<Divider>Search</Divider>

			<label>Search</label>
			<Input
				name='search'
				value={searchTerm}
				type='text'
				onChange={handleSearch}
			/>
		</>
	);
}

export default Search;
