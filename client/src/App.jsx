import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserTable from './Table/UserTable';
import './App.css';
import {Toaster} from 'react-hot-toast';
export default function App() {
  return (
    <>
     <UserTable/>
     <Toaster></Toaster>
    </>
  )
}
