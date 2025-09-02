import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
        <Container fluid className=' mt-4  bg-black text-white'>
           <div className='d-flex justify-content-around'>
            <section className="footerContainer mt-5">

            <h3 className='mb-4'>Estudio Cardozo & Asociados</h3>
            </section >
            <section className='mt-4'>
                
                
                 <p>Email: 
                    <a href="mailto:carla.nazarena.cardozo@gmail.com " target="_blank" rel="noopener noreferrer" className='social2'>
               carla.nazarena.cardozo@gmail.com 
              </a>
                 </p>

               <p> Teléfono:
             <a href="tel:+5493816585961" target="_blank" rel="noopener noreferrer " className='social2'>
                 +54 9 381 6 585 961</a>
               </p>
                
                <p>
                Facebook:
                    <a href="https://www.facebook.com/Abogada.Carla.Cardozo" target="_blank" rel="noopener noreferrer " className='social2'>
                Carla Nazarena Cardozo
              </a>
              </p>
               
               
               </section>
           
            <section>
                <div className='SocialFooter mt-4'>
            <a href="https://www.instagram.com/abogadasasociadastucuman/" target="_blank" rel="noopener noreferrer" className='social'>
                <i className="bi bi-instagram  "></i>
              </a>
              <a href="https://www.facebook.com/Abogada.Carla.Cardozo" target="_blank" rel="noopener noreferrer " className='social'>
                <i className="bi bi-facebook "></i>
              </a>
              <a href="mailto:carla.nazarena.cardozo@gmail.com " target="_blank" rel="noopener noreferrer" className='social'>
                <i className="bi bi-envelope "></i>
              </a>
              </div>
              <div className="">
                <p className='text-end'>  Redes</p>   
              </div>
            </section>

           
            <br />
             
       </div>

       <hr />
         <section className='text-center'><h6>© 2025 Estudio Cardozo & Asociados - Todos los derechos reservados.</h6></section>
        </Container>
      
        </>
    );
};

export default Footer;