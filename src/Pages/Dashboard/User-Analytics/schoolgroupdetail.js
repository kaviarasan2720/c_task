import React,{ Component,useState} from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
const Schoolgroupdetail = () => {
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
        <div style={{
  display:'flex',
  flexDirection:'row',
  flexWrap:'nowrap',
  justifyContent:'flex-end'}} ><div className='pullright viewall'>View All</div></div>
              
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
                      <CTableDataCell>Physics/Chemistry/Statistics/Mathematics</CTableDataCell>
                      <CTableDataCell>12</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Comp.Science/Mathematics</CTableDataCell>
                      <CTableDataCell >456</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Bio-Chemistry/Mathematics</CTableDataCell>
                      <CTableDataCell>22</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Biology/Mathematics</CTableDataCell>
                      <CTableDataCell>08</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Eng.For Comn/Mathematics</CTableDataCell>
                      <CTableDataCell>91</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Mathematics/Home Science</CTableDataCell>
                      <CTableDataCell>56</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Biology/Comp.Science</CTableDataCell>
                      <CTableDataCell>22</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>08</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Biology/Nursing</CTableDataCell>
                      <CTableDataCell>38</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>09</CTableDataCell>
                      <CTableDataCell>Physics/Chemistry/Biology/Home Science</CTableDataCell>
                      <CTableDataCell>28</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>10</CTableDataCell>
                      <CTableDataCell>Statistics/Economics/Commerce/Accountancy</CTableDataCell>
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

export default Schoolgroupdetail;