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
import {pencil} from '../Dashboard/icon';
import profile from './../../Assets/Images/profile.jpg'
function Profile(){

    /*photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file);
      }*/
      const ImgUpload =({
        onChange,
        src
      })=>
      <div>
        <label htmlFor="photo-upload" className="custom-file-upload fas imgprofile">
          <div className="img-wrap img-upload" >
            <img for="photo-upload" src={src}/>
          </div>
          <input id="photo-upload" type="file" onChange={onChange}/> 
        </label>
        <label htmlFor="photo-upload-pencil" className='imgprofile' >
            <div className='pencilicon' onChange={onChange}><input id="photo-upload-pencil" type="file" onChange={onChange}/> <img src={pencil}/></div></label>
        
      </div>
        
            
      const Edit =({
        onSubmit,
        children,
      })=>
        <div className="img-card">
          <form onSubmit={onSubmit}>
              {children}
          </form>
        </div>


  const [imagePreviewUrl, setimagePreviewUrl] = useState(profile);
  const [file, setFile] = useState('');

  const photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setimagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(file);
  }

return (
    <>
        <CRow>
          <CCard className="mb-4 paddingzero profilefont">
            <CCardHeader className='supporttitle'>Personal information</CCardHeader>
            <CCardBody>
            <CRow>
                <CCol md={3}>
                <div>
                <Edit>
                <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
                </Edit>
                </div>
                    
                </CCol>
                <CCol md={9}>
                    <CRow>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">First Name</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Last Name</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Email ID</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Mobile Number</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={12}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Address</CFormLabel>
                    <CFormTextarea id="exampleFormControlTextarea1" rows="3" style={{resize:"none"}}></CFormTextarea>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">State</CFormLabel>
                    <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
                    <option></option>
                    <option value="1">Tamil Nadu</option>
                    <option value="2">Assam</option>
                    <option value="3">Delhi</option>
                    </CFormSelect>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">City</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Pincode</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={6}>
                    <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Country</CFormLabel>
                    <CFormInput type="name" id="name" name="name"/>
                    </div>
                    </CCol>
                    <CCol md={12} ><p className='completeapplication'>
        <Link to="#"><div className='nextbutton pullright'>Save Changes</div></Link>
        </p>
      </CCol>
                    </CRow>
                </CCol>
      </CRow>
            </CCardBody>
            </CCard>
        </CRow>
        {/*<CRow>
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
        </CRow>*/}
      </>
);
}
export default Profile;