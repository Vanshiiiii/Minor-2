import React,{useState} from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Startuppage from './components/Startuppage/Startuppage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/signup/Signup'
import UserRegistration from './components/userRegisteration/UserRegistration'
import Objectives from './components/Objectives/Objectives'
import Investor from './components/InvestorPage/InvestorPage'
import InvestorLogin from './components/Login/InvestorLogin'
import InvestorRegistration from './components/userRegisteration/InvestorRegistration'
import InvestorDashboard from './components/dashboard/investorDashboard'
import StartupDashboard from "./components/dashboard/startupDashboard";
import Articles from './components/Article/Article'
import ChatBotSU from './components/ChatBotSU'
function App(){
   const [loggedIn, setLoggedIn] = useState(false);
   const [startLoggedIn,setStartLoggedIn]=useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          startLoggedIn={startLoggedIn}
          setStartLoggedIn={setStartLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/startup"
            element={
              <Startuppage
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/ilogin"
            element={
              <InvestorLogin
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/user/register"
            element={
              <UserRegistration
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/investor/register"
            element={
              <InvestorRegistration
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route path="/objectives" element={<Objectives />} />
          <Route
            path="/investors"
            element={
              <Investor
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/investor/dashboard"
            element={
              <InvestorDashboard
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/user/dashboard"
            element={
              <StartupDashboard
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                startLoggedIn={startLoggedIn}
                setStartLoggedIn={setStartLoggedIn}
              />
            }
          />
          <Route
            path="/articles"
            element={
              <Articles/>
            }
            />
        </Routes>
        <Footer />
        <ChatBotSU />
      </BrowserRouter>
     
    </div>
  );
}

export default App
