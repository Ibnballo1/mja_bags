import React from 'react';
import '../styles/FeaturedProducts.css';
import bagImg from '../assets/images/briggs-riley.png';
import delsey from '../assets/images/delsey.png';
import backpackImg from '../assets/images/backpack.png';
import handbagImg from '../assets/images/ladies.png';
import kids from '../assets/images/kids.png';
import accessories from '../assets/images/accessories.png';

function FeaturedProduct() {
  const productDetails = [
    {
      id: 1,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${bagImg}`
    },
    {
      id: 2,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${delsey}`
    },
    {
      id: 3,
      category: 'Backpacks',
      name: '',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${backpackImg}`
    },
    {
      id: 4,
      category: 'Handbag',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${handbagImg}`
    },
    {
      id: 5,
      category: 'Kid\'s Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${kids}`
    },
    {
      id: 6,
      category: 'Accessories',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${accessories}`
    }
  ]
  return (
    <div>
      <h2>Travelling soon? These travel products will help</h2>
      <section className='productContainer'>
        {
          productDetails.map((details) => (
            <div key={details.id} className='productBox'>
              <h3>{details.category}</h3>
              <div className='productImg'>
                <img src={details.image} alt={details.description} />
                <p className='detailsInfo'>{details.name}</p>
                <p className='detailsInfo'>{details.price}</p>
                <button className="moreBtn">View More</button>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default FeaturedProduct