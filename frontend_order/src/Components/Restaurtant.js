import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

function Restaurtant() {
    const [restaurantCards, setRestaurantCards] =useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/top-restaurant/507001', {
              headers: { 'Authorization': `Bearer ${token}` }
            });
            // Assuming the response.data contains the data you need
            setRestaurantCards(response.data);
          } catch (error) {
            console.error('Error fetching restaurant data:', error);
          }
        };
    
        fetchData();
        console.log(restaurantCards)
      }, [])
  return (
    <div>
        {/* Restaurant Section */}
      <Container className="mt-5">
        <h2>Featured Restaurants</h2>
        <Row>
          {restaurantCards?.map(card => (
            <Col md={4} key={card.id}>
              <Card className="my-3">
                <Card.Img variant="top" src={card.coverImages[0]} />
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.address}</Card.Text> 
        <Card.Text>Rating: {card.rating}</Card.Text> 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Restaurtant