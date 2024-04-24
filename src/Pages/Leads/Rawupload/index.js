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
    CFormLabel,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
} from '@coreui/react'
import {
    cilBell,
    cilNotes,
    cilAvTimer,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilUser,
    cilCloudDownload,
    cilEducation,
    cilList
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {download_white,upload_white} from '../../../Assets/Images/Lead/menu';
function Lead_raw_upload() 
{
    return (
    <>
       <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
        <CCol sm={12}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Raw upload</div>
          </h4>
        </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
      <CCol md={6}>
            <div className="mb-3 leadboxdesign">
                <CFormLabel htmlFor="exampleFormControlInput1"><div className='downloadbox'>
                    <CIcon icon={download_white} customClassName="nav-icon"/></div>
                    <div className='template'><div>Download Template</div></div></CFormLabel>
                <div className="form-group col-md-12 margintop4">
                    <label htmlFor="images" className="drop-container">
                        <span className="drop-title">Download template to import leads</span>
                        <CButton className='downloadbutton'>Download</CButton>
                    </label>
                </div>
            </div>
      </CCol>
      <CCol md={6}>
            <div className="mb-3 leadboxdesign">
                <CFormLabel htmlFor="exampleFormControlInput1"><div className='downloadbox'>
                    <CIcon icon={upload_white} customClassName="nav-icon"/></div><div className='template'>Upload Leads</div> </CFormLabel>
                <div className="form-group col-md-12 margintop4">
                    <label htmlFor="images" className="drop-container">
                        <span className="drop-title">Drag and Drop</span>
                        <span className="drop-title-or">or</span>
                        <input type="file" id="images" accept="image/*" required/>
                    </label>
                </div>
            </div>
      </CCol>
      </CRow>
        </CCardBody>
      </CCard>
    </>
    );
}
export default Lead_raw_upload;