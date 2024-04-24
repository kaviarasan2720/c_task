import React,{ Component} from 'react'
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
    CFormInput,
    CFormLabel,
    CFormSelect,
} from '@coreui/react'
function Create_user() 
{
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Create User</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Email ID</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Phone Number</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Password</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    {/* <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Type of Access</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option></option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Permissions</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option></option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol> */}
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Role</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option></option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={8}>
    <div className="margintop20">
    <CButton className='buttonsubmit pullright'>Create User</CButton>
    </div>
    </CCol>
    </CRow>
    </CCardBody>
    </CCard>
    </>
    );
}
export default Create_user;