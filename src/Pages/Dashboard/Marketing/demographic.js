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
import ReactApexChart from "react-apexcharts";
const Demographicdetail = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [genderoptions,setgenderoptions] = useState({
        dataLabels: {
          style: {
            colors: ['#fff', '#000']
          }
        },
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              total: {
                enabled: false,
                offsetX: 0,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: ''
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug ', 'Sep', 
          'Oct', 'Nov', 'Dec'],
          labels: {
            formatter: function (val) {
              return val 
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        },
        fill: {
          opacity: 1,
          colors: ['#329DFF', '#E5E9FA']
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      });
      const [genderseries,setgenderseries] = useState([{
        name: 'Male',
        data: [random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500),
          random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500)],
        color:'#329DFF'
      }, {
        name: 'Female',
        data: [random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500),
          random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500)],
        color:'#E5E9FA'
      }]);
      
    return (
    <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Demographic</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={12} sm={12}>
  <div id="chart" className='doublebar'>
    <ReactApexChart options={genderoptions} series={genderseries} type="bar" height={350} />
    </div> 
</CCol>
</CRow>
</CCardBody>
</CCard>
</>
    );
}

export default Demographicdetail;