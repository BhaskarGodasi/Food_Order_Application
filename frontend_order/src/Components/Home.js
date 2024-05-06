import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import carousel1 from '../Assests/Images/southern-living.jpg'
import carousel2 from '../Assests/Images/spring_sensation.jpg'
import carousel3 from '../Assests/Images/autumn-harvest-hero.jpg'

import SearchComponent from './SearchComponent';

function HomePage() {
  
  // Sample data for carousel items and cards
  const carouselItems = [
    { id: 1, title: "Welcome to Foodie's Paradise!", image: carousel1 },
    { id: 2, title: 'Discover Amazing Culinary Delights', image: carousel2 },
    { id: 3, title: 'Explore the Best Restaurants Near You', image: carousel3 }
  ];

  

//   const blogCards = [
//     { id: 1, title: '10 Must-Try Recipes for Summer', image: 'blog1.jpg', link: '/blogs/1' },
//     { id: 2, title: 'A Culinary Journey Through Italy', image: 'blog2.jpg', link: '/blogs/2' },
//     { id: 3, title: 'Top 5 Vegan Restaurants in Your City', image: 'blog3.jpg', link: '/blogs/3' },
//   ];

  // const restaurantCards = [
  //   { id: 1, name: 'Gourmet Garden', image: 'restaurant1.jpg', link: '/restaurants/1' },
  //   { id: 2, name: 'Spice Haven', image: 'restaurant2.jpg', link: '/restaurants/2' },
  //   { id: 3, name: 'Seafood Sensation', image: 'restaurant3.jpg', link: '/restaurants/3' },
  // ];

  return (
    <div>
      {/* Carousel */}
      <Carousel>
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 cimg-1"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Blog Section */}
      {/* <Container className="mt-5">
        <h2>Latest Food Blogs</h2>
        <Row>
          {blogCards.map(card => (
            <Col md={4} key={card.id}>
              <Card className="my-3">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Link href={card.link}>Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}

      

      {/* Serach component */}
      <Container className="mt-5">
      <SearchComponent />
      </Container>
      
    </div>
  );
}

export default HomePage;
