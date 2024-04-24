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
    CFormCheck
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,cilSearch
} from '@coreui/icons'
import {edit,view,filter,column,download,more} from '../../Assets/Images/Lead/menu';
const Paymenttable = () => {
    return (
        <>
    <CCard className="mb-2 paddingzero">
            <CCardHeader><CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>All Leads</div>
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
            </CCol>
          </CRow>
          </CCardHeader>
    </CCard>
    <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
                <CCol md={6} className='margintop10'>
                <span className='filterbox'>
                    <CIcon icon={filter} />
                    {/* <CIcon icon={filter} /> */}
                    </span>
            <div className='displayinlineblock'>
            <div className='input-wrap-lead'>
            {/* <label for="search" id="input-label">Search</label> */}
            <input name="search" id="product-search-lead" placeholder="Search Mobile or Email"/>
            <CIcon icon={cilSearch} size="lg" />
            </div>
            </div>
                </CCol>
                <CCol md={6}>
                    <ul className='customlisvg pullright'>
                        <li><CIcon icon={column} customClassName="nav-icon"/><div>Columns</div></li>
                        <li><CIcon icon={download} customClassName="nav-icon"/><div>Download</div></li>
                        <li><CIcon icon={more} customClassName="nav-icon"/><div>More</div></li>
                    </ul>
               
                </CCol>
            </CRow>
          </CCardHeader>
            <CCardBody>
            <CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="leadheadcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S.no</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Phone Number</CTableHeaderCell>
                    <CTableHeaderCell>Recieved</CTableHeaderCell>
                    <CTableHeaderCell>Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Application</CTableHeaderCell>
                    <CTableHeaderCell>Date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Control</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>01</CTableDataCell>
                      <CTableDataCell>Selva kumar</CTableDataCell>
                      <CTableDataCell>9632587412</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>Dinesh kumar</CTableDataCell>
                      <CTableDataCell>9635678123</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>Jai ganesh</CTableDataCell>
                      <CTableDataCell>9632587412</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentfailed">Failed</span></CTableDataCell>
                      <CTableDataCell>Pending</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>Meena</CTableDataCell>
                      <CTableDataCell>9632589632</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>Credit card</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>Priya</CTableDataCell>
                      <CTableDataCell>9632587412</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>Card</CTableDataCell>
                      <CTableDataCell><span className="paymentfailed">Failed</span></CTableDataCell>
                      <CTableDataCell>Pending</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>Lokes</CTableDataCell>
                      <CTableDataCell>9632589632</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>Suresh Kumar</CTableDataCell>
                      <CTableDataCell>9632587412</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>Net banking</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>08</CTableDataCell>
                      <CTableDataCell>Sivakumar</CTableDataCell>
                      <CTableDataCell>9632589632</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentfailed">Failed</span></CTableDataCell>
                      <CTableDataCell>Pending</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>09</CTableDataCell>
                      <CTableDataCell>Sam</CTableDataCell>
                      <CTableDataCell>9632587412</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentsuccess">Success</span></CTableDataCell>
                      <CTableDataCell>Completed</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>10</CTableDataCell>
                      <CTableDataCell>Benjamin</CTableDataCell>
                      <CTableDataCell>9632589632</CTableDataCell>
                      <CTableDataCell>₹1500</CTableDataCell>
                      <CTableDataCell>UPI</CTableDataCell>
                      <CTableDataCell><span className="paymentfailed">Failed</span></CTableDataCell>
                      <CTableDataCell>Pending</CTableDataCell>
                      <CTableDataCell>10-11-2022</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    
                </CTableBody>
              </CTable>
            </CCardBody>
</CCard>
</>
);
}
export default Paymenttable;