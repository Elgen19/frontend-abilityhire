import Login from './pages/LoginForm'
import SignUp from './pages/SignUpForm'
import Profile from './pages/ProfilingForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import JobMain from './pages/JobSearchForm'
import Home from './pages/HomePage'
import EventComp from './pages/EventsPage'
import AboutUsComp from './pages/AboutUsPage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUpForm' element={<SignUp />} />
        <Route path='/ProfilingForm' element={<Profile />} />
        <Route path='/LoginForm' element={<Login />} />
        <Route path='/JobSearchForm' element={<JobMain />} />
        <Route path='/EventsPage' element={<EventComp />} />
        <Route path='/AboutUsPage' element={<AboutUsComp />} />
      </Routes>



    
    </>


  );
}

export default App;
