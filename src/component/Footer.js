import { Navbar, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Footer = (props) => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="bottom">
        <Container>
          <h1 style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '24px', color: 'yellow' }}>Sale Spot</h1>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://help.runcfs.com/hubfs/Smart%20Objects/smart56.2.png"
                alt="YouTube"
                style={{
                  width: "100px",
                  height: "auto",
                }}
              />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
export default Footer;
