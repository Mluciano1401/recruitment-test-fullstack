import Carousel from '../components/Carousel/carousel'
import './styles/home.css'

function Home() {

  return (
    <>
      <header>
        <h1>Shop</h1>
      </header>
      <main>
        <div className='box-btn'>
          <button className='btn-add'>
            <a href='/create'>+</a></button>
        </div>
        <Carousel></Carousel>
      </main>
      <footer>
        this site was created with react and express js
      </footer>
    </>
  )
}

export default Home
