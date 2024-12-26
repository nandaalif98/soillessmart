import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Komunitas from './pages/Komunitas';
import Kursus from './pages/Kursus';
import MyCourse from './pages/MyCourse';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LayoutDetailKursus from './components/LayoutDetailKursus';
import LayoutDetailKomunitas from './components/LayoutDetailKomunitas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarTeacher from './components-teacher/SidebarTeacher';
import ManageCourse from './pages-teacher/ManageCourse';
import SaleStats from './pages-teacher/SaleStats';
import UploadCourse from './pages-teacher/UploadCourse';
import TeacherProfile from './pages-teacher/TeacherProfile';
import { TeacherProvider } from './information/TeacherContext';
import LayoutEditKursus from './components-teacher/LayoutEditKursus';
import { UserProvider } from './information/UserContext';
import { CourseProvider } from './information/CourseContext';
import { BlogProvider } from './information/BlogContext';
import ListVideo from './pages-admin/ListVideo'
import SidebarAdmin from './components-admin/SidebarAdmin';
import AddBlog from './pages-admin/AddBlog';
import DashboardAdmin from './pages-admin/DashboardAdmin';
import ListBlog from './pages-admin/ListBlog';
import EditBlog from './pages-admin/EditBlog';
import Transaction from './pages-teacher/Transaction';
import TransValidate from './pages-teacher/TransValidate';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isTeacherPage = location.pathname === '/managecourse' || location.pathname === '/salestats' || location.pathname === '/uploadcourse' || location.pathname === '/teacherprofile' || location.pathname === '/editkursus' || location.pathname === '/transaksi' || location.pathname === '/transvalidate';
  const isAdminPage = location.pathname === '/listvideo' || location.pathname === '/addblog' || location.pathname === '/dashboardadmin' || location.pathname === '/listblog' || location.pathname === '/editblog';  

  return (
    <BlogProvider>
      <TeacherProvider>
        <CourseProvider>
          <UserProvider>
            {!isAuthPage && !isTeacherPage && !isAdminPage && <Navbar />}
            {isTeacherPage && <SidebarTeacher />}
            {isAdminPage && <SidebarAdmin />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='kursus' element={<Kursus />} />
              <Route path='komunitas' element={<Komunitas />} />
              <Route path='blog' element={<Blog />} />
              <Route path='mycourse' element={<MyCourse />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='detailkursus' element={<LayoutDetailKursus />} />
              <Route path='detailkomunitas' element={<LayoutDetailKomunitas />} />
              <Route path='managecourse' element={<ManageCourse />} />
              <Route path='salestats' element={<SaleStats />} />
              <Route path='uploadcourse' element={<UploadCourse />} />
              <Route path='teacherprofile' element={<TeacherProfile />} />
              <Route path='editkursus' element={<LayoutEditKursus />} />
              <Route path='listvideo' element={<ListVideo />} />
              <Route path='addblog' element={<AddBlog />} />
              <Route path='dashboardadmin' element={<DashboardAdmin />} />
              <Route path='listblog' element={<ListBlog />} />
              <Route path='editblog' element={<EditBlog />} />
              <Route path='transaksi' element={<Transaction />} />
              <Route path='transvalidate' element={<TransValidate />} />
            </Routes>
            {!isAuthPage && !isTeacherPage && !isAdminPage && <Footer />}
          </UserProvider>
        </CourseProvider>
      </TeacherProvider>
    </BlogProvider>
  );
}

export default App;