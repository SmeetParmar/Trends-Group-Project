
// /--------------------- SMEET ---------------------/ 

import React, { useState } from 'react';

import avocadotoast from '../assets/images/avocadotoast.jpg';
import tunarolls from '../assets/images/tunarolls.jpg';

import trufflefries from '../assets/images/trufflefries.jpg';
import grilledsalmon from '../assets/images/grilledsalmon.jpg';

import steakfrites from '../assets/images/steakfrites.jpg';
import veganburger from '../assets/images/veganburger.jpg';

import chocolatelava from '../assets/images/chocolatelava.jpg';
import cheesecake from '../assets/images/cheesecake.jpg';
import fruitsorbet from '../assets/images/fruitsorbet.jpeg';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const menuItems = [
    {
      id: 1,
      name: 'Avocado Toast',
      image: avocadotoast,
      category: 'Appetizers',
      description: 'Fresh avocado on toasted sourdough with a sprinkle of chili flakes.',
    },
    {
      id: 2,
      name: 'Spicy Tuna Rolls',
      image: tunarolls,
      category: 'Appetizers',
      description: 'Tuna rolls with a spicy kick, served with soy sauce and pickled ginger.',
    },
    {
      id: 3,
      name: 'Truffle Fries',
      image: trufflefries,
      category: 'Appetizers',
      description: 'Crispy fries tossed in truffle oil and Parmesan cheese.',
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      image: grilledsalmon,
      category: 'Main Courses',
      description: 'Perfectly grilled salmon served with a side of steamed vegetables.',
    },
    {
      id: 5,
      name: 'Steak Frites',
      image: steakfrites,
      category: 'Main Courses',
      description: 'Juicy steak cooked to perfection, served with crispy fries.',
    },
    {
      id: 6,
      name: 'Vegan Burger',
      image: veganburger,
      category: 'Main Courses',
      description: 'A plant-based burger served with all the classic toppings.',
    },
    {
      id: 7,
      name: 'Chocolate Lava Cake',
      image: chocolatelava,
      category: 'Desserts',
      description: 'Warm chocolate cake with a gooey molten center.',
    },
    {
      id: 8,
      name: 'Cheesecake',
      image: cheesecake,
      category: 'Desserts',
      description: 'Creamy cheesecake with a graham cracker crust and fresh berries.',
    },
    {
      id: 9,
      name: 'Fruit Sorbet',
      image: fruitsorbet,
      category: 'Desserts',
      description: 'Refreshing sorbet made with seasonal fruits.',
    },
  ];

  const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts'];

  const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu section-padding">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
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
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
