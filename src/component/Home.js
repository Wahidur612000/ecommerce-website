import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

const Home = () => {

  const dummy = [
    {
      date: "JUL16",
      place: "DETROIT",
      add: "MI DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      place: "TORONTO",
      add: "ON BUDWEISER STAGE",
    },
    {
      date: "JUL19",
      place: "BRISTOW",
      add: "VA JIGGY LUBE",
    },
    {
      date: "JUL 22",
      place: "PHOENIX",
      add: "CA CONCORD PAVILION",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bg-dark text-center">
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>
          Sale Spot
        </h1>
      </div>
      <div className="bg-white" style={{ height: '2px' }} />
      
      <h1
        style={{fontFamily: 'Algerian', 
                fontWeight: 'bold', 
                fontSize: '30px',
                justifyContent: "center", 
                color: 'black',
                textAlign: "center", }}
      >
        Tours
      </h1>

      <div className=" align-items-center justify-content-center text-center">
        {dummy.map((item, key) => (
          <ul keys={key}>
            <span>{item.date}-</span>
            <span>{item.place}-</span>
            <span>
              {item.add}
              {"   "}
            </span>
            <Button variant="primary" className=" align-items-right justify-content-center text-right" > Buy Ticket</Button>
            <div>
              {
                "__________________________________________________________________________"
              }
            </div>
          </ul>
        ))}
      </div>
      <div ><Footer /></div>
    </div>
  );
};

export default Home;
