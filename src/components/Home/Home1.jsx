// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import puppyImage from './puppy.jpg';
import kittenImage from './kitten.jpg';
import otherImage from './other.jpg';
import shelterImage from './shelter.jpg';

const Home1 = () => {
  const featuredPets = [
    { id: 1, name: 'Buddy', species: 'Dog', imagePath: puppyImage },
    { id: 2, name: 'Whiskers', species: 'Cat', imagePath: kittenImage },
    { id: 3, name: 'Feathers', species: 'Parrot', imagePath: otherImage },
    { id: 4, name: 'Shelter & Rescue', species: 'Dog', imagePath: shelterImage },  // Example shelter pet
    // Add more featured pets as needed
  ];

  return (
    <div className="home-page" >
      <div className="welcome-section">
        <h1>Welcome to Our Pet Store</h1>
        <h1>PET HUB</h1>
        <p>Find your new furry friend with us!</p>
      </div>

      <div className="featured-pets-section">
        <h2>Featured Pets</h2>
        <div className="featured-pets">
          {featuredPets.map((pet) => (
            <div key={pet.id} className="featured-pet-card">
              <img src={pet.imagePath} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.species}</p>
              <Link to={`/pets/${pet.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home1;
