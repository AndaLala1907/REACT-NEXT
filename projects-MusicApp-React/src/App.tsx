import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ArtistsList from './components/ArtistsList'
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ArtistsList />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
      </Routes>
    </div>
  )
}

export default App