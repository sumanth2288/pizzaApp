import React from 'react'
import { Col, Container, Row,Card,Button } from 'react-bootstrap';
const PizzaCard = ({x}) => {
  return (
    <>
          <Container>
            <Row className='mx-3'>
             
        {x.map((curEle)=>{
          const {id,image,name,desc,price} = curEle
                return(
  <Col lg={4} md={3} sm={2} className='my-3' key={id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2>{price}</h2>
        <Button variant="dark">Order Now</Button>
        </div>
        
      </Card.Body>
    </Card>
                </Col>
                )
            
        })}
       
            </Row>
        </Container>


         
    </>
  )
}

export default PizzaCard