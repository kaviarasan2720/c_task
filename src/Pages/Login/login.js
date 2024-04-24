import React, { useState, useEffect, useRef } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormLabel,
    CFormCheck,
    CRow,
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CCardHeader
} from '@coreui/react'
import '../../Assets/Styles/login.scss';
import logo from './../../Assets/Images/logo-light.png'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../Config/api";
import axios from 'axios'
function Login() {
    document.title = "Login | CRM 42andmore";
    const navigate = useNavigate();

    useEffect(() => {
        // if (localStorage.getItem('UserId') !== "" && localStorage.getItem('UserName') !== "" && localStorage.getItem('UserId') != null) {
        //     navigate("/dashboard");
        // }
        // else {

        // }
        getIpaddress();
    }, []);
    const getIpaddress = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        localStorage.setItem('studentIpaddress', res.data.IPv4);
    }
    const [inputs, setInputs] = useState({
        emailId: "tamil@42andmore.com", password: "12345"
    });
    const passwordRef = useRef();
    const emailRef = useRef();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    }
    return (


        <>

            <div className="auth-page-wrapper pt-5">
                <div className="auth-one-bg-position auth-one-bg" id="auth-particles">

                    <div className="bg-overlay"></div>

                    <div className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>

                    <div className="auth-page-content">
                        <CContainer>
                            <CRow>
                                <CCol lg={12}>
                                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                                        <div>
                                            <img src={logo} alt="" width="250px;" />
                                        </div>
                                        <p className="fw-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </CCol>
                            </CRow>
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <CRow className="justify-content-center">
                                    <CCol md={8} lg={6} xl={5}>
                                        <CCard className="mt-4">
                                            <CCardBody className="p-4">
                                                <div className="text-center mt-2">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p className="text-muted">Sign in to continue to 42andmore.</p>
                                                </div>
                                                <div className="p-2 mt-4">

                                                    <div className="mb-3">
                                                        <CFormLabel htmlFor="emailId" className="form-label labelform">Email ID</CFormLabel>
                                                        <CFormInput type="text" className="form-control" id="emailId" name="emailId" ref={emailRef} value={inputs.emailId || ""} onChange={handleChange} />
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <Link to="/forgot-password" className="text-muted linenoneed">Forgot password?</Link>
                                                        </div>
                                                        <CFormLabel className="form-label labelform" htmlFor="password-input">Password</CFormLabel>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <CFormInput type="password" className="form-control" ref={passwordRef} name="password" id="password" value={inputs.password || ""} onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <CButton color="success" className="btn btn-success w-100" type="submit" >Sign In</CButton>
                                                    </div>
                                                </div>
                                            </CCardBody>
                                        </CCard>

                                    </CCol>
                                </CRow>
                            </form>
                        </CContainer>
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
