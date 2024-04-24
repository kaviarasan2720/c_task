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
import { Chart } from "react-google-charts";
const Sourcemedium = () => {
    const data3d = [
        ["Pie chart", "Hours per Day"],
        ["Collegedunia.com/None", 698],
        ["42andmore.com/Referral", 556],
        ["Careers360.com/Referral", 300],
        ["Email.com/Organic", 256],
        ["Shiksha.com/None", 331],
      ];
      
      const options3d = {
        is3D: true,
        slices: [
          {
            color: "#D21F2B"
          },
          {
            color: "#0664AE"
          },
          {
            color: "#22BD79"
          },
          {
            color: "#273D57"
          },
          {
            color: "#F27820"
          }
        ],
        // legend: {
        //   //position: "bottom",
        //   textStyle: {
        //     color: "#000000",
        //   }
        // },
        // tooltip: {
        //   showColorCode: true
        // },
      };
    return (
        <>
        <CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Source/Medium</div>
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
<CTable align="middle" className="mb-0"  responsive >
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>S No</CTableHeaderCell>
                    <CTableHeaderCell>Source /Medium</CTableHeaderCell>
                    <CTableHeaderCell>Visited</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor noborder'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      01
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      42andmore.com/Referral
                      </CTableDataCell>
                      <CTableDataCell>
                      698<span className='tablespan'>(25%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      02
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Collegedunia.com/None
                      </CTableDataCell>
                      <CTableDataCell>
                      331<span className='tablespan'>(18%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      03
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Shiksha.com/None
                      </CTableDataCell>
                      <CTableDataCell>
                      256<span className='tablespan'>(14%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      04
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Careers360.com/Referral
                      </CTableDataCell>
                      <CTableDataCell>
                      285<span className='tablespan'>(12%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      05
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Email.com/Organic
                      </CTableDataCell>
                      <CTableDataCell>
                      200<span className='tablespan'>(10%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      06
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Facebook.com/Referral
                      </CTableDataCell>
                      <CTableDataCell>
                      150<span className='tablespan'>(09%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      07
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Twitter.com/None
                      </CTableDataCell>
                      <CTableDataCell>
                      100<span className='tablespan'>(05%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      08
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      College Dunia/Feed
                      </CTableDataCell>
                      <CTableDataCell>
                      80<span className='tablespan'>(04%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      09
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      Twitter.com/None
                      </CTableDataCell>
                      <CTableDataCell>
                      50<span className='tablespan'>(03%)</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      10
                      </CTableDataCell>
                      <CTableDataCell className='sourcecolor'>
                      College Dunia/Feed
                      </CTableDataCell>
                      <CTableDataCell>
                      20<span className='tablespan'>(02%)</span>
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
</CCol>
<CCol md={7} sm={7} className='desktopminusmargin'>
    <center><Chart
      chartType="PieChart"
      data={data3d}
      options={options3d}
      width={"100%"}
      height={"500px"}
    /></center>
</CCol>

</CRow>
</CCardBody>
</CCard>  
</>
);

}
export default Sourcemedium;
