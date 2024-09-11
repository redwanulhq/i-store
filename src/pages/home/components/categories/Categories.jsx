import "./Categories.css";

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories-container">
                    <div className="category-box c-style1">
                        <img
                            src="https://img.freepik.com/free-photo/stylish-young-women-posing-neon-light_136403-1112.jpg?size=626&ext=jpg&ga=GA1.2.1163962682.1634570051"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1>Women's</h1>
                            <h2>Collection</h2>
                            <button className="category-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="category-box c-style1">
                        <img
                            src="https://img.freepik.com/free-photo/handsome-bearded-hipster-man-wearing-round-sunglasses-isolated-blue-light-space_264277-229.jpg?size=626&ext=jpg&ga=GA1.2.1163962682.1634570051"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info right">
                            <h1>Men's</h1>
                            <h2>Collection</h2>
                            <button className="category-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="category-box c-style2">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0049/2856/9434/files/banner-03_1024x.jpg?v=1551774235"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1>sale</h1>
                            <h2>Up to 40% off</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
