import React, { useState } from 'react';
import dish1 from '../assets/images/dish1.jpg';
import dish2 from '../assets/images/dish2.jpg';
import dish3 from '../assets/images/dish3.jpg';
import hero from '../assets/images/hero.jpg';
import fishburger from '../assets/images/fishburger.jpg';
import baconcheeseburger from '../assets/images/baconcheeseburger.jpg';
import beefburger from '../assets/images/beefburger.jpg';
import veggiepizza from '../assets/images/veggiepizza.jpg';
import cheesepizza from '../assets/images/cheesepizza.jpg';
import icecream from '../assets/images/icecream.webp';
import chocolatecake from '../assets/images/chocolatecake.jpg';

function Home() {
    const [activeCategory, setActiveCategory] = useState('All');

    const menuItems = [
        { id: 1, name: 'Fish Burger', image: fishburger, category: 'Burger', isNew: false },
        { id: 2, name: 'Bacon Cheeseburger', image: baconcheeseburger, category: 'Burger', isNew: true },
        { id: 3, name: 'Beef Burger', image: beefburger, category: 'Burger', isNew: false },
        { id: 4, name: 'Veggie Pizza', image: veggiepizza, category: 'Pizza', isNew: false },
        { id: 5, name: 'Cheese Pizza', image: cheesepizza, category: 'Pizza', isNew: false },
        { id: 6, name: 'Ice Cream', image: icecream, category: 'Dessert', isNew: true },
        { id: 7, name: 'Chocolate Cake', image: chocolatecake, category: 'Dessert', isNew: false },
    ];

    const categories = ['All', 'Burger', 'Pizza', 'Dessert'];

    const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="home">
            {/* Hero Section */}
            <div className="container" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px', borderRadius: '8px', color: '#fff' }}>
                <div className="content">
                    <h1>Discover the Real FOOD</h1>
                    <p>
                        At FlavorWave, we believe in the art of culinary perfection. Each dish we serve is crafted with passion, using only the finest ingredients to create an unforgettable dining experience. Whether you're here for a quick bite or a leisurely meal, we invite you to discover the authentic flavors that have made us a favorite among food enthusiasts.
                    </p>
                    <a href="#menu" className="btn btn-warning">GO</a>
                    <a href="#more-info" className="btn btn-outline-light ms-3">OR MORE INFO</a>
                </div>
            </div>

            {/* Original Menu Section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={dish1} className="card-img-top" alt="Dish 1" />
                            <div className="card-body">
                                <h5 className="card-title">Signature Dishes</h5>
                                <p className="card-text">Experience our chef's signature creations, blending traditional flavors with modern twists.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={dish2} className="card-img-top" alt="Dish 2" />
                            <div className="card-body">
                                <h5 className="card-title">Seasonal Ingredients</h5>
                                <p className="card-text">We use fresh, seasonal ingredients to ensure every bite bursts with flavor and quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={dish3} className="card-img-top" alt="Dish 3" />
                            <div className="card-body">
                                <h5 className="card-title">Gourmet Experience</h5>
                                <p className="card-text">Join us for a gourmet dining experience where every detail is crafted to perfection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categorized Menu Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Restaurant Menu</h2>
                <div className="d-flex justify-content-center mb-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`btn me-2 ${category === activeCategory ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="row">
                    {filteredItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.name} style={{ objectFit: 'cover', height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    {item.isNew && <span className="badge bg-success">New</span>}
                                    <p className="card-text">Adipiscing commodo elit at imperdiet. Ipsum nunc aliquet bibendum enim facilisis gravida.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
