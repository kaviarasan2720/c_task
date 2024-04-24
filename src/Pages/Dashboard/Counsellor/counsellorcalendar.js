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
    CProgressBar,
    CCarouselItem,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
  } from '@coreui/react-chartjs'
import {
    cilCalendar,
} from '@coreui/icons'
import './calendar.css';

const Counsellorcalendar = () => {
    return (
        <>
        <div className='d-none d-md-block'>
         <CCard className="mb-4 paddingzero">
        <CCardHeader>
            <CRow>
              <CCol sm={12}>
                  <h4 id="traffic" className="card-title mb-0">
                    <div className='leadallocation'>Telecaller Performance  </div>
                  </h4>
              </CCol>
              </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CCol md={3}>
            <div className="mb-3 calendarform">
                <CFormLabel htmlFor="exampleFormControlInput1">Select the Telecaller Name</CFormLabel>
                <CFormSelect size="lg" className="mb-3 form-control" >
                <option value="0">Arun Kumar</option>
                <option value="1">Dinesh Kumar</option>
                <option value="2">Selva Kumar</option>
                <option value="3">GOpi</option>
              </CFormSelect>
            </div>
      </CCol>
      <CCol md={9} className=''><div className='datedesign-counsellor displayinlineblock margintop30' style={{float:"inline-end"}}>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div></CCol>
              </CRow>
        <ul class="weekdays">
  <li>SUNDAY</li>
  <li>MONDAY</li>
  <li>TUESDAY</li>
  <li>WEDNESDAY</li>
  <li>THURSDAY</li>
  <li>FRIDAY</li>
  <li>SATURDAY</li>
</ul>

<ul class="days">  
  <li className='previousmonth'>
    <div className='datefont'>26</div>
  </li>
  <li className='previousmonth'><div className='datefont'>27</div></li>
  <li className='previousmonth'><div className='datefont'>28</div></li>
  <li className='previousmonth'><div className='datefont'>29</div></li>
  <li className='previousmonth'><div className='datefont'>30</div></li>
  <li className='currentmonth'><div className='datefont'>01</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>235</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>55</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>142</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>63</div></div></li>
  <li className='currentmonth'><div className='datefont'>02</div></li>
  <li className='currentmonth'><div className='datefont'>03</div></li>
  <li className='currentmonth'><div className='datefont'>04</div></li>
  <li className='currentmonth'><div className='datefont'>05</div></li>
  <li className='currentmonth'><div className='datefont'>06</div></li>
  <li className='currentmonth'><div className='datefont'>07</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>654</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>222</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>12</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>78</div></div></li>
  <li className='currentmonth'><div className='datefont'>08</div></li>
  <li className='currentmonth'><div className='datefont'>09</div></li>
  <li className='currentmonth'><div className='datefont'>10</div></li>
  <li className='currentmonth'><div className='datefont'>11</div></li>
  <li className='currentmonth'><div className='datefont'>12</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>235</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>582</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>412</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>23</div></div></li>
  <li className='currentmonth'><div className='datefont'>13</div></li>
  <li className='currentmonth'><div className='datefont'>14</div></li>
  <li className='currentmonth'><div className='datefont'>15</div></li>
  <li className='currentmonth'><div className='datefont'>16</div></li>
  <li className='currentmonth'><div className='datefont'>17</div></li>
  <li className='currentmonth'><div className='datefont'>18</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>789</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>456</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>256</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>52</div></div></li>
  <li className='currentmonth'><div className='datefont'>19</div></li>
  <li className='currentmonth'><div className='datefont'>20</div></li>
  <li className='currentmonth'><div className='datefont'>21</div></li>
  <li className='currentmonth'><div className='datefont'>22</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>452</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>542</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>752</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>235</div></div></li>
  <li className='currentmonth'><div className='datefont'>23</div></li>
  <li className='currentmonth'><div className='datefont'>24</div></li>
  <li className='currentmonth'><div className='datefont'>25</div></li>
  <li className='currentmonth'><div className='datefont'>26</div></li>
  <li className='currentmonth'><div className='datefont'>27</div>
    <div className='margintop5 flexdisplay'><div className='Assignedfont'>Assigned</div>
    <div className='Assignednumberfont'>235</div></div>
    <div className='margintop5 flexdisplay'><div className='Attendedfont'>Attended</div>
    <div className='Attendednumberfont'>745</div></div>
    <div className='margintop5 flexdisplay'><div className='Convertedfont'>Converted</div>
    <div className='Convertednumberfont'>632</div></div>
    <div className='margintop5 flexdisplay'><div className='Closedfont'>Closed</div>
    <div className='Closednumberfont'>125</div></div></li>
  <li className='currentmonth'><div className='datefont'>28</div></li>
  <li className='currentmonth'><div className='datefont'>29</div></li>
  <li className='currentmonth'><div className='datefont'>30</div></li>
  <li className='currentmonth'><div className='datefont'>31</div></li>
  <li className='nextmonth'><div className='datefont'>01</div></li>
  <li className='nextmonth'><div className='datefont'>02</div></li>
  <li className='nextmonth'><div className='datefont'>03</div></li>
  <li className='nextmonth'><div className='datefont'>04</div></li>
  <li className='nextmonth'><div className='datefont'>05</div></li>
  <li className='nextmonth'><div className='datefont'>06</div></li>
</ul>
        </CCardBody>
       </CCard>
       </div>
        </>
    );
}
export default Counsellorcalendar;