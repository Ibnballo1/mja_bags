import React from 'react'

function FeaturedProduct() {
  const productDetails = [
    {
      id: 1,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      id: 2,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      id: 3,
      category: 'Backpacks',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      id: 4,
      category: 'Suitcases and Trolleys',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      id: 5,
      category: 'Kid\'s Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1731954577-samsonite-freeform-carry-on-673b87323b818.jpg?crop=1xw:1xh;center,top&resize=980:*'
    }
  ]
  return (
    <div>
      <h3>Travelling soon? These travel products will help</h3>
      <section>
        {
          productDetails.map(details => (
            <div key={details.id}>
              <h3>{details.category}</h3>
              <p>{details.name}</p>
              <img src={details.image} alt={details.description} />
              <p>{details.price}</p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default FeaturedProduct