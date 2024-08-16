import React, { useState, useContext } from 'react';
import './SearchPage.css';
import { StoreContext } from "../../context/StoreContext";
import FoodItems from '../FoodItems/FoodItems';

const SearchPage = () => {
    const [searchTermByName, setSearchTermByName] = useState('');
    const [searchTermByDescription, setSearchTermByDescription] = useState('');

    // Get the food_list from StoreContext
    const { food_list } = useContext(StoreContext);

    // Filter the food_list based on search terms
    const filteredData = food_list.filter(item =>
        (searchTermByName === '' || item.name.toLowerCase().includes(searchTermByName.toLowerCase())) &&
        (searchTermByDescription === '' || item.description.toLowerCase().includes(searchTermByDescription.toLowerCase()))
    );

    return (
        <div className="search-page">
            <h1>Search Page</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Name..."
                    value={searchTermByName}
                    onChange={(e) => setSearchTermByName(e.target.value)}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Search by Description Keywords..."
                    value={searchTermByDescription}
                    onChange={(e) => setSearchTermByDescription(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="food-items-container">
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <FoodItems
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
