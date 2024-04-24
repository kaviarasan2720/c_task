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
import ReactApexChart from "react-apexcharts";
const Leadallocationvsattend = () => {
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
            colors: ["#F86624", "#5788E5", "#3E5787"]
          },
        colors:["#F86624", "#5788E5", "#3E5787"],
        labels: ["Attended", "Un Opened", "Spam"],
        color: ["#F86624", "#5788E5", "#3E5787"],
        legend: {
            position: 'bottom',
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
              width: 200
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
                    <div className='leadallocation'>Lead Allocation Vs Attended</div>
                  </h4>
              </CCol>
              {/* <CCol sm={7} className="d-none d-md-block">
                      <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
              </CCol> */}
              </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CCol md={7} sm={7} className='counsellor'>
          <div className='datedesign-counsellor displayinlineblock'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
          {/* <div className='datedesign-counsellor displayinlineblock refresh'>Refresh</div> */}
          <div className='datedesign-counsellor displayinlineblock currentactive'>Current Active <span>45</span></div>
          <div className='margintop20'></div>
          <CTable align="middle" className="mb-0" responsive>
                <CTableHead className="counsellorcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Lead Allocation</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Lead count</CTableHeaderCell>
                    <CTableHeaderCell>Attended</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='counsellorbodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Thenpandiyan
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      523
                      </CTableDataCell>
                      <CTableDataCell width="30%">
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>456</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      66
                      </CTableDataCell>
                      <CTableDataCell width="30%">
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" ><CProgressBar className='progress-bar-green' value={100}/></CProgress></CCol>
                        <CCol md={5}><span>66</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      566
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>453</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Ravi Kumar
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='redcolor'>Inactive</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      33
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>24</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Thenpandiyan 
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      96
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-green' value={100}/></CProgress></CCol>
                        <CCol md={5}><span>96</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      566
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>233</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      33
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>10</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      96
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>20</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      <span className='greencolor'>Active</span>
                      </CTableDataCell>
                      <CTableDataCell>
                      33
                      </CTableDataCell>
                      <CTableDataCell>
                      <CRow>
                        <CCol md={7} ><CProgress className="progressbordernone" style={{borderRadius:"none !important"}}><CProgressBar className='progress-bar-active' value={65}/></CProgress></CCol>
                        <CCol md={5}><span>10</span></CCol>
                      </CRow>
                      </CTableDataCell>
                    </CTableRow>
                   
                </CTableBody>
              </CTable>
              <div className='margintop20'></div>
              <div className='pullright'>
              <span className='leftbox'><img src={left} style={{width:"15px"}}/></span>
              <span className='rightbox'><img src={right} style={{width:"15px"}}/></span>
              </div>
             
              
              
        </CCol>
        <CCol md={5} sm={5}>
          <div className='downloaddiv displayinlineblock'>
            <img src={download_sub} className="downloadimg"/>Download Report
          </div>
          <div className='margintop20'></div>

          <div className='boxdesigndonut'><ReactApexChart options={donut1options} series={donut1series} type="donut" height={405} /></div>
          
          <div>

          </div>
          
        </CCol>
        <div className='margintop40'></div>
        <CCol md={12}>
        <CTable align="middle" className="mb-0" hover responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Telecaller Name</CTableHeaderCell>
                    <CTableHeaderCell>Attended</CTableHeaderCell>
                    <CTableHeaderCell>Un Opened</CTableHeaderCell>
                    <CTableHeaderCell>Spam</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      698
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      523
                      </CTableDataCell>
                      <CTableDataCell>
                      498
                      </CTableDataCell>
                      <CTableDataCell >
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Karan Jain 
                      </CTableDataCell>
                      <CTableDataCell>
                      700
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell>
                      65
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Ravi Kumar
                      </CTableDataCell>
                      <CTableDataCell>
                      589
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Wilson Modi
                      </CTableDataCell>
                      <CTableDataCell>
                      563
                      </CTableDataCell>
                      <CTableDataCell>
                      456
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Himanshu
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      422
                      </CTableDataCell>
                      <CTableDataCell>
                      36
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
              <div className='margintop20'></div>
              <div className='pullright'>
              <span className='leftbox'><img src={left} style={{width:"15px"}}/></span>
              <span className='rightbox'><img src={right} style={{width:"15px"}}/></span>
              </div>
        </CCol>
        </CRow>
        </CCardBody>
        </CCard>
        </>
    );
}
export default Leadallocationvsattend;
