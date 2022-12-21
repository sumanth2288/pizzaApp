import React from 'react'
import {Container,Row,Col,Table} from "react-bootstrap"

const Contact = () => {
  return (
    <>
      <Container style={{marginTop:"50px"}}>
            <Row>
                <Col md={6}>
                    <h1>Panda pizza shop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque earum molestias deserunt! Obcaecati soluta voluptatum, et harum vitae voluptatibus pariatur laborum at inventore quaerat nostrum consequatur eius explicabo adipisci voluptatem ipsum aperiam amet. Rem distinctio cumque hic ratione nam autem impedit tenetur explicabo aliquid vero! Dolorum porro placeat eius ullam nisi sequi, earum dolor similique iste harum quia cupiditate sit omnis vero illum perferendis, quod neque ab. Nisi nostrum velit quas. Quasi porro, incidunt ea repellat dolor ullam. Commodi, sit necessitatibus laboriosam exercitationem, architecto nemo impedit ipsa asperiores vitae harum, minima quo consequuntur recusandae ipsam aliquid alias neque fugiat id dolorem saepe! Assumenda, saepe ratione odit accusantium reprehenderit ex, sunt delectus, aspernatur tempore doloremque temporibus. Id error velit placeat, nihil accusamus totam corrupti at, incidunt accusantium deserunt eaque recusandae? Magnam eveniet distinctio natus reprehenderit incidunt quae aspernatur cupiditate voluptatibus tempora beatae atque quis architecto, dolorem, dolores tenetur alias. Laudantium laborum, repellendus, possimus est earum ullam placeat eius numquam id, sint qui iure provident ad corporis. Ad rerum sed illo accusantium debitis recusandae sapiente maxime ipsa dignissimos, culpa esse praesentium qui totam excepturi? Aperiam libero corrupti illo velit veritatis numquam doloremque vel aliquam dolorum tenetur fugit atque, amet excepturi a.</p>
                    <Table striped bordered hover className='text-center'>
       <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={3}>Contact details</th>
       
        </tr>
      </thead>
      <tbody>
        <tr>
           {/* <td><BsFillTelephoneFill/></td>  */}
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
                </Col>
                <Col md={6} className="my-5">
                    <img src='images/logo.png' height={'30%'} width={"100%"} alt=""/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact