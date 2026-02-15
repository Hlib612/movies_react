import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './components/Movies'
import movies from './muvies.json'

function App() {

  return (
    <>
     <Movies movies={movies}/>
    </>
  )
}

export default App
