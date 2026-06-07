import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import OneWindow from './pages/OneWindow';
import ServicesPage from './pages/ServicesPage';
import Staff from './pages/Staff';
import Specialties from './pages/Specialties';
import AdministrativeProcedures from './pages/AdministrativeProcedures';
import History from './pages/History';
import Facilities from './pages/Facilities';
import Achievements from './pages/Achievements';
import Contacts from './pages/Contacts';
import WorkingHours from './pages/WorkingHours';
import Media from './pages/Media';
import YearOfWoman from './pages/YearOfWoman';
import Contests from './pages/Contests';
import LawCorner from './pages/LawCorner';
import CorruptionPrevention from './pages/CorruptionPrevention';
import ImportantDetail from './pages/ImportantDetail';
import VirtualTour from './pages/VirtualTour';
import NotableAlumni from './pages/NotableAlumni';
import VirtualHonorBoard from './pages/VirtualHonorBoard';
import OrganizationalStructure from './pages/OrganizationalStructure';
import { AccessibilityProvider } from './context/AccessibilityContext';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Standalone Route for Fullscreen Virtual Tour */}
          <Route path="/virtual-tour" element={<VirtualTour />} />
          
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<NewsList />} />
            <Route path="news/:id" element={<NewsDetail />} />
            
            <Route path="year-of-woman" element={<YearOfWoman />} />
            <Route path="contests" element={<Contests />} />
            <Route path="law-corner" element={<LawCorner />} />
            <Route path="corruption-prevention" element={<CorruptionPrevention />} />
            <Route path="important/:id" element={<ImportantDetail />} />
            <Route path="odno-okno" element={<OneWindow />} />
            <Route path="odno-okno/uslugi" element={<ServicesPage />} />
            
            {/* Новый маршрут для Административных процедур */}
            <Route path="odno-okno/admin-procedury" element={<AdministrativeProcedures />} />
            
            <Route path="kolledg/administraciy" element={<Staff />} />
            <Route path="kolledg/istoriy-kolledga" element={<History />} />
            <Route path="kolledg/materialno-tekhnicheskaya-baza" element={<Facilities />} />
            <Route path="kolledg/nashi-dostizheniya" element={<Achievements />} />
            <Route path="kolledg/nashi-kontakty" element={<Contacts />} />
            <Route path="kolledg/rezhimraboty" element={<WorkingHours />} />
            <Route path="kolledg/mi-v-smi" element={<Media />} />
            <Route path="kolledg/vydayushchiesya-vypusniki" element={<NotableAlumni />} />
            <Route path="kolledg/virtualnaya-doska-pocheta" element={<VirtualHonorBoard />} />
            <Route path="kolledg/struktura-kolledga" element={<OrganizationalStructure />} />
            <Route path="abiturientam/proforientatsionnye-novosti-o-nas-v-smi/:id" element={<NewsDetail isVocational={true} />} />
            <Route path="*" element={<GenericPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
};

export default App;