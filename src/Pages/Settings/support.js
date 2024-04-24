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
    CFormSelect,  CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react' 
import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilSearch,cilXCircle,cilHome } from '@coreui/icons'
import {dashboard,lead,application,communication,
    templates,payment,user,settings,ticket} from '../../Assets/Images/Icon/menu';
    import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
    import 'react-tabs/style/react-tabs.css';
function Support() 
{
    return (
    <>
      <div className='faqsearchbox'>
        <div className='faqtitle'>FAQs</div>
        <div className=''>
        <div className='searchicon leftborder'><CIcon icon={cilSearch} size="lg" /></div>
        <input name="search" class="ticketsearch rightborder" placeholder="Search here"/>
        </div>
        </div>
        <CCard className="mb-4 paddingzero noborderradius">
    <CCardBody>
 
        {/* <CRow className=''>
        <CCol md={3} sm={3} className="text-center">
            <div className='supportbg'>
            <CIcon icon={ticket} size="lg" />
            <div className='supportmenu'>Login & User</div>
            </div>
        </CCol>
        <CCol md={3} sm={3} className="text-center">
            <div className='supportbg'>
            <CIcon icon={lead} size="lg" />
            <div className='supportmenu'>Leads</div>
            </div>
        </CCol>
        <CCol md={3} sm={3} className="text-center">
            <div className='supportbg'>
            <CIcon icon={communication} size="lg" />
            <div className='supportmenu'>Communication</div>
            </div>
        </CCol>
        <CCol md={3} sm={3} className="text-center">
            <div className='supportbg'>
            <CIcon icon={templates} size="lg" />
            <div className='supportmenu'>Template</div>
            </div>
        </CCol>
       </CRow>
<div className='margintop40'></div> */}
       {/* <div className=''>
        <div className='displayinlineblock supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Login & User</span></div>
        </div>
        <div className='displayinlineblock supportbgsmall hightlightbox'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Leads</span></div>
        </div>
        <div className='displayinlineblock supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Communication</span></div>
        </div>
        <div className='displayinlineblock supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Payment</span></div>
        </div>
        <div className='displayinlineblock supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Access Control</span></div>
        </div>
        <div className='displayinlineblock supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Integrations</span></div>
        </div> 
        className="supporttab paddingzero"
       </div> */}
       <Tabs>
    <TabList>
      <Tab>
        <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Login & User</span></div>
        </div>
      </Tab>
      <Tab>
        <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Leads</span></div>
        </div>
      </Tab>
      <Tab> 
        <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Communication</span></div>
        </div>
      </Tab>
      <Tab> 
        <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Payment</span></div>
        </div>
      </Tab>
      <Tab>
         <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Access Control</span></div>
        </div></Tab>
      <Tab>
      <div className='supportbgsmall'>
        <div className='supportmessage'><CIcon icon={ticket} /> <span>Integrations</span></div>
        </div>
      </Tab>
    </TabList>
    <TabPanel>
    <CAccordion alwaysOpen activeItemKey={1}>
      <CRow>
      <CCol md={12}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={12}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
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
    <CAccordion activeItemKey={2}>
      <CRow>
      <CCol md={12}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                </CCol>
                <CCol md={12}>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
                  <CAccordionBody>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>Contrary to popular belief, Lorem Ipsum is not simply random text.</CAccordionHeader>
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
    </CCardBody>
    </CCard>
    </>
    );
}
export default Support;