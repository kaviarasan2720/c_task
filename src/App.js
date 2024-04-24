import React,{ Suspense, useState} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './Assets/Styles/style.scss'


//Containers
const DefaultLayout = React.lazy(() => import('./Layouts/defaultlayout'))

// Pages
const Login = React.lazy(() => import('./Pages/Login/login'))
const Forgotpassword = React.lazy(() => import('./Pages/Login/forgot-password'))

function App() {

  return (
    <HashRouter>
    <Suspense>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/forgot-password" name="Forgot Password Page" element={<Forgotpassword />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </Suspense>
  </HashRouter>
  );
}

export default App;
