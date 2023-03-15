import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ContactList from './components/contact-list/Contact-list';
import ViwContact from './components/view-contact/ViewContact';
import AddContact from './components/Addcontact/AddContact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/ContactList" />} />
        <Route path="/ContactList" element={<ContactList />} />
        <Route path="/ViwContact/:id" element={<ViwContact />} />
        <Route path="/AddContact" element={<AddContact />} />
      </Routes>

    </>
  );
}

export default App;
