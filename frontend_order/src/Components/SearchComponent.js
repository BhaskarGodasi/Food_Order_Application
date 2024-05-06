import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SearchComponent = () => {
  const [searchParam, setSearchParam] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/search/${searchParam}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
    <div className='d-flex'>
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Enter pincode..."
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div>
      {/* <Row> */}
        {searchResult.length > 0 ? (
          <Row>
            {searchResult.map((food) => (
                   <Col md={4} key={food._id}>
                   <Card className="my-3">
                     <Card.Img variant="top" src={food.images[0]} />
                     <Card.Body>
                       <Card.Title>{food.name}</Card.Title>
                       <Card.Text>{food.description}</Card.Text> 
             <Card.Text>Rating: {food.price}</Card.Text> 
                     </Card.Body>
                   </Card>
                 </Col>
              
            ))}
          </Row>
        ) : (
          <p>No data found</p>
        )}
    
      </div>
    </div>
  );
};

export default SearchComponent;
