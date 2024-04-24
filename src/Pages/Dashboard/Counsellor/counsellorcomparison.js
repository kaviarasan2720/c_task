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
//import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
import {download_sub,left,right} from './icon';
import ReactApexChart from "react-apexcharts";
const Counsellorcomparison = () => {
    const [radarseries,setradarseries] = useState([{
        name: 'All Assigned',
        data: [80, 50, 30, 40, 100, 78,45,25],
      }, {
        name: 'Attended',
        data: [52, 30, 40, 80, 30, 80,55,65],
      }, {
        name: 'Converted',
        data: [44, 76, 78, 13, 43, 10,85,23],
      }]);
    const [radaroptions,setradaroptions] = useState({
        chart: {
          height: 350,
          type: 'radar',
        },
        // dataLabels: {
        //   enabled: true
        // },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        colors: ['#EE4057','#F39640','#329DFF'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: ['#EE4057','#F39640','#329DFF'],
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        },
        xaxis: {
          categories: ['Ravi Kumar', 'Siva', 'Arun Kumar', 'Dinesh', 'Selva','Tamil','Meena','Priya']
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      });
    return (
        <>
        <CCard className="mb-4 paddingzero">
        <CCardHeader>
            <CRow>
              <CCol sm={12}>
                  <h4 id="traffic" className="card-title mb-0">
                    <div className='leadallocation'>Telecaller Performance</div>
                  </h4>
              </CCol>
              {/* <CCol sm={7} className="d-none d-md-block">
                      <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
              </CCol> */}
              </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CCol md={6} sm={6} className='counsellor'>
          <div className='datedesign-counsellor displayinlineblock'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
          <div className='margintop20'></div>
        <CTable align="middle" className="mb-0" hover responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Telecaller Name</CTableHeaderCell>
                    <CTableHeaderCell>Attended</CTableHeaderCell>
                    <CTableHeaderCell>Un Opened</CTableHeaderCell>
                    <CTableHeaderCell>Closed</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      698
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      523
                      </CTableDataCell>
                      <CTableDataCell>
                      498
                      </CTableDataCell>
                      <CTableDataCell >
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Karan Jain 
                      </CTableDataCell>
                      <CTableDataCell>
                      700
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell>
                      65
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Ravi Kumar
                      </CTableDataCell>
                      <CTableDataCell>
                      589
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      563
                      </CTableDataCell>
                      <CTableDataCell>
                      456
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      422
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
              <div className='margintop20'></div>
              <div className='pullright'>
              <span className='leftbox'><img src={left} style={{width:"15px"}}/></span>
              <span className='rightbox'><img src={right} style={{width:"15px"}}/></span>
              </div>
        </CCol>
        <CCol md={6} sm={6}>
        <div id="chart">
        <ReactApexChart options={radaroptions} series={radarseries} type="radar" height={450} />
        {/* <CChartRadar
              data={{
                labels: [
                  'Ravi Kumar',
                  'Siva',
                  'Arun Kumar',
                  'Dinesh Kumar',
                  'Gopi',
                  'Meena',
                  'Selva kumar',
                ],
                datasets: [
                  {
                    label: 'All Assigned',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'Attended',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                  {
                    label: 'Converted',
                    backgroundColor: 'rgba(192, 223, 251, 0.2)',
                    borderColor: 'rgba(192, 223, 251, 1)',
                    pointBackgroundColor: 'rgba(192, 223, 251, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(192, 223, 251, 1)',
                    data: [56, 25, 11, 56, 48, 25, 125],
                  },
                ],
              }}
            /> */}
        </div>
        </CCol>
        
        </CRow>
        </CCardBody>
        </CCard>
        </>
    );
}
export default Counsellorcomparison;
