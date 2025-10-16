import { useEffect } from 'react'
import { useState } from 'react'
import { deleteStream, listStream } from '../services/stream'
import TableComponent from '../components/Table/Table'
import MovieModal from '../components/Modal/MovieModal'
import DeleteModal from '../components/Modal/DeleteModal'

function HomePage(){

    const [streamList,setStreamList] = useState([]);
    const [show,setShow] = useState(false);
    const [showDel,setShowDel] = useState(false);
    const[refresh, setRefresh] = useState(false);
    const[selectedStream,setSelectedStream] = useState(null);
    const handleStreamClose = () => setShow(false);
    const handleStreamShow = () => setShow(true);
    const handleDMStreamShow = () => setShowDel(true);
    const handleDMaStreamClose = () =>setShowDel(false);
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