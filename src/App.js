import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StudentList from './components/Students/StudentList/StudentList';
import AddStudent from './components/Students/AddStudent/AddStudent';
import ViewStudent from './components/Students/ViewStudent/ViewStudent';
import EditStudent from './components/Students/EditStudent/EditStudent';

let App = ()=> {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/students/list'}/>}/>
        <Route path={'/students/list'} element={<StudentList/>}/>
        <Route path={'/students/add'} element={<AddStudent/>}/>
        <Route path={'/students/view/:contactID'} element={<ViewStudent/>}/>
        <Route path={'/students/edit/:contactID'} element={<EditStudent/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;


