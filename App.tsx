import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PageLoader from './components/PageLoader';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { DataProvider } from './context/DataContext';

// Admin Layout & Protection
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';

// Lazy Loaded Pages
const GenericPage = lazy(() => import('./pages/GenericPage'));
const NewsList = lazy(() => import('./pages/NewsList'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const OneWindow = lazy(() => import('./pages/OneWindow'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Staff = lazy(() => import('./pages/Staff'));
const Specialties = lazy(() => import('./pages/Specialties'));
const AdministrativeProcedures = lazy(() => import('./pages/AdministrativeProcedures'));
const ReceptionOfCitizens = lazy(() => import('./pages/ReceptionOfCitizens'));
const OneWindowContacts = lazy(() => import('./pages/OneWindowContacts'));
const HigherOrganizations = lazy(() => import('./pages/HigherOrganizations'));
const DisabledAccess = lazy(() => import('./pages/DisabledAccess'));
const DirectPhoneLines = lazy(() => import('./pages/DirectPhoneLines'));
const History = lazy(() => import('./pages/History'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Contacts = lazy(() => import('./pages/Contacts'));
const WorkingHours = lazy(() => import('./pages/WorkingHours'));
const Media = lazy(() => import('./pages/Media'));
const YearOfWoman = lazy(() => import('./pages/YearOfWoman'));
const Contests = lazy(() => import('./pages/Contests'));
const LawCorner = lazy(() => import('./pages/LawCorner'));
const CorruptionPrevention = lazy(() => import('./pages/CorruptionPrevention'));
const ImportantDetail = lazy(() => import('./pages/ImportantDetail'));
const VirtualTour = lazy(() => import('./pages/VirtualTour'));
const NotableAlumni = lazy(() => import('./pages/NotableAlumni'));
const VirtualHonorBoard = lazy(() => import('./pages/VirtualHonorBoard'));
const OrganizationalStructure = lazy(() => import('./pages/OrganizationalStructure'));
const CollegeMuseum = lazy(() => import('./pages/CollegeMuseum'));
const MethodicalWorkDirections = lazy(() => import('./pages/MethodicalWorkDirections'));
const CyclicCommissions = lazy(() => import('./pages/CyclicCommissions'));
const SchoolYearStartMaterials = lazy(() => import('./pages/SchoolYearStartMaterials'));
const DocumentSamples = lazy(() => import('./pages/DocumentSamples'));
const PedagogicalExperience = lazy(() => import('./pages/PedagogicalExperience'));
const AttestationCommission = lazy(() => import('./pages/AttestationCommission'));
const Internship = lazy(() => import('./pages/Internship'));
const CyclicCommissionsSchedule = lazy(() => import('./pages/CyclicCommissionsSchedule'));
const JobPlacementSchedule = lazy(() => import('./pages/JobPlacementSchedule'));

// Lazy Loaded Admin Pages
const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminNewsList = lazy(() => import('./pages/admin/NewsList'));
const NewsEditor = lazy(() => import('./pages/admin/NewsEditor'));
const ImportantDocsList = lazy(() => import('./pages/admin/ImportantDocsList'));
const ImportantDocEditor = lazy(() => import('./pages/admin/ImportantDocEditor'));
const Settings = lazy(() => import('./pages/admin/Settings'));

const App: React.FC = () => {
  return (
    <DataProvider>
      <AccessibilityProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="news" element={<AdminNewsList />} />
                  <Route path="news/new" element={<NewsEditor />} />
                  <Route path="news/edit/:id" element={<NewsEditor />} />
                  {/* Important Docs & Settings */}
                  <Route path="important" element={<ImportantDocsList />} />
                  <Route path="important/new" element={<ImportantDocEditor />} />
                  <Route path="important/edit/:id" element={<ImportantDocEditor />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
              </Route>

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
                <Route path="odno-okno/kontakty" element={<OneWindowContacts />} />
                
                {/* Новый маршрут для Административных процедур */}
                <Route path="odno-okno/admin-procedury" element={<AdministrativeProcedures />} />
                <Route path="odno-okno/priem-grazhdan" element={<ReceptionOfCitizens />} />
                <Route path="odno-okno/struktura" element={<OrganizationalStructure />} />
                <Route path="odno-okno/vyshestoyashchie" element={<HigherOrganizations />} />
                <Route path="odno-okno/invalidy" element={<DisabledAccess />} />
                <Route path="odno-okno/pryamye-linii" element={<DirectPhoneLines />} />
                
                <Route path="metodicheskaya-rabota/napravleniya-metodicheskoj-raboty" element={<MethodicalWorkDirections />} />
                <Route path="metodicheskaya-rabota/tsiklovye-komissii" element={<CyclicCommissions />} />
                <Route path="metodicheskaya-rabota/materialy-k-nachalu-uchebnogo-goda" element={<SchoolYearStartMaterials />} />
                <Route path="metodicheskaya-rabota/obraztsy-dokumentov" element={<DocumentSamples />} />
                <Route path="metodicheskaya-rabota/obobshchenie-pedagogicheskogo-opyta" element={<PedagogicalExperience />} />
                <Route path="metodicheskaya-rabota/sostav-attestatsionnoj-komissii" element={<AttestationCommission />} />
                <Route path="metodicheskaya-rabota/stazhirovka" element={<Internship />} />
                <Route path="metodicheskaya-rabota/grafik-provedeniya-nedel-tsiklovykh-komissij-na-2024-2025-uchebnyj-god" element={<CyclicCommissionsSchedule />} />
                
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
                
                <Route path="uchashchimsya/grafik-raboty-po-raspredeleniyu" element={<JobPlacementSchedule />} />
                
                <Route path="abiturientam/proforientatsionnye-novosti-o-nas-v-smi/:id" element={<NewsDetail isVocational={true} />} />
                <Route path="*" element={<GenericPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AccessibilityProvider>
    </DataProvider>
  );
};

export default App;