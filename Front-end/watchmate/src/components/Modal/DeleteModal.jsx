import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteMovie } from '../../services/movie';



function DeleteModal(props) {
    const { showDel, handleDMClose,movieID,setRefresh}=props
    return(

        <>
      <Modal show={showDel} onHide={handleDMClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDMClose}>
            Close
          </Button>
          <Button variant="danger" onClick={async ()=>{
            await deleteMovie(movieID)
            handleDMClose();
            setRefresh();
          }}>
            Delete Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default DeleteModal;