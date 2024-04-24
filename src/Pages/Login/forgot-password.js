import React from 'react'
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
import { Link,useNavigate  } from "react-router-dom";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function Forgotpassword() {
    const navigate = useNavigate();
    const dashboard = () => {
        navigate("/dashboard");
    };
    document.title="Forgot Password | CRM 42andmore";
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
                                        <img src={logo} alt="" width="200px;" />
                                    </div>
                                    <p className="fw-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </CCol>
                        </CRow>

                        <CRow className="justify-content-center">
                            <CCol md={8} lg={6} xl={5}>
                                <CCard className="mt-4">
                                    <CCardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Forgot Password?</h5>
                                            <p className="text-muted">Reset password with 42andmore</p>
                                            <lord-icon
                                            src="https://cdn.lordicon.com/rhvddzym.json"
                                            trigger="loop"
                                            colors="primary:#0ab39c"
                                            className="avatar-xl"
                                            style={{ width: "120px", height: "120px" }}>
                                        </lord-icon>
                                        </div>
                                        <div class="alertbox alert-borderless alert-warning text-center mb-2 mx-2 alert alert-success fade show" role="alert">Enter your email and instructions will be sent to you!</div>
                                        <div className="p-2 mt-2">
                                            <form action="#">

                                                <div className="mb-2">
                                                    <CFormLabel htmlFor="username" className="form-label labelform">Email ID</CFormLabel>
                                                    <CFormInput type="text" className="form-control" id="username" placeholder="Enter email" />
                                                </div>

                                                <div className="mt-3">
                                                    <CButton color="success" className="btn btn-success w-100" type="submit">Send Reset Link</CButton>
                                                </div>
                                            </form>
                                        </div>
                                    </CCardBody>
                                </CCard>
                                <div class="mt-4 text-center">
                                  <p class="mb-0">Wait, I remember my password...  &nbsp;
                                  <Link to="/login" className="text-decoration-underline text-primary">Click here</Link>
                                  </p>
                                </div>

                            </CCol>
                        </CRow>
                    </CContainer>
                </div>

                </div>
            </div>
    </>
  )
}

export default Forgotpassword
