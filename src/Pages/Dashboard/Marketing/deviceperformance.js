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
const Deviceperformance = () => {
    const [donutoptions,setdonutoptions] = useState({
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
        labels: ["Mobile", "Desktop", "Tablet", "TV"],
        color: ["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"],
        legend: {
            formatter: function(val, opts) {
                //console.log(opts.w.config.color[opts.seriesIndex]);
                var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
              return "<div className='donutfont' style=display:inline;margin-left:15px;min-width:500px;font-size:14px;font-weight:500;color:"+opts.w.config.color[opts.seriesIndex] + "><span>" + val + " </span></div> <span style='font-weight: 400;font-size: 14px;line-height: 19px;color: #6D6E71;margin-left: 17px;'>" + opts.w.globals.series[opts.seriesIndex] + "</span> <span style='font-weight: 400;font-size: 13px;line-height: 17px;color: #6D6E71;'>( " + percentage[0].toFixed(1) +"% )</span> "
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
      const [donutseries,donutsetseries] = useState([69, 56, 85, 42]);
      const [donut1options,set1donutoptions] = useState({
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
        labels: ["Mobile", "Desktop", "Tablet", "TV"],
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
      const [donut1series,donut1setseries] = useState([44, 55, 41, 17]);
    return (
        <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='deviceperformancebutton'>Device Performance</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={6} sm={6}>
  <div className='topchannel marginbottom15'><span className='lightbox'>Count</span></div>
  <ReactApexChart options={donutoptions} series={donutseries} type="donut" height={280} />
  
</CCol>
<CCol md={6} sm={6}>
  <div className='topchannel marginbottom15'><span className='lightbox'>Conversion</span></div>
  <ReactApexChart options={donut1options} series={donut1series} type="donut" height={280} />
</CCol>
</CRow>
</CCardBody>
</CCard>
</>
    );

}
export default Deviceperformance;