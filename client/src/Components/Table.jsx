import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Table({UpdateUser,DeleteUser}) {
   const [data, setData] = useState([])

  
    useEffect(() => {
        async function FeatchData(){
            try{ 
            const featchUser = await axios.get('http://localhost:5000/api/get')
            const response = featchUser.data
            console.log(response);
            setData(response)
        }catch(error){
            console.log(error);
            
        }
     }
  FeatchData()
    },[data])

  
    
        return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2><b>Manage Employees</b></h2> 
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons"><FontAwesomeIcon icon={faCirclePlus} /></i> <span>Add New Employee</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Fathername</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                           {data.user?.map((elem,index) => {
                            return(
                                <tr>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.fathername}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit"><FontAwesomeIcon icon={faPenToSquare} /></i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteUser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" ><FontAwesomeIcon icon={faTrash} /></i>
                                            </a>
                                            
                                        </td>
                                    </tr>
                                 )
                             })}
                                
                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}
  

