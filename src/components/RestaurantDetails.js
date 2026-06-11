import React, { useMemo, useEffect } from 'react';
import { useParams } from 'react-router';
import restaurents from '../utils/restaurents';
import './RestaurantDetails.scss';

const RestaurantDetails = () => {
    const { restaurantId } = useParams();
    console.log('restaurantId', restaurantId);
    const id = Number(restaurantId) || 1;

    const restaurant = restaurents.find(r => r.id === id) || restaurents[0];

    // useEffect(() => {
    //     fetchRestaurantDetails();
    // },[]);

    // const fetchRestaurantDetails = async () => {
    //     try {
    //         const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=187384&catalog_qa=undefined&submitAction=ENTER");
    //         const data = await response?.json();
    //         console.log("Restaurant details data", data);
    //     } catch (error) {
    //         console.log("Error fetching restaurant details:", error);
    //     }
    // };

    const menu = useMemo(() => {
        return [
            {
                category: 'Starters',
                items: [
                    { id: 's1', name: `${restaurant.name} Crispy Bites`, desc: 'Lightly spiced, crunchy', price: '₹129', veg: true },
                    { id: 's2', name: 'Paneer Tikka', desc: 'Charred cottage cheese', price: '₹169', veg: true }
                ]
            },
            {
                category: 'Mains',
                items: [
                    { id: 'm1', name: `${restaurant.name} Biryani`, desc: 'Aromatic long-grain biryani', price: '₹299', veg: false },
                    { id: 'm2', name: 'Butter Chicken', desc: 'Creamy tomato-based curry', price: '₹279', veg: false }
                ]
            },
            {
                category: 'Sides',
                items: [
                    { id: 'si1', name: 'Raita', desc: 'Cooling yogurt dip', price: '₹49', veg: true },
                    { id: 'si2', name: 'Naan', desc: 'Soft butter naan', price: '₹39', veg: true }
                ]
            },
            {
                category: 'Desserts & Beverages',
                items: [
                    { id: 'd1', name: 'Gulab Jamun', desc: 'Syrupy warm dumplings', price: '₹89', veg: true },
                    { id: 'd2', name: 'Masala Chai', desc: 'Spiced Indian tea', price: '₹39', veg: true }
                ]
            }
        ];
    }, [restaurant.name]);

    return (
        <div id="restaurant-details" className="container">
            <section className="hero">
                <img className="hero-image" src={restaurant.imageUrl} alt={restaurant.name} />
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="name">{restaurant.name}</h1>
                        <p className="meta">{restaurant.cuisines.join(' • ')} • {restaurant.deliveryTime} • {restaurant.costForTwo}</p>
                        <p className="desc">{restaurant.offer} — {restaurant.isExpressDelivery ? 'Express Delivery' : 'Standard Delivery'}</p>
                    </div>
                </div>
            </section>

            <section className="about">
                <h2>About</h2>
                <p>Enjoy delicious {restaurant.cuisines.slice(0,2).join(' and ')} preparations made fresh. Highly rated for taste and timely deliveries.</p>
            </section>

            <section className="menu">
                <h2>Menu</h2>
                {menu.map(cat => (
                    <div className="category" key={cat.category}>
                        <h3 className="category-title">{cat.category}</h3>
                        <ul className="items-list">
                            {cat.items.map(item => (
                                <li className="item" key={item.id}>
                                    <div className="item-left">
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-desc">{item.desc}</div>
                                        <div className="item-meta">{item.price} {item.veg ? <span className="veg">• Veg</span> : <span className="nonveg">• Non-veg</span>}</div>
                                    </div>
                                    <div className="item-right">
                                        <button className="add-btn">Add</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default RestaurantDetails;