import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createMovie, updateMovie }from '../../services/movie'

function MovieModal(props) {
  const{show, selectedMovie,handleClose,handleShow,setRefresh,setSelectedMovie} = props

  const [formData, setFormData] = useState({title: "",storyline: ""})
  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData((prev)=>{
        const updatedFormData = {...prev , [name]: value}
        console.log('updated form data: ',updatedFormData)
        return updatedFormData
    })
  }
  const handleSubmit = async() => {
    if (selectedMovie) {
      await updateMovie(selectedMovie.id, formData)
      setSelectedMovie(null)
    }
    else {
    await createMovie(formData);
  }
  handleClose();
  setRefresh((prev) => !prev);
}
useEffect(()=>{
if (selectedMovie)
{
  setFormData({title:selectedMovie.title,storyline:selectedMovie.storyline})
}
},[selectedMovie])
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the following</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="Text"
                autoFocus
                onChange={handleChange}
                name='title'
                defaultValue={selectedMovie?.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Storyline / Description</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              onChange={handleChange} 
              name='storyline'
              defaultValue={selectedMovie?.storyline}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {
              selectedMovie?'Update Movie':'Add Movie'
            }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;