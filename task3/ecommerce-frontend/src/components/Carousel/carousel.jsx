import { useState, useEffect } from 'react'
import './carousel.css'
import Card from '../Card/card';

function Carousel() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData();
  })

  const getData = async() =>{
    setData();
  }

  return (
    <>
      <div className="wrap-carousel">
        <div className="carousel-content">
            <div className="carousel-buttons">
                <span className="btn-left"></span>
                <span className="btn-rigth"></span>
            </div>
            <div className="carousel-grid">
                {data.map(element => (
                    <Card key={element.id} data={element}></Card>
                ))}
            </div>            
        </div>
      </div>
    </>
  )
}

export default Carousel
