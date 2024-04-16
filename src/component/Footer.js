import { Navbar, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Footer = (props) => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="bottom">
      <Container>
      <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>
            Sale Spot
          </h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <div>{"---"}</div>
          <a href="https://www.youtube.com/" >
          <Image
            src="https://help.runcfs.com/hubfs/Smart%20Objects/smart56.2.png"
            style={{
                width: "300px", 
                height: "auto", 
            }}
          ></Image></a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Footer;