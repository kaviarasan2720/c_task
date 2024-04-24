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
import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
import ReactApexChart from "react-apexcharts";
const Targetvsapplication = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [series,setseries] = useState([{
        name: ['Target'],
        data: [random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000),
            random(5000, 20000), random(5000, 20000),random(5000, 20000),random(5000, 20000),random(5000, 20000),random(5000, 20000)]
      }, {
        name: ['Achieved'],
        data: [random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000), random(5000, 20000),
            random(5000, 20000), random(5000, 20000),random(5000, 20000),random(5000, 20000),random(5000, 20000),random(5000, 20000)]
      }]);
    const [options,setoptions] = useState({
        chart: {
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: false,
            columnWidth: '60%',
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
          }
        },
        colors:['#329DFF', '#E5E9FA'],
        dataLabels: {
          enabled: false
        },
        stroke: {
            colors: ["transparent"],
            width: 3
        },
        xaxis: {
          categories: ['02-2023', '03-2023', '04-2023', '05-2023', '06-2023', '07-2023', '08-2023', '09-2023', '10-2023', 
          '11-2023', '11-2023', '01-2024'],
        }
      });
      
    return (
        <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='deviceperformancebutton'>Target Vs Appointment</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
  <div id="chart">
    <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
</CCardBody>
</CCard>
</>
    );

}
export default Targetvsapplication;