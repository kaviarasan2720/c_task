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
import {message} from '../../Assets/Images/User/menu';
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilSearch,cilXCircle,cilHome } from '@coreui/icons'
function Integrations() 
{
    
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={9}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Manage</div>
          </h4>
      </CCol>
      <CCol sm={3}>
      <div className=''>
        <div className='searchicon'><CIcon icon={cilSearch} size="lg" /></div>
        <input name="search" class="ticketsearch" placeholder="Search here" style={{width:"88%"}}/>
        {/* <div className='searchicon'><CIcon icon={cilSearch} size="lg" /></div> */}
        </div>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
      <CCol md={12} className="">
      <Tabs>
    <TabList>
      <Tab>All Ticket</Tab>
      <Tab>Assigned</Tab>
      <Tab>Unassgined</Tab>
    </TabList>
<div className='margintop20'></div>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
    <CRow>
      <CCol sm={12} md={12}>
        <div className='userboxdesign'>
        <div className='ticketpadding'>
        <div className='tickettitle'>Cannot Access the system <span>ID 21354</span></div>
        <div className='ticketdate'>Oct 24,2022</div>
        <div className='ticketdesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>
         <div className='ticketpriority highcolor'>High</div><div className='ticketmessage'><CIcon icon={message} /> <span>2</span></div>
        </div>
        </div>
      </CCol>
      <CCol sm={12} md={12}>
        <div className='userboxdesign'>
        <div className='ticketpadding'>
        <div className='tickettitle'>Refund Not Initiated<span>ID 21354</span></div>
        <div className='ticketdate'>Oct 24,2022</div>
        <div className='ticketdesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>
         <div className='ticketpriority mediumcolor'>Medium</div><div className='ticketmessage'><CIcon icon={message} /> <span>6</span></div>
        </div>
        </div>
      </CCol>
      <CCol sm={12} md={12}>
        <div className='userboxdesign'>
        <div className='ticketpadding'>
        <div className='tickettitle'>Free Delivery <span>ID 21354</span></div>
        <div className='ticketdate'>Oct 24,2022</div>
        <div className='ticketdesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>
         <div className='ticketpriority lowcolor'>Low</div><div className='ticketmessage'><CIcon icon={message} /> <span>4</span></div>
        </div>
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