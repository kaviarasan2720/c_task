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
const Leadchart = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <>
    <CCard className="mb-2 paddingzero">
            <CCardHeader><CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>All Leads</div>
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
            </CCol>
          </CRow>
          </CCardHeader>
            <CCardBody>
            <CChartLine
            style={{ height: '180px', marginTop: '10px' }}
            data={{
              labels:  ['01 DEC', '02 DEC', '03 DEC', '04 DEC', '05 DEC', '06 DEC', '07 DEC', '08 DEC ', '09 DEC', 
              '10 DEC', '11 DEC', '12 DEC', '13 DEC', '14 DEC', '15 DEC'],
              datasets: [
                {
                  label: 'Lead Data',
                  backgroundColor: 'transparent',
                  borderColor: '#329DFF',
                  pointHoverBackgroundColor: '',
                  borderWidth: 2,
                  data: [
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
                    random(500, 10000),
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
            </CCardBody>
</CCard>
</>
);
}
export default Leadchart;