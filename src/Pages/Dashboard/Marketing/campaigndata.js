import React from 'react'
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
const Campaigndata = () => {
    return (
<CTable align="middle" className="mb-0" hover responsive>
                <CTableHead className="campaigndetail" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Campaign Name</CTableHeaderCell>
                    <CTableHeaderCell>Impressions<span>(Target)</span></CTableHeaderCell>
                    <CTableHeaderCell>Clicks<span>(55.2%)</span></CTableHeaderCell>
                    <CTableHeaderCell>CPC<span>Rs.89633</span></CTableHeaderCell>
                    <CTableHeaderCell>Conversion<span>(55.2%)</span></CTableHeaderCell>
                    <CTableHeaderCell>Conversion Rate</CTableHeaderCell>
                    <CTableHeaderCell>Cost Spend<span>RS.1.63L</span></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='campaigndetailbodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      42andmore
                      </CTableDataCell>
                      <CTableDataCell>
                      562<span>(10000)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      855<span>(10.2%)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.5633
                      </CTableDataCell>
                      <CTableDataCell>
                      456
                      </CTableDataCell>
                      <CTableDataCell>
                      55.2%
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.60000
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Shiksha
                      </CTableDataCell>
                      <CTableDataCell>
                      123<span>(2522)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      66<span>(03.2%)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.2353
                      </CTableDataCell>
                      <CTableDataCell>
                      55
                      </CTableDataCell>
                      <CTableDataCell>
                      12.2%
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.12353
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Careers 360
                      </CTableDataCell>
                      <CTableDataCell>
                      788<span>(4000)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      23<span>(06.2%)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.1633
                      </CTableDataCell>
                      <CTableDataCell>
                      563
                      </CTableDataCell>
                      <CTableDataCell>
                      55.2%
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.15633
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Chatbot
                      </CTableDataCell>
                      <CTableDataCell>
                      96<span>(500)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      14<span>(04.2%)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.253
                      </CTableDataCell>
                      <CTableDataCell>
                      53
                      </CTableDataCell>
                      <CTableDataCell>
                      12.2%
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.2532
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Instagram
                      </CTableDataCell>
                      <CTableDataCell>
                      425<span>(5000)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      12<span>(03.2%)</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.253
                      </CTableDataCell>
                      <CTableDataCell>
                      369
                      </CTableDataCell>
                      <CTableDataCell>
                      12.2%
                      </CTableDataCell>
                      <CTableDataCell>
                      RS.89233
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
    );
}
export default Campaigndata;