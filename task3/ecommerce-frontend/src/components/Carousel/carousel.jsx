import { useState, useEffect } from 'react'
import './carousel.css'
import Card from '../Card/card';
import * as api from '../../services/product.service';
function Carousel() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [final, setFinal] = useState(3);
 
  useEffect(()=>{
    getData();
  })

  const getData = async() =>{
    let token = sessionStorage.getItem('token');
    const result = await api.getProduct(token); 
    setData(result);
  }
  const nextSlides = (e) => {
   e.preventDefault();
   if(final != data.length){
      setFinal(final+1);
      setStart(start+1);
   }
  }  
  const prevSlides = (e) => {
   e.preventDefault();
   if(start != 0){
      setFinal(final-1);
      setStart(start-1);
   }
  } 
  return (
    <>
      <div className="wrap-carousel">
        <div className="carousel-content">
            <div className="carousel-buttons">
                <div className="btn-left btn-arrow" onClick={prevSlides}>
                  -
                  <img className='img-arrow' src="" alt=""/>
                </div>
                <div className="btn-rigth btn-arrow" onClick={nextSlides}>
                +
                  <img className='img-arrow' src="" alt=""/>
                </div>
            </div>
            <div className="carousel-grid">
                { data.slice(start,final).map(element => (
                    <Card key={element.id} data={element}></Card>
                ))}
            </div>            
        </div>
      </div>
    </>
  )
}

export default Carousel
