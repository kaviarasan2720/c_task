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
const Topchannel = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [series,setseries] = useState([{
        name: 'Channels',
        data: [400, 430, 448, 470, 540, 580]
      }]);
    const [options,setoptions] = useState({
        chart: {
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        colors:['#329DFF', '#E91E63', '#9C27B0'],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Careers360', '42andmore', 'Siksha', 'College dekho', 'SMS ', 'Whatsapp'],
        }
      });

      //
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
                  color: undefined,
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
            colors: ["#F86624", "#FF72CE", "#5788E5", "#3E5787"]
          },
        colors:["#F86624", "#FF72CE", "#5788E5", "#3E5787"],
        labels: ["You Tube", "Instagram", "Facebook", "Linked In"],
        color: ["#F86624", "#FF72CE", "#5788E5", "#3E5787"],
        legend: {
            formatter: function(val, opts) {
                //console.log(opts.w.config.color[opts.seriesIndex]);
                var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
              return "<b className='donutfont' style=font-size:15px;font-weight:600;color:"+opts.w.config.color[opts.seriesIndex] + "><span>" + val + " </span></b><br /> <span style='font-weight: 500;font-size: 14px;line-height: 19px;color: #212121;margin-left: 17px;'>" + opts.w.globals.series[opts.seriesIndex] + "</span> <span style='font-weight: 500;font-size: 13px;line-height: 17px;color: #8D8D8D;'>( " + percentage[0].toFixed(1) +"% )</span> "
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
      const [donutseries,donutsetseries] = useState([5623, 6663, 5000, 3523]);
    return (
        <>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Top Channels</div>
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
  <div className='topchannel'>Channels</div>
  <div id="chart">
    <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
  
</CCol>
<CCol md={6} sm={6} className="donutshape">
  <div className='topchannel'>Lead Count</div>
  <ReactApexChart options={donutoptions} series={donutseries} type="donut" height={280} />
</CCol>
</CRow>
</CCardBody>
</CCard>
</>
    );

}
export default Topchannel;