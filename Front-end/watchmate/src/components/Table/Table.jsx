import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function TableComponent(props) {
    return (

        <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Story</th>
          <th>Created at</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props?.movies?.map((item,index)=>{
            return<>
            <tr key ={index}>
              <td>{item.title}</td>
              <td>{item.storyline}</td>
              <td>{item.created_at}</td>
              <td>
                <Button type="sm" onClick={()=>props?.onEdit(item)}>
                  Edit</Button></td>
            </tr>
            </>
          })
        }
            
            </tbody>
            </Table>
    );
}

export default TableComponent;