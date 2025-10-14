import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavBar/NavBar'
import TableComponent from './components/Table/Table'
import { useEffect } from 'react'
import { listMovies } from './services/movie'
import MovieModal from './components/Modal/MovieModal'


function App() {
  const [moviesList,setMoviesList] = useState([]);
  const [show,setShow] = useState(false);
  const[refresh, setRefresh] = useState(false)
  const[selectedMovie,setSelectedMovie] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() =>{
    const movies =  listMovies();
      movies.then((data) => {
        setMoviesList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);
  const onEdit = (movie) =>{
    handleShow();
    setSelectedMovie(movie)
  }
  
  return (
    <>
    <NavbarComponent/>
    <TableComponent movies = {moviesList} onEdit={onEdit}/>
    <MovieModal 
    show = {show}
    handleClose={handleClose}
    setRefresh = {setRefresh}
    selectedMovie={selectedMovie}/>
    </>
  )
}

export default App
