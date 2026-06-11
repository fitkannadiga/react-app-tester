const RestaurantCard = ({ restaurant }) => {
    return (
        <article className="restaurant-card" key={restaurant.id}>
            <div className="card-image">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} alt={restaurant.name}/>
                {
                    restaurant.aggregatedDiscountInfoV3?.header && (
                        <span className="badge">{restaurant.aggregatedDiscountInfoV3?.header}</span>
                    )
                }
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{restaurant.name}</h3>
                    <span className="rating">{restaurant.avgRating}</span>
                </div>
                <p className="cuisine">{restaurant.cuisines.join(" • ")}</p>
                <div className="card-meta">
                    <span>{restaurant.sla?.slaString}</span>
                    <span>{restaurant.costForTwo}</span>
                </div>
            </div>
        </article>
    );
}

export default RestaurantCard;