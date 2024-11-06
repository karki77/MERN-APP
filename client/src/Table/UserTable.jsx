import React, { useState } from 'react';
import Table from '../components/Table';
import AddUser from '../components/AddUser';
import UpdatedUser from '../components/UpdateUser';
import DeletedUser from '../components/DeleteUser';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserTable() {
    const [value, setValue] = useState({
        name:"",
        fathername:"",
        email:"",
        phone:""
    })
    const [updateid, setUpdateid] = useState()
    const [deleteId, setDeleteId] = useState()
    const handleChange =(e) => {
        setValue({
           ...value,[e.target.name]:e.target.value
        })
     }

     const UpdateUser = (id) => {
        setUpdateid(id)
    }

     const handleSubmit = async(e) =>{
        e.preventDefault()
        try{ 
            const UpdatedUser = await axios.put(`http://localhost:5000/api/update/${updateid}`,value)
            const response = UpdatedUser.data

            if (response.success) {
                toast.success(response.Message)
            }
             console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const DeleteUser = (deleteid) => {
        setDeleteId(deleteid)
    }
  const handleDelete = async() => {
     try{
         const deleteuser = await axios.delete(`http://localhost:5000/api/delete/${deleteId}`)
         const response = deleteuser.data
        if(response.success){
            toast.success(response.Message)
        }
         
         
     }catch(error){
       console.log(error);
       
     }
  }
  return (
    <>
     <Table UpdateUser={UpdateUser} DeleteUser={DeleteUser}></Table>
     <AddUser/>
     <UpdatedUser value={value} handleChange={handleChange} handleSubmit={handleSubmit}></UpdatedUser>
     <DeletedUser handleDelete={handleDelete}></DeletedUser>
    </>
  )
}
