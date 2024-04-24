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
const Cutmarksanalytics = () => {
    return (
    <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Marks Analytics</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='pullright viewall'>View All</div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={6} sm={6} className='borderradius10'>
<CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S.No</CTableHeaderCell>
                    <CTableHeaderCell>Cutoff Mark 11<sup>th</sup></CTableHeaderCell>
                    <CTableHeaderCell>Count</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>01</CTableDataCell>
                      <CTableDataCell>35-45%</CTableDataCell>
                      <CTableDataCell>745</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>46-55%</CTableDataCell>
                      <CTableDataCell >665</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>56-65%</CTableDataCell>
                      <CTableDataCell>52</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>66-75%</CTableDataCell>
                      <CTableDataCell>78</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>76-85%</CTableDataCell>
                      <CTableDataCell>63</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>86-95%</CTableDataCell>
                      <CTableDataCell>25</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>96-100%</CTableDataCell>
                      <CTableDataCell>16</CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
</CCol>
<CCol md={6} sm={6} className='borderradius10'>
<CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S.No</CTableHeaderCell>
                    <CTableHeaderCell>Cutoff Mark 12<sup>th</sup></CTableHeaderCell>
                    <CTableHeaderCell>Count</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell>01</CTableDataCell>
                      <CTableDataCell>35-45%</CTableDataCell>
                      <CTableDataCell>526</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>46-55%</CTableDataCell>
                      <CTableDataCell >236</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>56-65%</CTableDataCell>
                      <CTableDataCell>542</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>66-75%</CTableDataCell>
                      <CTableDataCell>365</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>76-85%</CTableDataCell>
                      <CTableDataCell>25</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>86-95%</CTableDataCell>
                      <CTableDataCell>265</CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>96-100%</CTableDataCell>
                      <CTableDataCell>18</CTableDataCell>
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

export default Cutmarksanalytics;