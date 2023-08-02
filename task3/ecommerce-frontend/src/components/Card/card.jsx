import './card.css'
import img from '../../assets/image-not-found.png'
function Card({data}) {
  return (
    <>
      <div className="wrap-card">
        <div className="card-content">
            <div className="box-img-card">
                <img src={data.image ? data.image : img} alt="" className="card-img" />
            </div>
            <div className="box-info">
                <h2 className="card-name">{data.name}</h2>
                <span className="car-price">{data.price}</span>
                <p className="card-desc">{data.description}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
