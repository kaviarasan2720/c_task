import React from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsA,CCard,CCardBody
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop } from '@coreui/icons'
import {Total_Leads_Icon, Appointment_Booked_Icon,Walkin_Icon, Verified_Leads_Icon,Opened_Icon,Unopened_Icon,Surgeries_Icon } from '../../../Assets/Images/Icon/Admin';
import {uparrow} from '../../../Assets/Images/Icon/menu';

const Usercount = () => {
  return (
    <CRow>
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
      <CCard className="mb-4">
      <CCardBody>
      <CRow>
              <CCol md={6} sm={6}>
              <div className='dashboardlabel'>Total Leads</div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboarddays'><img src={Total_Leads_Icon}/></div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboardcount'>2653</div>
              </CCol>
            </CRow>
            <CChartLine
              className="mt-2"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: '#11B360',
                    pointBackgroundColor: '#11B360',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
      </CCardBody>
      </CCard>
      </CCol>
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
      <CCard className="mb-4">
      <CCardBody>
      <CRow>
              <CCol md={9} sm={9}>
              <div className='dashboardlabel'>App Initiated</div>
              </CCol>
              <CCol md={3} sm={3}>
              <div className='dashboarddays'><img src={Appointment_Booked_Icon}/></div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboardcount'>65</div>
              </CCol>
            </CRow>
            <CChartLine
              className="mt-2"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: '#11B360',
                    pointBackgroundColor: '#11B360',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
      </CCardBody>
      </CCard>
      </CCol>
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
      <CCard className="mb-4">
      <CCardBody>
      <CRow>
              <CCol md={9} sm={9}>
              <div className='dashboardlabel'>App Submitted</div>
              </CCol>
              <CCol md={3} sm={3}>
              <div className='dashboarddays'><img src={Walkin_Icon}/></div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboardcount'>25</div>
              </CCol>
            </CRow>
            <CChartLine
              className="mt-2"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: '#11B360',
                    pointBackgroundColor: '#11B360',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
      </CCardBody>
      </CCard>
      </CCol>
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
      <CCard className="mb-4">
      <CCardBody>
      <CRow>
              <CCol md={6} sm={6}>
              <div className='dashboardlabel'>Paid Lead</div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboarddays'><img src={Surgeries_Icon}/></div>
              </CCol>
              <CCol md={6} sm={6}>
              <div className='dashboardcount'>758</div>
              </CCol>
            </CRow>
            <CChartLine
              className="mt-2"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: '#11B360',
                    pointBackgroundColor: '#11B360',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
      </CCardBody>
      </CCard>
      </CCol>
    </CRow>
  )
}

export default Usercount
