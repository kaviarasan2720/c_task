import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard, CCardBody
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import {Total_Leads_Icon, Appointment_Booked_Icon,Walkin_Icon, Verified_Leads_Icon,Opened_Icon,Unopened_Icon,Surgeries_Icon } from '../../../Assets/Images/Icon/Admin';
import { uparrow } from '../../../Assets/Images/Icon/menu';

const Dashbardcount = () => {
  return (
    <CRow>
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Total Leads</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Total_Leads_Icon} /></div>
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
                <div className='dashboardlabel'>Appointment Booked</div>
              </CCol>
              <CCol md={2} sm={2}>
                <div className='dashboarddays'><img src={Appointment_Booked_Icon} /></div>
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
                    data: [0, 1, 2, 3,4,5 , 6],
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
                    min: -10,
                    max: 10,
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
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Walk-In</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Walkin_Icon} /></div>
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
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Verified Leads</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Verified_Leads_Icon} /></div>
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
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Opened</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Opened_Icon} /></div>
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
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Unopened</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Unopened_Icon} /></div>
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
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>Surgeries</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'><img src={Surgeries_Icon} /></div>
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
                    data: [65, 59, 84, 84, 51, 55, -80],
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
      {/* <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={8} sm={8}>
                <div className='dashboardlabel'>App Initiated</div>
              </CCol>
              <CCol md={4} sm={4}>
                <div className='dashboarddays'>icon</div>
              </CCol>
              <CCol md={12} sm={12}>
                <div className='dashboardcount'>65
                  <span className='increasefont'><CIcon icon={cilArrowTop} />45</span>
                </div>
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
                <div className='dashboardlabel'>App Filled</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboarddays'>Last 10 days</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboardcount'>25</div>
              </CCol>
            </CRow>
            <CChartBar
              className="mt-2"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: '#F39640',
                    borderColor: '#F39640',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
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
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
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
                <div className='dashboarddays'>Last 10 days</div>
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
      <CCol className="dashboardbox" sm={6} lg={3} md={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol md={6} sm={6}>
                <div className='dashboardlabel'>Un Paid Lead</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboarddays'>Last 10 days</div>
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
                <div className='dashboardlabel'>Conversion Rate</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboarddays'>Last 10 days</div>
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
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: '#11B260',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
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
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
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
                <div className='dashboardlabel'>Un Paid Lead</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboarddays'>Last 10 days</div>
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
                <div className='dashboardlabel'>Conversion Rate</div>
              </CCol>
              <CCol md={6} sm={6}>
                <div className='dashboarddays'>Last 10 days</div>
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
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: '#11B260',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
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
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}

    </CRow>
  )
}

export default Dashbardcount
