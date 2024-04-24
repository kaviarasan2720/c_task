import React,{ Component} from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {telephone} from '../../Assets/Images/telephone.js';
import {email} from '../../Assets/Images/email.js';
import {location} from '../../Assets/Images/location.js';
import Iframe from 'react-iframe'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function Support() 
{
    return (
      <>
      <CRow>
          <CCard className="mb-4 paddingzero">
            <CCardHeader className='supporttitle'>Contact Us</CCardHeader>
            <CCardBody>
            <CRow>
            <div className='margintop10'></div>
      <CCol md={6} >
        <div className="" >
        <div className='contactheading marginleft20'>To find us</div>
        <div className='contactparagraph marginleft20'>Our team is waiting to help you!</div>
        <div className='margintop20'></div>
        <div className='telephonebox'>
            <CRow>
                <CCol md={1} xs={2} className="boxicon"><CIcon icon={telephone} size="lg" /></CCol>
                <CCol md={11} xs={10}> <div className='telephonetext'>04346-232323, +9198651065366</div></CCol>
            </CRow>
        </div>
        <div className='telephonebox'>
            <CRow>
                <CCol md={1} xs={2} className="boxicon"><CIcon icon={email} size="lg" /></CCol>
                <CCol md={11} xs={10} > <div className='telephonetext'>support@42andmore.com</div></CCol>
            </CRow>
        </div>
        <div className='telephonebox'>
            <CRow>
                <CCol md={1} xs={2}  className="boxicon" style={{marginTop: "8px"}}><CIcon icon={location} size="lg" /></CCol>
                <CCol md={11} xs={10} > <div className='telephonetext'>No: 29/1, Venkataraman St, Parthasarathi Puram, T. Nagar,<br></br> Chennai, Tamil Nadu 600017</div></CCol>
            </CRow>
        </div>
        </div>
      </CCol>
      <CCol md={6} >
        <div className="mobilemargintop10" >
        <div className='contactheading'>Location</div>
        <div className='margintop20'></div>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8955943547435!2d80.2391240148227!3d13.042317190809507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526644b6a554ff%3A0xf2ca790ae03c3db2!2s42andmore!5e0!3m2!1sen!2sin!4v1668583854272!5m2!1sen!2sin"
        width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
      </CCol>
      </CRow>
      <div className='margintop40'></div>
      <CRow>
      <CCol md={12} ><p className='contactheading marginleft20'>FAQ’s</p></CCol>
      <CCol md={12} className="customizemargin">
      <Tabs>
    <TabList>
      <Tab>General</Tab>
      <Tab>Application</Tab>
      <Tab>Payment</Tab>
      <Tab>Appoinment</Tab>
      <Tab>Location</Tab>
    </TabList>

    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={6}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={6}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
    </TabPanel>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={6}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={6}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
    </TabPanel>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={6}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={6}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
    </TabPanel>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={6}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={6}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
    </TabPanel>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={6}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={6}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>How to uplode the documents in the fiels?</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>How to select the course? </CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
              </CRow>
              </CAccordion>
    </TabPanel>
  </Tabs>
      </CCol>
      </CRow>

            </CCardBody>
          </CCard>
      </CRow>
      </>
      );
}
export default Support;