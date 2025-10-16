import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function TableComponent(props) {
  console.log(props)
    return (
        <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Storyline</th>
          <th>Active</th>
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
              <td>{item.active ? "Active" : "InActive"}</td>
              <td>{item.created_at}</td>
              <td>
                <Button type="sm" onClick={()=>props?.onEdit(item)}>
                  Edit</Button></td>
              <td>
                <Button variant='danger' onClick={()=>props?.onDelete(item)}>
                  Delete</Button></td>
                
            </tr>
            </>
          })
        }
            </tbody>
            </Table>
    );
}

export default TableComponent;