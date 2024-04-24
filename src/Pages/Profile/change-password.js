import React,{ Component, useState} from 'react'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CFormCheck,
    CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter
} from '@coreui/react'
import { Link } from "react-router-dom";
function Profile_Changepassword(){
return (
    <>
        <CRow>
          <CCard className="mb-4 paddingzero">
            <CCardHeader className='supporttitle'>Change Password</CCardHeader>
            <CCardBody>
            <CRow>
      <CCol md={4}>
            <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Old Password</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
      </CCol>
      <CCol md={4}>
            <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">New Password</CFormLabel>
                <CFormInput type="text" id="dob" name="dob"/>
            </div>
      </CCol>
      <CCol md={4}>
            <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Confirm Password</CFormLabel>
                <CFormInput type="text" id="dob" name="dob"/>
            </div>
      </CCol>
      <CCol md={12} ><p className='completeapplication'>
        <Link to="#"><div className='nextbutton pullright' style={{width:'200px'}}>Update Password</div></Link>
        </p>
      </CCol>
      </CRow>
            </CCardBody>
            </CCard>
        </CRow>
      </>
);
}
export default Profile_Changepassword;