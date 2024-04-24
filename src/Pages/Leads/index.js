import React,{ Component} from 'react'
import Leadchart from './leadchart'
import Leadlist from './leadlist'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import {Total_Leads_Icon, Appointment_Booked_Icon,Walkin_Icon, Verified_Leads_Icon,Opened_Icon,Unopened_Icon,Surgeries_Icon } from '../../Assets/Images/Icon/Admin';
function Lead() 
{
    return (
    <>
 <CRow>
 
  <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Total Leads</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Total_Leads_Icon} /></div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboardcount'>2653</div>
              </CCol>
            </CRow>
            <CRow >
            <CCol lg={7} md={8} sm={7} xs={8} xl={8}></CCol> {/* Adjusted for smaller screens */}
            <CCol lg={5} md={3} sm={6} xs={3} xl={3} style={{ color:"#FFF" , backgroundColor:"green" , borderRadius:"10px"}}>
              55%
            </CCol> {/* Adjusted for smaller screens */}
      <CCol lg={12} md={12} sm={12} xs={12} style={{padding:"10px"}}></CCol>
            </CRow>
            
          </CCardBody>
        </CCard>
  </CCol>
  <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Appointment Booked</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Appointment_Booked_Icon} /></div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboardcount'>2653</div>
              </CCol>
            </CRow>
            <CRow >
            <CCol lg={7} md={8} sm={7} xs={8} xl={8}></CCol> {/* Adjusted for smaller screens */}
            <CCol lg={5} md={3} sm={6} xs={3} xl={3} style={{ color:"#FFF" , backgroundColor:"green" , borderRadius:"10px"}}>
              55%
            </CCol> {/* Adjusted for smaller screens */}
      <CCol lg={12} md={12} sm={12} xs={12} style={{padding:"10px"}}></CCol>
            </CRow>
            
          </CCardBody>
        </CCard>
  </CCol>
  <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Walk-In</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Walkin_Icon} /></div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboardcount'>2653</div>
              </CCol>
            </CRow>
            <CRow >
            <CCol lg={7} md={8} sm={7} xs={8} xl={8}></CCol> {/* Adjusted for smaller screens */}
            <CCol lg={5} md={3} sm={6} xs={3} xl={3} style={{ color:"#FFF" , backgroundColor:"green" , borderRadius:"10px"}}>
              55%
            </CCol> {/* Adjusted for smaller screens */}
      <CCol lg={12} md={12} sm={12} xs={12} style={{padding:"10px"}}></CCol>
            </CRow>
            
          </CCardBody>
        </CCard>
  </CCol>
  <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Surgeries</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Surgeries_Icon} /></div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboardcount'>2653</div>
              </CCol>
            </CRow>
            <CRow >
            <CCol lg={7} md={8} sm={7} xs={8} xl={8}></CCol> {/* Adjusted for smaller screens */}
            <CCol lg={5} md={3} sm={6} xs={3} xl={3} style={{ color:"#FFF" , backgroundColor:"green" , borderRadius:"10px"}}>
              55%
            </CCol> {/* Adjusted for smaller screens */}
      <CCol lg={12} md={12} sm={12} xs={12} style={{padding:"10px"}}></CCol>
            </CRow>
            
          </CCardBody>
        </CCard>
  </CCol> 
  </CRow>   
       <Leadchart />
       <Leadlist />
    </>
    );
}
export default Lead;