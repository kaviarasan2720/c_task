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
    CFormLabel,
    CFormSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,cilArrowTop
} from '@coreui/icons'
import ReactApexChart from "react-apexcharts";
import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
const Trafficchannel = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [donut2options,set2donutoptions] = useState({
        chart: {
          width: 300,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '75%',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  formatter: function (val) {
                    return val
                  }
                },
                value: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: false,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        },
        fill: {
            colors: ["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"]
          },
        colors:["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"],
        labels: ["42andmore", "College Dunia", "Shiksha", "Careers360"],
        color: ["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"],
        legend: {
            formatter: function(val, opts) {
                //console.log(opts.w.config.color[opts.seriesIndex]);
                var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
              return "<b className='donutfont' style=font-size:14px;font-weight:500;color:"+opts.w.config.color[opts.seriesIndex] + "><span>" + val + " </span></b> <span style='font-weight: 400;font-size: 14px;line-height: 19px;color: #6D6E71;margin-left: 17px;'>" + opts.w.globals.series[opts.seriesIndex] + "</span> "
            }
          },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      });
      const [donut2series,donut2setseries] = useState([44, 55, 41, 17]);
    return (
        <>
        <CCard className="mb-4 paddingzero">
            <CCardHeader>
            <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Traffic Channel</div>
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
            </CCol>
          </CRow>
            </CCardHeader>
            <CCardBody>
            <CRow>
        <CCol md={3}>
            <div className="mb-3 calendarform">
                <CFormLabel htmlFor="exampleFormControlInput1">Select the counsellor Name</CFormLabel>
                <CFormSelect size="lg" className="mb-3 form-control" >
                <option value="0">Arun Kumar</option>
                <option value="1">Dinesh Kumar</option>
                <option value="2">Selva Kumar</option>
                <option value="3">Gopi</option>
              </CFormSelect>
            </div>
      </CCol>
      <CCol md={3} className=''>
        <div className='pullright margintop35'><span className='charticon'><CIcon icon={cilArrowTop} /></span> 10.5% Last 10 days </div>
        </CCol>
              </CRow>
            <CRow>
            <CCol sm={7} md={7}>
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
            </CCol>
            <CCol sm={5} md={5}>
  <ReactApexChart options={donut2options} series={donut2series} type="donut" height={280} />
            </CCol>
            </CRow> 
            
            </CCardBody>
</CCard>
</>
);

}
export default Trafficchannel;
