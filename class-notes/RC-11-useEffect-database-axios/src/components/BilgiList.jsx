import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const BilgiList = () => {

 
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          
          
              <tr >
                <th>{ }</th>
                <td>{ }</td>
                <td>{ } </td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    className="text-danger"
                    size={22}
                   
                  />

               
                </td>
              </tr>
          
      
        </tbody>
      </table>

      {/* Modal */}
    
    </div>
  );
}

export default BilgiList