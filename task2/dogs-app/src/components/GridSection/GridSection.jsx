import { useState, useEffect } from 'react'
import './GridSection.css'
import Card from '../Card/Card'
import * as api from '../../services/apiservice'

function GridSection() {
  const [data, setData] = useState([]);
  let id = 0;
  useEffect(() => {
    getData();
  })
  const getData = async() => {
    const response =  await api.getDogs();
    setData(response);
  }
  return (
    <div className='wrap-grid-content'> 
    { 
    data ?
    data.map(item => (
        <Card key={id++} data={item} className="grid-item"> </Card>
    )) : (<h3>Loading ...</h3>)
    }
    </div>
  )
}

export default GridSection