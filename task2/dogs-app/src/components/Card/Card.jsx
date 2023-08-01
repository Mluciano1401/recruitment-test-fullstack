import { useState, useEffect } from 'react'
import * as api from '../../services/apiservice'
import './Card.css'

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
        {
            ishover ? (
                <div className='box-breeds-card'>
                   <ul>
                        {
                        breeds ? (breeds.map(breed => (
                            <li key={id++}>{breed}</li>
                        ))) : (<span>there are no sub-breeds for this breed</span>)
                    }
                    </ul> 
                </div>
            ) : (
                <div className="box-img-card">
                    <img className='img-card' src={imgurl ? imgurl : '../../assets/image-not-found.png'} alt=""/>
                </div>
            )
        }
        <div className="desc-card" onMouseEnter={handleCard} onMouseLeave={nohandleCard}>
            <h2 className='card-name'>{data}</h2>
        </div>
      </div>
    </>
  )
}

export default Card