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
    <> 
    { 
    data ?
    data.map(item => (
        <Card key={id++} data={item}> </Card>
    )) : (<h3>Loading ...</h3>)
    }
    </>
  )
}

export default GridSection