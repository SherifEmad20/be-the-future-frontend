import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from "./pages/Main";
import Footer from './components/Footer';
import AboutUs from "./pages/AboutUs"
import Login from "./pages/Login"
import Register from './pages/Register';
import ContactUs from "./pages/ContactUs";
import Courses from './pages/Courses';
import Opinions from './pages/Opinions';
import Issues from './pages/Issues';
import Notes from './pages/Notes';
import Support from "./pages/Support";
import Service from "./pages/Service";
// import Response from "./pages/Response";
import Social from "./pages/Social";
import Overload from "./pages/Overload";
import Chatbot from "react-chatbot-kit";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ClientProfile from "./pages/ClientProfile";
import ManagerProfile from "./pages/ManagerProfile";
import EmployeeProfile from "./pages/EmployeeProfile";
import Profile from "./pages/Profile";
import Chatroom from "./pages/Chatroom";
import AddCourse from "./pages/AddCourse";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Products from './pages/Products';
import CustomerProducts from './pages/CustomerProducts';
import UserProfile from './pages/UserProfile';
import AddTask from './pages/AddTask';
import Tasks from './pages/Tasks';
import EmployeeTasks from './pages/EmployeeTasks';
import DoneTasks from './pages/DoneTasks';
import AllUsers from './pages/AllUsers';
import AdminProducts from './pages/AdminProducts';
import AdminCourses from './pages/AdminCourses';
import AdminRegister from './pages/AdminRegister';
import logo from './logo.svg';



// import Chat from "./components/Chat";

function App() {
  return (
    // 
    <>
      <Navbar />
      <Switch>  
        <Route path="/chatroom" component={Chatroom}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Main}/>
        {/* <Route path="/about" component={AboutUs}/>
        <Route path="/service" component={Service}/> */}
        <ProtectedRoutes path="/about" component={AboutUs}/>
        <ProtectedRoutes path="/contact" component={ContactUs}/>
        <ProtectedRoutes path="/courses" component={Courses}/>
        <ProtectedRoutes path="/opinions" component={Opinions}/>
        <ProtectedRoutes path="/issues" component={Issues}/>
        <ProtectedRoutes path="/notes" component={Notes}/>
        <ProtectedRoutes path="/support" component={Support}/>
        <ProtectedRoutes path="/service" component={Service }/>
        <ProtectedRoutes path="/social" component={Social}/>
        <ProtectedRoutes path="/overload" component={Overload}/>
        <ProtectedRoutes path="/chatbot" component={Chatbot}/>
        {/* <ProtectedRoutes path="/bot" component={<chatbotagent />}/> */}
        <ProtectedRoutes path="/addproduct" component={AddProduct }/>
        <ProtectedRoutes path="/editproduct" component={EditProduct}/>
        <ProtectedRoutes path="/Userprofile" component={UserProfile}/>
        <Route path="/profile" component={Profile}/>
        <ProtectedRoutes path="/clientprofile" component={ClientProfile}/>
        <ProtectedRoutes path="/managerprofile" component={ManagerProfile}/>
        <ProtectedRoutes path="/employeeprofile" component={EmployeeProfile}/>
        <ProtectedRoutes path="/addcourse" component={AddCourse} />
        <ProtectedRoutes path="/products" component={Products}/>
        <ProtectedRoutes path="/customerproducts" component={CustomerProducts} />
        <ProtectedRoutes path="/addtask" component={AddTask} />
        <ProtectedRoutes path="/tasks" component={Tasks} />
        <ProtectedRoutes path="/employeetasks" component={EmployeeTasks} />
        <ProtectedRoutes path="/donetasks" component={DoneTasks} />
        <ProtectedRoutes path="/allusers" component={AllUsers} />
        <ProtectedRoutes path="/adminproducts" component={AdminProducts} />
        <ProtectedRoutes path="/admincourses" component={AdminCourses} />


        <Route path="/adminReg" component={AdminRegister} />


        
        {/* <chatbotagent/> */}
          
      </Switch>
      <Footer />
    </>

);
}

export default App;
