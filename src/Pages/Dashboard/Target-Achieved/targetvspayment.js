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
const Targetvspayment = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <>
    <CCard className="mb-4 paddingzero">
            {/* <CCardHeader><CRow>
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
                <CRow>
                    <CCol md={3} sm={3}>
                        <CTable align="middle" className="mb-0" responsive>
                <CTableHead className="counsellorcolor noborder" color="light">
                  <CTableRow className='settargetcolor'>
                    <CTableHeaderCell>Day</CTableHeaderCell>
                    <CTableHeaderCell>Count</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='counsellorbodycolor'>
                    <CTableRow v-for="item in tableItems" className='tractive' >
                      <CTableDataCell>
                      Monday 
                      </CTableDataCell>
                      <CTableDataCell>
                      235
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Tuesday
                      </CTableDataCell>
                      <CTableDataCell>
                      546
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wednesday
                      </CTableDataCell>
                      <CTableDataCell>
                      121
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Thursday
                      </CTableDataCell>
                      <CTableDataCell>
                      899
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Friday 
                      </CTableDataCell>
                      <CTableDataCell>
                      145
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Saturday
                      </CTableDataCell>
                      <CTableDataCell>
                      89
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Sunday
                      </CTableDataCell>
                      <CTableDataCell>
                      50
                      </CTableDataCell>
                    </CTableRow>
                   
                </CTableBody>
              </CTable>
                    </CCol>
                    <CCol md={9} sm={9}><CChartLine
            style={{ height: '300px', marginTop: '20px' }}
            data={{
              labels:  ['12-02AM', '02-04AM', '04-06AM', '06-08AM', '08-10AM', '10-12AM', '12-02PM', '02-04PM ', '04-06PM', 
              '06-08PM', '08-10PM', '10-12PM'],
              datasets: [
                {
                  label: 'Payment',
                  backgroundColor: 'transparent',
                  borderColor: '#329DFF',
                  pointHoverBackgroundColor: '#8D8D8D',
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

                    </CCol>
                </CRow>
            
            </CCardBody> */}
</CCard>
</>
);
}
export default Targetvspayment;