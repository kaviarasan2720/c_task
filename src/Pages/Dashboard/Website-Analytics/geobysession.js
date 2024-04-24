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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,
} from '@coreui/icons'
import MapChart from "./MapChart";
const Geobysession = () => {
    
    return (
        <>
        <CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Geo by Session</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={5} sm={5}>
<div className="mapsvg">
      <center><MapChart /></center>
    </div>
</CCol>
<CCol md={7} sm={7}>
<CTable align="middle" className="mb-0" hover responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Place Name</CTableHeaderCell>
                    <CTableHeaderCell>Visited</CTableHeaderCell>
                    <CTableHeaderCell>Applied</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Fee Paid</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Joined</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Chennai
                      </CTableDataCell>
                      <CTableDataCell>
                      698
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      522
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Salem
                      </CTableDataCell>
                      <CTableDataCell>
                      523
                      </CTableDataCell>
                      <CTableDataCell>
                      498
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      432
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Coimbatore
                      </CTableDataCell>
                      <CTableDataCell>
                      700
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      546
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      65
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Trichy
                      </CTableDataCell>
                      <CTableDataCell>
                      589
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      123
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Vilupuram
                      </CTableDataCell>
                      <CTableDataCell>
                      563
                      </CTableDataCell>
                      <CTableDataCell>
                      456
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      363
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Bengalore
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      422
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      333
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Madurai
                      </CTableDataCell>
                      <CTableDataCell>
                      452
                      </CTableDataCell>
                      <CTableDataCell>
                      42
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      752
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
</CCol>
</CRow>
</CCardBody>
</CCard>
</>
);

}
export default Geobysession;
