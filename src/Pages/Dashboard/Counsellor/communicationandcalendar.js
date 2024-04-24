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
    cilCalendar,
} from '@coreui/icons'
import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
import {download_sub,left,right} from './icon';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactApexChart from "react-apexcharts";
import { Button } from '@coreui/coreui'
const Communicationandcalendar = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [value, onChange] = useState(new Date());
    
    const [options,setoptions] = useState({
        chart: {
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
          }
        },
        colors:['#329DFF', '#E91E63', '#9C27B0'],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Call', 'Whats App', 'SMS ', 'Email'],
        }
      });
      const [series,setseries] = useState([{
        name: 'Channels',
        data: [random(500, 5000), random(500, 5000), random(500, 5000),random(500, 5000)]
      }]);
      const [donut1options,set1donutoptions] = useState({
        chart: {
          width: 600,
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
              size: '60%',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '16px',
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
                  fontSize: '16px',
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
            colors: ["#F86624", "#5788E5", "#3E5787"]
          },
        colors:["#F86624", "#5788E5", "#3E5787"],
        labels: ["Attended", "Un Opened", "Spam"],
        color: ["#F86624", "#5788E5", "#3E5787"],
        legend: {
            //position: 'bottom',
            formatter: function(val, opts) {
                //console.log(opts.w.config.color[opts.seriesIndex]);
                var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
              return "<b className='donutfont' style=font-size:14px;font-weight:500;color:"+opts.w.config.color[opts.seriesIndex] + "><span>" + val + " </span></b> <span style='font-weight: 400;font-size: 14px;line-height: 19px;color: #6D6E71;margin-left: 2px;'> - " + opts.w.globals.series[opts.seriesIndex] + "</span> "
            }
          },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      });
      const [donut1series,donut1setseries] = useState([65, 55, 41]);
      
    return (
        <>
        <CCard className="mb-4 paddingzero">
        <CCardHeader>
            <CRow>
              <CCol sm={12}>
                  <h4 id="traffic" className="card-title mb-0">
                    <div className='leadallocation'>Communication and Calendar</div>
                  </h4>
              </CCol>
              </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CCol md={4} sm={4}>
        <ReactApexChart options={options} series={series} type="bar" height={350} />
        </CCol>
        <CCol md={8} sm={8} className='calenderdesign'>
        <div className='calenderbox'>
        <CRow>
        <CCol md={6} sm={6}>
        <div className='calenderTitle'>Calendar</div>
        <div className='margintop20'></div>
        <Calendar onChange={onChange} value={value} />
        </CCol>
        <CCol md={6} sm={6} xs={6} xl={6}>
        <button className='buttonback'>Get Data</button>
        <div className='margintop20'></div>
        <div style={{marginTop:"100px"}}>
          <ReactApexChart options={donut1options} series={donut1series} type="donut" height={250} />
        </div>

        </CCol>
        </CRow>
        
        </div>
        
        
        </CCol>
        
        </CRow>
        
       
        </CCardBody>
        </CCard>
        </>
    );
}
export default Communicationandcalendar;