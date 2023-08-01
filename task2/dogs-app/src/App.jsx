//import { useState } from 'react'
import './App.css'
import GridSection from './components/GridSection/GridSection'
import logo from './assets/perrologo.png'

function App() {

  return (
    <>
      <header>
        <img src={logo} alt="logo" className='logo'/>
        <h1>Dog App</h1>
      </header>
      <main>
        <GridSection></GridSection>
      </main>
      <footer>
        <span>this site was created with <a href='https://react.dev/' target='_blank'>react</a> and <a href='https://dog.ceo/dog-api/documentation' target='_blank'>dog api</a></span>
      </footer>
    </>
  )
}

export default App
