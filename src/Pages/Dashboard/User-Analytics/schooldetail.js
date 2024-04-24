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
const Schooldetail = () => {
    return (
    <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Service Details</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='pullright viewall'>View All</div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={12} sm={12} className='borderradius10'>
<CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S.No</CTableHeaderCell>
                    <CTableHeaderCell>Services Details</CTableHeaderCell>
                    <CTableHeaderCell>Count</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>01</CTableDataCell>
                      <CTableDataCell>Chettinad Vidyashram, Chennai</CTableDataCell>
                      <CTableDataCell>12</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>DAV Public School, Velachery</CTableDataCell>
                      <CTableDataCell >456</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>Good Shepherd Matriculation Hr Sec School, Nungambakkam, Chennai</CTableDataCell>
                      <CTableDataCell>22</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>Kendriya Vidyalaya IIT Chennai, Chennai</CTableDataCell>
                      <CTableDataCell>08</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>Geethaanjali All India Secondary School</CTableDataCell>
                      <CTableDataCell>91</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>Maharishi Vidya Mandir Senior Secondary School</CTableDataCell>
                      <CTableDataCell>56</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>Kotagiri Public School</CTableDataCell>
                      <CTableDataCell>22</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>08</CTableDataCell>
                      <CTableDataCell>Geethaanjali All India Secondary School</CTableDataCell>
                      <CTableDataCell>38</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>09</CTableDataCell>
                      <CTableDataCell>Maharishi Vidya Mandir Senior Secondary School</CTableDataCell>
                      <CTableDataCell>28</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>10</CTableDataCell>
                      <CTableDataCell>Loyola Matriculation Higher Secondary School</CTableDataCell>
                      <CTableDataCell>34</CTableDataCell>
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

export default Schooldetail;