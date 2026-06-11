const ShimmerCard = () => {
    return (
        <article className="restaurant-card shimmer-card">
            <div className="card-image">
                <div className="skeleton-image"></div>
                <div className="skeleton-badge"></div>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <div className="skeleton-text skeleton-title"></div>
                    <div className="skeleton-rating"></div>
                </div>
                <div className="skeleton-text skeleton-cuisine"></div>
                <div className="card-meta">
                    <div className="skeleton-text skeleton-meta"></div>
                    <div className="skeleton-text skeleton-meta"></div>
                </div>
            </div>
        </article>
    );
}

export default ShimmerCard;