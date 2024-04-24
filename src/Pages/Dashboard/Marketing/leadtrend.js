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
import Campaigndata from './campaigndata'
const Leadtrend = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <>
    <CCard className="mb-4 paddingzero">
            <CCardHeader><CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Lead Trend</div>
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
            </CCol>
          </CRow>
          </CCardHeader>
            <CCardBody>
            <CChartLine
            style={{ height: '300px', marginTop: '20px' }}
            data={{
              labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug ', 'Sep', 
              'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: '#329DFF',
                  pointHoverBackgroundColor: '',
                  borderWidth: 2,
                  data: [
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                    random(500, 20000),
                  ],
                  fill: true,
                }
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
          <div className='margintop20'></div>
          <Campaigndata />
            </CCardBody>
</CCard>
</>
);
}
export default Leadtrend;