import React from 'react';

function Menu() {
  return (
    <div className="menu section-padding">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Appetizers</h3>
            <img src="https://example.com/appetizer.jpg" alt="Appetizer" />
            <ul>
              <li>Avocado Toast</li>
              <li>Spicy Tuna Rolls</li>
              <li>Truffle Fries</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Main Courses</h3>
            <img src="https://example.com/maincourse.jpg" alt="Main Course" />
            <ul>
              <li>Grilled Salmon</li>
              <li>Steak Frites</li>
              <li>Vegan Burger</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Desserts</h3>
            <img src="https://example.com/dessert.jpg" alt="Dessert" />
            <ul>
              <li>Chocolate Lava Cake</li>
              <li>Cheesecake</li>
              <li>Fruit Sorbet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
