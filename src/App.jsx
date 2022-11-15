import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element = { <Home/> } />

        <Route path='/ProyectsFrontEnd' element = {<h1>I am frontEnd</h1>} />

        <Route path='/ProyectsVideoGames' element = {<h1>I am VideoGames</h1>} />
        
        <Route path='/ProyectsModelings' element = {<h1>I am Modeling</h1>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
