import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="home-container">
      <Carousel id="carouselExample" className="carousel">
        <Carousel.Item>
          <img
            src="https://www.businessoftollywood.com/wp-content/uploads/2024/04/Ashwatthama-Kalki-scaled.jpg" // Replace with your image URLs
            className="d-block w-100 img-fluid" 
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Welcome to Movie Search</h3>
            <p>Find and explore your favorite movies with ease.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://m.media-amazon.com/images/I/91oWxWJtr2L.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Discover New Films</h3>
            <p>Browse through a vast collection of movies.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.hollywoodreporter.com/wp-content/uploads/2024/05/The-Boys-Season-4-Trailer-Poster-Publicity-H-2024.jpg?w=1296"
            className="d-block w-100 img-fluid"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Enjoy Your Favorite Movies</h3>
            <p>Search for movies and add them to your watchlist.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="hero-section text-center">
        <h2 className="hero-heading">Find Your Favorite Movies</h2>
        <Button
          variant="danger"
          size="lg"
          onClick={handleSearchClick}
          className="mt-4 btn-primary"
        >
          Search Movies
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
