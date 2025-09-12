import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Areas = () => {
  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
          <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi bi-people" style={{ fontSize: '2rem', color: '#740974' }}></i>
              <Card.Title className='mb-5'>Familia</Card.Title>
              
              <Card.Text>
                Acompañamos en temas de divorcios, adopciones y regímenes de visitas, buscando soluciones claras y justas para toda la familia.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
          <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi-building" style={{ fontSize: '2rem', color: '#740974' }}></i>
              <Card.Title className='mb-5'>Laboral</Card.Title>
              
              <Card.Text>
                Brindamos orientación en contratos, obligaciones y resolución de conflictos, protegiendo tus intereses en cada situación legal.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
          <Card className="h-100 AreaCard ">
            <Card.Body className="text-center">
                <i className="bi-file-text" style={{ fontSize: '2rem', color: '#740974' }}></i>
              <Card.Title className='mb-5'>Civil y Comercial</Card.Title>
             
              <Card.Text>
              Asesoramos en contratos, obligaciones civiles y comerciales, así como en conflictos legales relacionados con bienes, sociedades y negocios.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
          <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi-shield-lock" style={{ fontSize: '2rem', color: '#740974' }}></i>
              <Card.Title className='mb-5'>Penal</Card.Title>
             
              <Card.Text>
              Defendemos tus derechos en procesos penales, tanto como víctima o imputado, garantizando un asesoramiento serio y cercano.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Areas;
