import React from 'react'
import {Container,Col,Row} from "react-bootstrap"

const About = () => {
  return (
    <div>
        <Container style={{marginTop:"50px"}}>
            <h1>Introduction</h1>
            <p>Hellow guys , This is scodemark here! I'm currently learning web development . This is the small project which is being developed using react and with the frontend framework like bootstrap</p>
            <h1>Our Speciality</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores voluptatum voluptatem laudantium numquam earum, odit placeat. Id iure architecto necessitatibus vero sapiente quasi? Qui beatae labore iusto mollitia! Ad sed iste perspiciatis asperiores quia aperiam, magni eligendi adipisci eos placeat, beatae fugit. Recusandae asperiores sunt velit amet repellat at, voluptatum ipsum minus voluptatibus provident quia culpa perspiciatis. Optio numquam cupiditate voluptatibus ducimus expedita. Dolores praesentium molestias ullam architecto placeat nobis voluptatibus ipsum dolore repellat deleniti consectetur numquam dolorem, quibusdam perspiciatis magnam explicabo earum fuga recusandae odit corporis ut error, velit nostrum? Cum, optio at recusandae accusamus itaque laudantium est?</p>
                </Col>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laudantium earum in, sapiente quisquam reiciendis vitae quidem sunt hic, quo obcaecati vero perspiciatis unde officiis corrupti voluptatum expedita, dignissimos exercitationem? Dolore unde cupiditate obcaecati alias, ipsum consequuntur asperiores voluptatum dolores architecto suscipit pariatur ratione, reprehenderit recusandae, porro molestiae voluptatem qui quam veniam facere sint tempore consectetur! Optio repellendus error dolore, rem asperiores, nulla vel debitis voluptatibus provident libero aperiam temporibus explicabo reprehenderit architecto in inventore necessitatibus molestiae illo itaque autem similique qui cumque consequuntur quia. Ea illum a libero ullam debitis quae, repellat laudantium iusto aut distinctio incidunt optio minima!</p>
                </Col>
            </Row>
            <Row>
                <h1>Our Chefs</h1>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, porro illo. Quaerat nostrum cupiditate, facilis ducimus, quo, sit illo veniam perferendis nobis rem hic. Impedit nihil saepe dignissimos voluptatibus quas facere minus sit neque alias voluptatum. Minus fuga ut obcaecati porro quidem nobis repellat, facilis corporis voluptate voluptates rerum dolorum?</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, porro illo. Quaerat nostrum cupiditate, facilis ducimus, quo, sit illo veniam perferendis nobis rem hic. Impedit nihil saepe dignissimos voluptatibus quas facere minus sit neque alias voluptatum. Minus fuga ut obcaecati porro quidem nobis repellat, facilis corporis voluptate voluptates rerum dolorum?</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, porro illo. Quaerat nostrum cupiditate, facilis ducimus, quo, sit illo veniam perferendis nobis rem hic. Impedit nihil saepe dignissimos voluptatibus quas facere minus sit neque alias voluptatum. Minus fuga ut obcaecati porro quidem nobis repellat, facilis corporis voluptate voluptates rerum dolorum?</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, porro illo. Quaerat nostrum cupiditate, facilis ducimus, quo, sit illo veniam perferendis nobis rem hic. Impedit nihil saepe dignissimos voluptatibus quas facere minus sit neque alias voluptatum. Minus fuga ut obcaecati porro quidem nobis repellat, facilis corporis voluptate voluptates rerum dolorum?</Col>
            </Row>

        </Container>
    </div>
  )
}

export default About