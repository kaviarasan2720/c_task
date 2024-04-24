import React,{ useState } from 'react'
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
    CFormLabel,
    CFormSelect,
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
} from '@coreui/react'
import Select from 'react-select';
import Switch from "react-switch";
import { Link } from "react-router-dom";
function User_access_control() 
{
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
      };
    const rolecouncellor = [
        { value: "Maharaja", label: "Maharaja", color: "#00B8D9" },
        { value: "Tamil", label: "Tamil", color: "#666666" }
      ];
  
      const roleadmin = [
        { value: "Arun Kumar", label: "Arun Kumar", rating: "Arun Kumar" },
        { value: "Ashwin", label: "Ashwin", rating: "Ashwin" }
      ];
      const groupedOptions = [
        {
          label: "Admin",
          options: roleadmin
        },
        {
          label: "Councellor",
          options: rolecouncellor
        }
      ];
      const [selectedOption, setSelectedOption] = useState(null);
    return (
    <>
      <CCard className="mb-2 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={6}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Permissions</div>
          </h4>
      </CCol>
      <CCol sm={6}>
        <div className='pullright'>
            {/* <CButton className='permissionbutton mr10'>Create Team</CButton>  */}
            <Link to="/user/access-control/create"><CButton className='permissionbutton'>Create Role</CButton></Link>
        </div>
      </CCol>
      </CRow>
    </CCardHeader>
    </CCard>
    <CCard className="mb-4 paddingzero">
    <CCardBody>
 
    <CRow>
        <CCol md={3}>
            <div className="mb-3 calendarform">
                <CFormLabel htmlFor="exampleFormControlInput1">Update permission for:</CFormLabel>
              <Select className="mb-3"
          value={selectedOption}
          onChange={setSelectedOption}
          options={groupedOptions}
        />
        
            </div>
      </CCol>
      <CCol md={9} className=''></CCol>
              </CRow>
              <CAccordion activeItemKey={1}>
      <CRow>
      <CCol md={12}>
                <CAccordionItem itemKey={1} >
                  <CAccordionHeader><b>Dashboard Menu</b></CAccordionHeader>
                  <CAccordionBody>
                  <CRow className='boldfont'>
                    <CCol md={2} sm={2}>Module</CCol>
                    <CCol md={2} sm={2} className="text-center">All</CCol>
                    <CCol md={2} sm={2} className="text-center">Add</CCol>
                    <CCol md={2} sm={2} className="text-center">Edit</CCol>
                    <CCol md={2} sm={2} className="text-center">Delete</CCol>
                    <CCol md={2} sm={2} className="text-center">View</CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Admin</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Marketing</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Counsellor</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Target/Achieved</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>User Analytics</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Website Analytics</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Lead Manager</CAccordionHeader>
                  <CAccordionBody>
                  <CRow className='boldfont'>
                    <CCol md={2} sm={2}>Module</CCol>
                    <CCol md={2} sm={2} className="text-center">All</CCol>
                    <CCol md={2} sm={2} className="text-center">Add</CCol>
                    <CCol md={2} sm={2} className="text-center">Edit</CCol>
                    <CCol md={2} sm={2} className="text-center">Delete</CCol>
                    <CCol md={2} sm={2} className="text-center">View</CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Lead</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  <div className='margintop15'></div>
                  <CRow>
                    <CCol md={2} sm={2}>Raw Upload</CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                    <CCol md={2} sm={2}>
                        <div className="text-center"><Switch onChange={handleChange} checked={checked} className="react-switch" /></div>
                    </CCol>
                  </CRow>
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
              <CRow>
      <CCol sm={12}>
        <div className='pullright'><CButton className='permissionbutton w100'>Submit</CButton></div>
      </CCol>
      </CRow>
    </CCardBody>
    </CCard>
    </>
    );
}
export default User_access_control;