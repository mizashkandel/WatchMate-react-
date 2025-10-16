import { useEffect } from 'react'
import { useState } from 'react'
import { deleteMovie, listMovies } from '../services/movie'
import TableComponent from '../components/Table/Table'
import MovieModal from '../components/Modal/MovieModal'
import DeleteModal from '../components/Modal/DeleteModal'

function HomePage(){

    const [moviesList,setMoviesList] = useState([]);
    const [show,setShow] = useState(false);
    const [showDel,setShowDel] = useState(false);
    const[refresh, setRefresh] = useState(false);
    const[selectedMovie,setSelectedMovie] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDMShow = () => setShowDel(true);
    const handleDMClose = () =>setShowDel(false);
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
    const onDelete =  (movie) =>{
        handleDMShow();
        setSelectedMovie(movie);
        setRefresh();
    }
    return(
        <>
      <TableComponent 
      movies = {moviesList} 
      onEdit = {onEdit} 
      onDelete={onDelete}/>
      <MovieModal 
      show = {show}
      handleClose = {handleClose}
      handleShow = {handleShow}
      setRefresh = {setRefresh}
      selectedMovie = {selectedMovie}
      setSelectedMovie = {setSelectedMovie}
      />
      <DeleteModal
      setRefresh = {setRefresh}
      showDel = {showDel} 
      onDelete={onDelete} 
      handleDMClose={handleDMClose} 
      handleDMShow={handleDMShow}
      movieID = {selectedMovie?.id ?? ""}
      />
    </>
    ); 
}
export default HomePage