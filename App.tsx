import React from 'react';
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
import YearOfWoman from './pages/YearOfWoman';
import Contests from './pages/Contests';
import LawCorner from './pages/LawCorner';
import CorruptionPrevention from './pages/CorruptionPrevention';
import ImportantDetail from './pages/ImportantDetail';
import { AccessibilityProvider } from './context/AccessibilityContext';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
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
            <Route path="abiturientam" element={<Specialties />} />
            
            <Route path="*" element={<GenericPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
};

export default App;