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
import {
    cilCalendar,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {left,right} from '../Counsellor/icon';
const Locationdetail = () => {
    return (
    <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Location</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">

        <div style={{
  display:'flex',
  flexDirection:'row',
  flexWrap:'nowrap',
  justifyContent:'flex-end'}}>
             <div className='pullright viewall'>View All</div>
        </div>
             
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={4} sm={4} className='borderradius10'>
<CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S.No</CTableHeaderCell>
                    <CTableHeaderCell>State Name</CTableHeaderCell>
                    <CTableHeaderCell>Visited</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems" className='cursorpointer'>
                      <CTableDataCell className='activecolor'>
                      01
                      </CTableDataCell>
                      <CTableDataCell className='activecolor'>
                      Tamil Nadu
                      </CTableDataCell>
                      <CTableDataCell className='activecolor'>
                      698
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      02
                      </CTableDataCell>
                      <CTableDataCell>
                      Karnataka
                      </CTableDataCell>
                      <CTableDataCell >
                      331
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      03
                      </CTableDataCell>
                      <CTableDataCell>
                      Andhra Pradesh
                      </CTableDataCell>
                      <CTableDataCell>
                      22
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      04
                      </CTableDataCell>
                      <CTableDataCell>
                      Kerala
                      </CTableDataCell>
                      <CTableDataCell>
                      48
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      05
                      </CTableDataCell>
                      <CTableDataCell>
                      Assam
                      </CTableDataCell>
                      <CTableDataCell>
                      91
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      06
                      </CTableDataCell>
                      <CTableDataCell>
                      Delhi
                      </CTableDataCell>
                      <CTableDataCell>
                      56
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      07
                      </CTableDataCell>
                      <CTableDataCell>
                      Telangana
                      </CTableDataCell>
                      <CTableDataCell>
                      22
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      08
                      </CTableDataCell>
                      <CTableDataCell>
                      Meghalaya
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      09
                      </CTableDataCell>
                      <CTableDataCell>
                      Odisha
                      </CTableDataCell>
                      <CTableDataCell>
                      91
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      10
                      </CTableDataCell>
                      <CTableDataCell>
                      Goa
                      </CTableDataCell>
                      <CTableDataCell>
                      15
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
              {/* <div className='margintop40'></div>
              <div className='pullright'>
              <span className='leftbox'><img src={left} style={{width:"15px"}}/></span>
              <span className='rightbox'><img src={right} style={{width:"15px"}}/></span>
              </div> */}
</CCol>
<CCol md={8} sm={8}>
<div className='topchannel'><span className='lightbox'>Tamil Nadu district</span></div>
<div className='margintop10'></div>
<CRow>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7} xs={7}><div className='districtname'>Ariyalur</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>125</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7} xs={7}><div className='districtname'>Chennai</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>6532</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7} xs={7}><div className='districtname'>Chengalpattu</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>458</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7} xs={7}><div className='districtname'>Coimbatore</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>3562</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Cuddalore</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>457</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Dharmapuri</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>863</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Dindigul</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>758</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Erode</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>965</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Kallakurichi</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>589</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Karur</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>735</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Namakkal</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>569</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Kanyakumari</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>6352</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Salem</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>748</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Thanjavur</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>695</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Thirunelveli</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>458</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Trichirappalli</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>8524</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Tiruvannamalai</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>632</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Pudukottai</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>458</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Tenkasi</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>567</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Thiruvallur</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>897</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>The Nilgiris</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>369</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Viluppuram</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>256</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Thanjavur</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>563</div></CCol>    
    </CRow>
    </div>
</CCol>
<CCol md={4} sm={4} className='margintop10'>
    <div className='districttitle'>
    <CRow>
    <CCol md={7} sm={7}><div className='districtname'>Ranipet</div></CCol>
    <CCol md={5} sm={5}><div className='districtcount'>568</div></CCol>    
    </CRow>
    </div>
</CCol>
</CRow>
{/* <div className='margintop20'></div>
              <div className='pullright'>
              <span className='leftbox'><img src={left} style={{width:"15px"}}/></span>
              <span className='rightbox'><img src={right} style={{width:"15px"}}/></span>
              </div> */}
</CCol>
</CRow>

</CCardBody>
</CCard>
</>
    );
}

export default Locationdetail;