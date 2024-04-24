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
    CFormTextarea
} from '@coreui/react'
function Lead_add() 
{
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Lead Creation</div>
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
                <CFormLabel htmlFor="exampleFormControlInput1">Course Preferred</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option value="">Select Course</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
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
                <CFormLabel htmlFor="exampleFormControlInput1">Mobile Number</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Lead Quality</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option value="">Select Course</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Lead Status</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option value="">Select Course</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Publisher</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option value="">Select Course</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Lead Source</CFormLabel>
                <CFormSelect size="lg" className="" aria-label="Large select example">
                <option value="">Select Course</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Address</CFormLabel>
                <CFormTextarea aria-label="With textarea" style={{resize:'none',height:'120px'}}></CFormTextarea>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Country</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">State</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">City</CFormLabel>
                <CFormInput type="text" id="phone" name="phone"/>
            </div>
    </CCol>
    
    <CCol md={12}>
    <CButton className='buttonsubmit pullright'>Create Lead</CButton>
    </CCol>
    </CRow>
    </CCardBody>
    </CCard>
    </>
    );
}
export default Lead_add;