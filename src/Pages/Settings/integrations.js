import React,{ Component,useState} from 'react'
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
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
} from '@coreui/react'
import Switch from "react-switch";
import zapier from '../../Assets/Images/zapier.png'
import mailchimp from '../../Assets/Images/mailchimp.png'
import dropbox from '../../Assets/Images/dropbox.png'
import asana from '../../Assets/Images/asana.png'
import googledrive from '../../Assets/Images/googledrive.png'
import trello from '../../Assets/Images/trello.png'
import {message,pencil,edit} from '../../Assets/Images/User/menu';
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function Integrations() 
{
    const [checked, setChecked] = useState(false);
    const [onechecked, setoneChecked] = useState(true);
    const [twochecked, settwoChecked] = useState(false);
    const [threechecked, setthreeChecked] = useState(false);
    const [fourchecked, setfourChecked] = useState(false);
    const [fivechecked, setfiveChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  const onehandleChange = nextChecked => {
    setoneChecked(nextChecked);
  };
  const twohandleChange = nextChecked => {
    settwoChecked(nextChecked);
  };
  const threehandleChange = nextChecked => {
    setthreeChecked(nextChecked);
  };
  const fourhandleChange = nextChecked => {
    setfourChecked(nextChecked);
  };
  const fivehandleChange = nextChecked => {
    setfiveChecked(nextChecked);
  };
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Integrations</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
      <CCol md={12} className="">
      <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Push</Tab>
      <Tab>Ads</Tab>
      <Tab>3rd Party</Tab>
      <Tab>Tele Tracking</Tab>
      <Tab>Email</Tab>
      <Tab>Others</Tab>
    </TabList>
<div className='margintop20'></div>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
    <CRow>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Zapier</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">zapier.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={zapier} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Mailchimp</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">mailchimp.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={mailchimp} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={onehandleChange}
          checked={onechecked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Dropbox</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">dropbox.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={dropbox} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={twohandleChange}
          checked={twochecked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Asana</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">asana.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={asana} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={threehandleChange}
          checked={threechecked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Google Drive</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">googledrive.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={googledrive} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={fourhandleChange}
          checked={fourchecked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign'>
        <CRow className='integrationbody'>
        <CCol md={9}>
        <div className='integrationtitle'>Trello</div>
        <div className='integrationlink'><a href="https://www.42andmore.com/" target="_blank">trello.com</a></div>
        <div className='integrationtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
       
        </CCol>
        <CCol md={3} >
            <div className="integrationimgbox"><center><img src={trello} /></center></div>
        </CCol>
        </CRow>
        <div className='userline marginzero'></div>
        <CRow className='integrationdiv'>
        <CCol md={6} className=""><CButton className='buttonsubmit marginzero'>View Integration</CButton></CCol>
        <CCol md={6} className=""><Switch
          onChange={fivehandleChange}
          checked={fivechecked}
          className="react-switch pullright margintop5 marginright15"
        /> </CCol>
        </CRow>
        </div>
      </CCol>
      </CRow>
    </CAccordion>
    </TabPanel>
  </Tabs>
      </CCol>
      </CRow>   
    
    </CCardBody>
    </CCard>
    </>
    );
}
export default Integrations;