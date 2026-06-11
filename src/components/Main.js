import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerUI";
import { Link } from "react-router";

const MainContainer = () => {

    const [masterListOfRestaurents, setMasterListOfRestaurents] = useState([]);
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        
        try {
            const response = await fetch("https://corsproxy.io/?url=" + encodeURIComponent(apiUrl));
            // const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("swiggy data", data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setListOfRestaurents(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setMasterListOfRestaurents(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    const showTopRatedRestaurants = () => {
        const filteredData = masterListOfRestaurents.filter(restaurant => restaurant.avgRating >= 4.0);
        setListOfRestaurents(filteredData);
    }

    const triggerSearch = () => {
        console.log('listOfRestaurents', listOfRestaurents);
        const filteredData = masterListOfRestaurents.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log('filteredData', filteredData);
        setListOfRestaurents(filteredData);
    }

    return (
        <main id="main-container">
            <section className="hero-banner">
                <div>
                    <h2>Hungry?</h2>
                    <p>Explore top restaurants, fast delivery, and great offers near you.</p>
                </div>
                <div className="search-card">
                    <input type="text" placeholder="Search for restaurants or dishes" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button onClick={()=> { 
                        if(searchText.trim().length > 0) {
                            triggerSearch();
                        } else {
                            setListOfRestaurents(masterListOfRestaurents);
                        }
                    }}>Search</button>
                    <button className="top-rated-btn" onClick={()=> showTopRatedRestaurants()} aria-label="Top rated restaurants">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                    </button>
                </div>
            </section>
            <section className="restaurant-list">
                {
                    listOfRestaurents.length === 0 ? (
                        <React.Fragment>
                            {Array(10).fill("").map((_, index) => (
                                <ShimmerCard key={index} />
                            ))}
                        </React.Fragment>
                    ) : (
                        listOfRestaurents.map((restaurant) => (
                            <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                                <RestaurantCard restaurant={restaurant.info} key={restaurant.info.id} />
                            </Link>
                        ))
                    )
                }
            </section>
        </main>
    );
}

export default MainContainer;