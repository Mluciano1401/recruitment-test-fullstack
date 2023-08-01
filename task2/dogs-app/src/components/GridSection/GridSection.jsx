import { useState, useEffect } from 'react'
import './GridSection.css'
import Card from '../Card/Card'

function GridSection() {
  const [data, setData] = useState([]);
  let id = 0;
  return (
    <> 
    { 
    data.map(item => (
        <Card key={id++} data={item}> </Card>
    ))
    }
    </>
  )
}

export default GridSection