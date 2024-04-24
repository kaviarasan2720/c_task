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
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CFormCheck,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,CAccordion
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions,cibMessenger } from '@coreui/icons'
import { FaAddressBook } from "react-icons/fa";
import {message} from '../../Assets/Images/User/menu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Rightdetail() 
{
    const [startDate, setStartDate] = useState(new Date());
    const setcolor = {
      color: "#0000"
    };
    return (
        <>
<CCol sm={9} md={9} className='leadpagerighttab setpaddingdesktop'>
            <CCard className="mb-4 paddingzero">
    <CCardBody>
<Tabs>
    <TabList>
      <Tab>Details</Tab>
      <Tab>Notes</Tab>
      <Tab>Activity</Tab>
      <Tab>Communication</Tab>
      <Tab>Payments</Tab>
      <Tab>Attachments</Tab>
      <Tab>Tickets</Tab>
    </TabList>
    <TabPanel>
        <div>
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
        </div>
    </TabPanel>
    <TabPanel>
    <div className='margintop20'></div>
        <div className=''>
            
            <CRow>
        <CCol md={8}>
        <CFormTextarea aria-label="With textarea" style={{resize:'none',height:'120px'}}></CFormTextarea> 
        </CCol>
        <CCol md={4}>
        <CFormCheck id="flexCheckDefault" label="Add a Follow-up: Date & Time picker" className='margintop2' />
        <div className='margintop10'></div>
        <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}                  
                />
        <div className='margintop5'></div>
        <CButton className='buttonsubmit pullright'>Create Notes</CButton>
        </CCol>
    </CRow>
        </div>
        <div className='margintop10'></div>
        <div className=''>
            <div className='allnotes'>All Notes</div>
            <CRow>
        <CCol md={12} sm={12}>
         <div className='notebox noteboxblue'>
         <CRow>
            <CCol md={6} sm={6}><div className='notestextdate'>
            Added On: 21 Dec 2022, 11:24 AM
            </div></CCol>
            <CCol md={6} sm={6}><div className='notestextdate pullright'>
            <b>Followup: 21 Dec 2022, 11:24 AM</b>
            </div></CCol>
            </CRow>
            <div className='notestext'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. 
            </div>
         </div>
        </CCol>
        <CCol md={12} sm={12}>
         <div className='notebox noteboxblue'>
         <CRow>
            <CCol md={6} sm={6}><div className='notestextdate'>
            Added On: 21 Dec 2022, 11:24 AM
            </div></CCol>
            <CCol md={6} sm={6}><div className='notestextdate pullright'>
            <b>Followup: 21 Dec 2022, 11:24 AM</b>
            </div></CCol>
            </CRow>
            <div className='notestext'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. 
            </div>
         </div>
        </CCol>
        <CCol md={12} sm={12}>
         <div className='notebox noteboxblue'>
         <CRow>
            <CCol md={6} sm={6}><div className='notestextdate'>
            Added On: 21 Dec 2022, 11:24 AM
            </div></CCol>
            <CCol md={6} sm={6}><div className='notestextdate pullright'>
            <b>Followup: 21 Dec 2022, 11:24 AM</b>
            </div></CCol>
            </CRow>
            <div className='notestext'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. 
            </div>
         </div>
        </CCol>
        <CCol md={12} sm={12}>
         <div className='notebox noteboxblue'>
         <CRow>
            <CCol md={6} sm={6}><div className='notestextdate'>
            Added On: 21 Dec 2022, 11:24 AM
            </div></CCol>
            <CCol md={6} sm={6}><div className='notestextdate pullright'>
            <b>Followup: 21 Dec 2022, 11:24 AM</b>
            </div></CCol>
            </CRow>
            <div className='notestext'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. 
            </div>
         </div>
        </CCol>
    </CRow>
        </div>
    </TabPanel>
    <TabPanel>
      <div className='margintop20'></div>
    <VerticalTimeline lineColor={ '#E4E7EB' }>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className='pullright'>
      <span className='timedisplay'>10</span>
    </div>
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
    <div className='pullright margintop5'>
      <span className='calldisplay'>Call Recording</span>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className=''>
      <span className='timedisplay'>10</span>
    </div>
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
    <div className='margintop5'>
      <span className='calldisplay'>Call Recording</span>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className='pullright'>
      <span className='timedisplay'>10</span>
    </div>
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
    <div className='pullright margintop5'>
      <span className='calldisplay'>Call Recording</span>
    </div>
  </VerticalTimelineElement>
  
  
  
  
</VerticalTimeline>

    </TabPanel>
    <TabPanel>
    <div className='margintop20'></div>
    <VerticalTimeline lineColor={ '#E4E7EB' } layout={ '1-column-left' }>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffffff', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="21 Dec 2022, 11:24 AM"
    dateClassName={ setcolor }
    iconStyle={{ background: '#329DFF', color: '#fff' }}
    icon={<FaAddressBook />}
  >
    <div className='clearfix'></div>
    <p className="timelinetext">
    Telecaller 1 scheduled an sms to the user1 based on their last conversation
    </p>
  </VerticalTimelineElement>
  
  
  
  
</VerticalTimeline>

    </TabPanel>
    <TabPanel>
    <div className='margintop10'></div>
        <CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="leadheadcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Payment ID</CTableHeaderCell>
                    <CTableHeaderCell>Payment Mode</CTableHeaderCell>
                    <CTableHeaderCell>Amount</CTableHeaderCell>
                    <CTableHeaderCell>Paid for</CTableHeaderCell>
                    <CTableHeaderCell>Payment Date</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>8596547858</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell>1000</CTableDataCell>
                      <CTableDataCell>B.E CSC</CTableDataCell>
                      <CTableDataCell>11 Dec 2022</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Paid</span></CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Download</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>8923547858</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell>1000</CTableDataCell>
                      <CTableDataCell>B.E CSC</CTableDataCell>
                      <CTableDataCell>13 Dec 2022</CTableDataCell>
                      <CTableDataCell><span className="paymentfailed">Failed</span></CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Download</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>7896532147</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell>1000</CTableDataCell>
                      <CTableDataCell>B.E CSC</CTableDataCell>
                      <CTableDataCell>25 Dec 2022</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Paid</span></CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Download</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    
                    </CTableBody>
                    </CTable>
    </TabPanel>
    <TabPanel>
        <div className='margintop10'></div>
        <div className='attachmenttitle'>Recent Upload</div>
        
        <div className='margintop10'></div>
       
            <CRow>
            <CCol md={3} sm={3}>
                <div className='recentuploadbox'>
        <div className='pullright'>
        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </div>
        <div className='margintop20'></div>
        <div className='text-center'>
            <div>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.2225 29.25L42.25 11.2775C41.7933 10.8202 41.1737 10.5631 40.5275 10.5625H26C23.6296 10.5625 21.3563 11.5041 19.6802 13.1802C18.0041 14.8563 17.0625 17.1296 17.0625 19.5V58.5C17.0625 60.8704 18.0041 63.1437 19.6802 64.8198C21.3563 66.4959 23.6296 67.4375 26 67.4375H52C54.3704 67.4375 56.6437 66.4959 58.3198 64.8198C59.9959 63.1437 60.9375 60.8704 60.9375 58.5V30.875C60.9119 30.2627 60.6566 29.6825 60.2225 29.25ZM43.0625 18.8825L52.6175 28.4375H43.0625V18.8825ZM52 62.5625H26C24.9226 62.5625 23.8892 62.1345 23.1274 61.3726C22.3655 60.6108 21.9375 59.5774 21.9375 58.5V19.5C21.9375 18.4226 22.3655 17.3892 23.1274 16.6274C23.8892 15.8655 24.9226 15.4375 26 15.4375H38.1875V30.875C38.1959 31.5188 38.4554 32.134 38.9107 32.5893C39.366 33.0446 39.9812 33.3041 40.625 33.3125H56.0625V58.5C56.0625 59.5774 55.6345 60.6108 54.8726 61.3726C54.1108 62.1345 53.0774 62.5625 52 62.5625Z" fill="#212121"/>
        <path d="M43.8424 48.2626C41.844 47.0085 40.34 45.1028 39.5849 42.8676C40.2847 40.7765 40.4959 38.5529 40.2024 36.3676C40.1087 35.817 39.8402 35.3112 39.4366 34.9252C39.0331 34.5391 38.5159 34.2932 37.9618 34.2239C37.4076 34.1547 36.8459 34.2657 36.3597 34.5405C35.8735 34.8154 35.4888 35.2395 35.2624 35.7501C34.8924 38.3774 35.1714 41.0554 36.0749 43.5501C34.8406 46.4337 33.463 49.2538 31.9474 52.0001C29.6399 53.3001 26.4874 55.2501 25.9999 57.4926C25.6099 59.3126 29.0224 63.9926 34.8399 53.8526C37.4267 52.8923 40.0762 52.1105 42.7699 51.5126C44.7611 52.651 46.9823 53.3285 49.2699 53.4951C49.7952 53.5087 50.3128 53.3667 50.7576 53.087C51.2024 52.8073 51.5546 52.4024 51.7699 51.9231C51.9853 51.4438 52.0541 50.9116 51.9678 50.3933C51.8815 49.875 51.6439 49.3937 51.2849 49.0101C49.9199 47.6126 45.8574 48.0026 43.8424 48.2626ZM28.3074 58.0126C29.2182 56.454 30.421 55.0857 31.8499 53.9826C29.6399 57.4926 28.3074 58.1101 28.3074 58.0451V58.0126ZM37.7974 35.8801C38.6424 35.8801 38.5774 39.6176 37.9924 40.6251C37.5517 39.0924 37.4849 37.4764 37.7974 35.9126V35.8801ZM34.9699 51.7401C36.071 49.731 37.0268 47.6457 37.8299 45.5001C38.6909 47.1022 39.8883 48.4992 41.3399 49.5951C39.1594 50.1412 37.0285 50.8696 34.9699 51.7726V51.7401ZM50.2449 51.1551C50.2449 51.1551 49.6599 51.8701 45.9224 50.2451C49.9849 49.9851 50.6674 50.9276 50.2449 51.1876V51.1551Z" fill="#212121"/>
        </svg>
        </div>
        <div className='documentname'>10 Mark Sheet</div>
        <div className='margintop10'></div>
        <div className='filesize'>1.3 MB</div>
        </div>
        </div>
            </CCol>
            <CCol md={3} sm={3}>
                <div className='recentuploadbox'>
        <div className='pullright'>
        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </div>
        <div className='margintop20'></div>
        <div className='text-center'>
            <div>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.2225 29.25L42.25 11.2775C41.7933 10.8202 41.1737 10.5631 40.5275 10.5625H26C23.6296 10.5625 21.3563 11.5041 19.6802 13.1802C18.0041 14.8563 17.0625 17.1296 17.0625 19.5V58.5C17.0625 60.8704 18.0041 63.1437 19.6802 64.8198C21.3563 66.4959 23.6296 67.4375 26 67.4375H52C54.3704 67.4375 56.6437 66.4959 58.3198 64.8198C59.9959 63.1437 60.9375 60.8704 60.9375 58.5V30.875C60.9119 30.2627 60.6566 29.6825 60.2225 29.25ZM43.0625 18.8825L52.6175 28.4375H43.0625V18.8825ZM52 62.5625H26C24.9226 62.5625 23.8892 62.1345 23.1274 61.3726C22.3655 60.6108 21.9375 59.5774 21.9375 58.5V19.5C21.9375 18.4226 22.3655 17.3892 23.1274 16.6274C23.8892 15.8655 24.9226 15.4375 26 15.4375H38.1875V30.875C38.1959 31.5188 38.4554 32.134 38.9107 32.5893C39.366 33.0446 39.9812 33.3041 40.625 33.3125H56.0625V58.5C56.0625 59.5774 55.6345 60.6108 54.8726 61.3726C54.1108 62.1345 53.0774 62.5625 52 62.5625Z" fill="#212121"/>
        <path d="M43.8424 48.2626C41.844 47.0085 40.34 45.1028 39.5849 42.8676C40.2847 40.7765 40.4959 38.5529 40.2024 36.3676C40.1087 35.817 39.8402 35.3112 39.4366 34.9252C39.0331 34.5391 38.5159 34.2932 37.9618 34.2239C37.4076 34.1547 36.8459 34.2657 36.3597 34.5405C35.8735 34.8154 35.4888 35.2395 35.2624 35.7501C34.8924 38.3774 35.1714 41.0554 36.0749 43.5501C34.8406 46.4337 33.463 49.2538 31.9474 52.0001C29.6399 53.3001 26.4874 55.2501 25.9999 57.4926C25.6099 59.3126 29.0224 63.9926 34.8399 53.8526C37.4267 52.8923 40.0762 52.1105 42.7699 51.5126C44.7611 52.651 46.9823 53.3285 49.2699 53.4951C49.7952 53.5087 50.3128 53.3667 50.7576 53.087C51.2024 52.8073 51.5546 52.4024 51.7699 51.9231C51.9853 51.4438 52.0541 50.9116 51.9678 50.3933C51.8815 49.875 51.6439 49.3937 51.2849 49.0101C49.9199 47.6126 45.8574 48.0026 43.8424 48.2626ZM28.3074 58.0126C29.2182 56.454 30.421 55.0857 31.8499 53.9826C29.6399 57.4926 28.3074 58.1101 28.3074 58.0451V58.0126ZM37.7974 35.8801C38.6424 35.8801 38.5774 39.6176 37.9924 40.6251C37.5517 39.0924 37.4849 37.4764 37.7974 35.9126V35.8801ZM34.9699 51.7401C36.071 49.731 37.0268 47.6457 37.8299 45.5001C38.6909 47.1022 39.8883 48.4992 41.3399 49.5951C39.1594 50.1412 37.0285 50.8696 34.9699 51.7726V51.7401ZM50.2449 51.1551C50.2449 51.1551 49.6599 51.8701 45.9224 50.2451C49.9849 49.9851 50.6674 50.9276 50.2449 51.1876V51.1551Z" fill="#212121"/>
        </svg>
        </div>
        <div className='documentname'>ID Proof</div>
        <div className='margintop10'></div>
        <div className='filesize'>1.3 MB</div>
        </div>
        </div>
            </CCol>
            <CCol md={3} sm={3}>
                <div className='recentuploadbox'>
        <div className='pullright'>
        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </div>
        <div className='margintop20'></div>
        <div className='text-center'>
            <div>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.2225 29.25L42.25 11.2775C41.7933 10.8202 41.1737 10.5631 40.5275 10.5625H26C23.6296 10.5625 21.3563 11.5041 19.6802 13.1802C18.0041 14.8563 17.0625 17.1296 17.0625 19.5V58.5C17.0625 60.8704 18.0041 63.1437 19.6802 64.8198C21.3563 66.4959 23.6296 67.4375 26 67.4375H52C54.3704 67.4375 56.6437 66.4959 58.3198 64.8198C59.9959 63.1437 60.9375 60.8704 60.9375 58.5V30.875C60.9119 30.2627 60.6566 29.6825 60.2225 29.25ZM43.0625 18.8825L52.6175 28.4375H43.0625V18.8825ZM52 62.5625H26C24.9226 62.5625 23.8892 62.1345 23.1274 61.3726C22.3655 60.6108 21.9375 59.5774 21.9375 58.5V19.5C21.9375 18.4226 22.3655 17.3892 23.1274 16.6274C23.8892 15.8655 24.9226 15.4375 26 15.4375H38.1875V30.875C38.1959 31.5188 38.4554 32.134 38.9107 32.5893C39.366 33.0446 39.9812 33.3041 40.625 33.3125H56.0625V58.5C56.0625 59.5774 55.6345 60.6108 54.8726 61.3726C54.1108 62.1345 53.0774 62.5625 52 62.5625Z" fill="#212121"/>
        <path d="M43.8424 48.2626C41.844 47.0085 40.34 45.1028 39.5849 42.8676C40.2847 40.7765 40.4959 38.5529 40.2024 36.3676C40.1087 35.817 39.8402 35.3112 39.4366 34.9252C39.0331 34.5391 38.5159 34.2932 37.9618 34.2239C37.4076 34.1547 36.8459 34.2657 36.3597 34.5405C35.8735 34.8154 35.4888 35.2395 35.2624 35.7501C34.8924 38.3774 35.1714 41.0554 36.0749 43.5501C34.8406 46.4337 33.463 49.2538 31.9474 52.0001C29.6399 53.3001 26.4874 55.2501 25.9999 57.4926C25.6099 59.3126 29.0224 63.9926 34.8399 53.8526C37.4267 52.8923 40.0762 52.1105 42.7699 51.5126C44.7611 52.651 46.9823 53.3285 49.2699 53.4951C49.7952 53.5087 50.3128 53.3667 50.7576 53.087C51.2024 52.8073 51.5546 52.4024 51.7699 51.9231C51.9853 51.4438 52.0541 50.9116 51.9678 50.3933C51.8815 49.875 51.6439 49.3937 51.2849 49.0101C49.9199 47.6126 45.8574 48.0026 43.8424 48.2626ZM28.3074 58.0126C29.2182 56.454 30.421 55.0857 31.8499 53.9826C29.6399 57.4926 28.3074 58.1101 28.3074 58.0451V58.0126ZM37.7974 35.8801C38.6424 35.8801 38.5774 39.6176 37.9924 40.6251C37.5517 39.0924 37.4849 37.4764 37.7974 35.9126V35.8801ZM34.9699 51.7401C36.071 49.731 37.0268 47.6457 37.8299 45.5001C38.6909 47.1022 39.8883 48.4992 41.3399 49.5951C39.1594 50.1412 37.0285 50.8696 34.9699 51.7726V51.7401ZM50.2449 51.1551C50.2449 51.1551 49.6599 51.8701 45.9224 50.2451C49.9849 49.9851 50.6674 50.9276 50.2449 51.1876V51.1551Z" fill="#212121"/>
        </svg>
        </div>
        <div className='documentname'>10 Mark Sheet</div>
        <div className='margintop10'></div>
        <div className='filesize'>1.3 MB</div>
        </div>
        </div>
            </CCol>
            <CCol md={3} sm={3}>
                <div className='recentuploadbox'>
        <div className='pullright'>
        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </div>
        <div className='margintop20'></div>
        <div className='text-center'>
            <div>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.2225 29.25L42.25 11.2775C41.7933 10.8202 41.1737 10.5631 40.5275 10.5625H26C23.6296 10.5625 21.3563 11.5041 19.6802 13.1802C18.0041 14.8563 17.0625 17.1296 17.0625 19.5V58.5C17.0625 60.8704 18.0041 63.1437 19.6802 64.8198C21.3563 66.4959 23.6296 67.4375 26 67.4375H52C54.3704 67.4375 56.6437 66.4959 58.3198 64.8198C59.9959 63.1437 60.9375 60.8704 60.9375 58.5V30.875C60.9119 30.2627 60.6566 29.6825 60.2225 29.25ZM43.0625 18.8825L52.6175 28.4375H43.0625V18.8825ZM52 62.5625H26C24.9226 62.5625 23.8892 62.1345 23.1274 61.3726C22.3655 60.6108 21.9375 59.5774 21.9375 58.5V19.5C21.9375 18.4226 22.3655 17.3892 23.1274 16.6274C23.8892 15.8655 24.9226 15.4375 26 15.4375H38.1875V30.875C38.1959 31.5188 38.4554 32.134 38.9107 32.5893C39.366 33.0446 39.9812 33.3041 40.625 33.3125H56.0625V58.5C56.0625 59.5774 55.6345 60.6108 54.8726 61.3726C54.1108 62.1345 53.0774 62.5625 52 62.5625Z" fill="#212121"/>
        <path d="M43.8424 48.2626C41.844 47.0085 40.34 45.1028 39.5849 42.8676C40.2847 40.7765 40.4959 38.5529 40.2024 36.3676C40.1087 35.817 39.8402 35.3112 39.4366 34.9252C39.0331 34.5391 38.5159 34.2932 37.9618 34.2239C37.4076 34.1547 36.8459 34.2657 36.3597 34.5405C35.8735 34.8154 35.4888 35.2395 35.2624 35.7501C34.8924 38.3774 35.1714 41.0554 36.0749 43.5501C34.8406 46.4337 33.463 49.2538 31.9474 52.0001C29.6399 53.3001 26.4874 55.2501 25.9999 57.4926C25.6099 59.3126 29.0224 63.9926 34.8399 53.8526C37.4267 52.8923 40.0762 52.1105 42.7699 51.5126C44.7611 52.651 46.9823 53.3285 49.2699 53.4951C49.7952 53.5087 50.3128 53.3667 50.7576 53.087C51.2024 52.8073 51.5546 52.4024 51.7699 51.9231C51.9853 51.4438 52.0541 50.9116 51.9678 50.3933C51.8815 49.875 51.6439 49.3937 51.2849 49.0101C49.9199 47.6126 45.8574 48.0026 43.8424 48.2626ZM28.3074 58.0126C29.2182 56.454 30.421 55.0857 31.8499 53.9826C29.6399 57.4926 28.3074 58.1101 28.3074 58.0451V58.0126ZM37.7974 35.8801C38.6424 35.8801 38.5774 39.6176 37.9924 40.6251C37.5517 39.0924 37.4849 37.4764 37.7974 35.9126V35.8801ZM34.9699 51.7401C36.071 49.731 37.0268 47.6457 37.8299 45.5001C38.6909 47.1022 39.8883 48.4992 41.3399 49.5951C39.1594 50.1412 37.0285 50.8696 34.9699 51.7726V51.7401ZM50.2449 51.1551C50.2449 51.1551 49.6599 51.8701 45.9224 50.2451C49.9849 49.9851 50.6674 50.9276 50.2449 51.1876V51.1551Z" fill="#212121"/>
        </svg>
        </div>
        <div className='documentname'>ID Proof</div>
        <div className='margintop10'></div>
        <div className='filesize'>1.3 MB</div>
        </div>
        </div>
        </CCol>
        </CRow>
        <div className='margintop10'></div>
        <div className='attachmenttitle'>All Uploades</div>
        <div className='margintop10'></div>
        <CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="leadheadcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Name </CTableHeaderCell>
                    <CTableHeaderCell>File Type</CTableHeaderCell>
                    <CTableHeaderCell>File Size</CTableHeaderCell>
                    <CTableHeaderCell>Upload Date</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>10 mark sheet</CTableDataCell>
                      <CTableDataCell>PDF</CTableDataCell>
                      <CTableDataCell>1.3 MB</CTableDataCell>
                      <CTableDataCell>11 Dec 2022</CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>12 mark sheet</CTableDataCell>
                      <CTableDataCell>PDF</CTableDataCell>
                      <CTableDataCell>1.3 MB</CTableDataCell>
                      <CTableDataCell>11 Dec 2022</CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>Aadhar Card</CTableDataCell>
                      <CTableDataCell>PDF</CTableDataCell>
                      <CTableDataCell>1.3 MB</CTableDataCell>
                      <CTableDataCell>11 Dec 2022</CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>ID Proof</CTableDataCell>
                      <CTableDataCell>PDF</CTableDataCell>
                      <CTableDataCell>1.3 MB</CTableDataCell>
                      <CTableDataCell>11 Dec 2022</CTableDataCell>
                      <CTableDataCell>
                        <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions}  />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Open</CDropdownItem>
                <CDropdownItem>Rename</CDropdownItem>
                <CDropdownItem>Remove</CDropdownItem>
              </CDropdownMenu>
        </CDropdown>
        </CTableDataCell>
                    </CTableRow>
                    
                    </CTableBody>
                    </CTable>
    </TabPanel>
    <TabPanel>
    <CRow className='leadpagetabticket'>
      <CCol md={12} className="">
      <Tabs>
    <TabList>
      <Tab>All Ticket</Tab>
      <Tab>Assigned</Tab>
      <Tab>Unassgined</Tab>
    </TabList>

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
      </TabPanel>
    </Tabs>
    
    </CCardBody>
    </CCard>

        </CCol>
        </>
    )
}
export default Rightdetail;
