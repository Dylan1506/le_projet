import React from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import Event from '../../pages/Event';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import PageConnection from '../Log/PageConnection';
import Navbar from '../navbarETfooter/Navbar';
import Footer from '../navbarETfooter/Footer';




const Index = () => {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Event' element={<Event />} />
                <Route path='/Profil' element={<Profil />} />
               
                <Route path='/Connexion' element={<PageConnection />} />
                <Route path='*' element={<Navigate to='/' replace/>} />
            </Routes>
            
        </BrowserRouter>
    ); 
};

export default Index;