import { useState, useEffect } from 'react'
import './carousel.css'
import Card from '../Card/card';
import * as api from '../../services/product.service';
function Carousel() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData();
  })

  const getData = async() =>{
    let token = sessionStorage.getItem('token');
    const result = await api.getProduct(token); 
    setData(result);
  }

  return (
    <>
      <div className="wrap-carousel">
        <div className="carousel-content">
            <div className="carousel-buttons">
                <div className="btn-left btn-arrow">
                  -
                  <img className='img-arrow' src="" alt=""/>
                </div>
                <div className="btn-rigth btn-arrow">
                +
                  <img className='img-arrow' src="" alt=""/>
                </div>
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
