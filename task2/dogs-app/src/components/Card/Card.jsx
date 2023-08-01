import { useState, useEffect } from 'react'
import * as api from '../../services/apiservice'
import './Card.css'
import image from '../../assets/image-not-found.png'

function Card({data}) {
    const [imgurl, setImgurl] = useState("");
    const [breeds, setBreeds] = useState([]);
    const [ishover, setIshover] = useState(false);

    let id = 0;
    useEffect(() => {
      getUrl(data);
    })

    const handleCard = (e) => {
        e.preventDefault();        
        getBreed(data);
        setIshover(true);
    }

    const nohandleCard = (e) => {
      e.preventDefault();
      setIshover(false);
  }

    const getUrl = async(data) => {
      const response =  await api.getDogImg(data);
      setImgurl(response);
    }
    const getBreed = async(data) => {
        const response = await api.getSubBreeds(data);
        setBreeds(response);
    }
  return (
    <>
      <div className="wrap-card">
       <div className='card-content' onMouseEnter={handleCard} onMouseLeave={nohandleCard}>
        {
              ishover ? (
                  <div className='box-breeds-card'>
                    <ul>
                          {
                          breeds ? (breeds.map(breed => (
                              <li key={id++}>{breed}</li>
                          ))) : (<li>there are no sub-breeds for this breed</li>)
                      }
                      </ul> 
                  </div>
              ) : (
                  <div className="box-img-card">
                      <img className='img-card' src={imgurl ? imgurl : image} alt=""/>
                  </div>
              )
          }
          <div className="desc-card">
              <h2 className='card-name'>{data}</h2>
          </div>
       </div>
      </div>
    </>
  )
}

export default Card