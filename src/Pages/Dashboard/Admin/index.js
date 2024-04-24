import React,{ Component,useState} from 'react'
import './pyramid.css';
import '../../../App.css';
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
    CFormSelect,
    CFormCheck,
} from '@coreui/react'
import { CDateRangePicker } from "@coreui/react-pro";
import Dashbardcount from '../Common/dashbardcount'
import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cilCalendar,
    cibTwitter,
    cilSearch,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'
import DatePicker from "react-datepicker";
import ReactApexChart from "react-apexcharts";
import MapChart from "./MapChart";
import { Link } from "react-router-dom";
import student from '../../../Assets/Images/student.jpg'
import student1 from '../../../Assets/Images/student1.png'
import student2 from '../../../Assets/Images/student2.png'
import student3 from '../../../Assets/Images/student3.png'
import student4 from '../../../Assets/Images/student4.png'
import {bookicon} from '../../../Assets/Images/Icon/menu';
import { useEffect } from 'react';
function Dashboard_admin() 
{
  const [shouldRenderDatePicker, setShouldRenderDatePicker] = useState(false);
  const [yearPicker,setyearPicker] = useState(false);
  const [picker, setPicker] = useState("");
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (e) => {
    // console.log("currentYear",currentYear)
    setSelectedYear(parseInt(e.target.value));
    
    // console.log("currentYear",currentYear)
  };

  useEffect(() => {
    setShouldRenderDatePicker(true)
    setyearPicker(true)
    
  }, []);
  // const customRanges = {
  //   Today: [new Date(), new Date()],
  //   Yesterday: [
  //     new Date(new Date().setDate(new Date().getDate() - 1)),
  //     new Date(new Date().setDate(new Date().getDate() - 1)),
  //   ],
  //   'Last 7 Days': [new Date(new Date().setDate(new Date().getDate() - 6)), new Date(new Date())],
  //   'Last 30 Days': [new Date(new Date().setDate(new Date().getDate() - 29)), new Date(new Date())],
  //   'This Month': [
  //     new Date(new Date().setDate(1)),
  //     new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  //   ],
  //   'Last Month': [
  //     new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
  //     new Date(new Date().getFullYear(), new Date().getMonth(), 0),
  //   ],
  // }

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const generateData = (count, yrange)=>{
      var i = 0;
      var series = [];
      while (i < count) {
        //var x = 'w' + (i + 1).toString();
        if(i==0){var x = "12 AM";}
        if(i==1){var x = "01 AM";}
        if(i==2){var x = "02 AM";}
        if(i==3){var x = "03 AM";}
        if(i==4){var x = "04 AM";}
        if(i==5){var x = "05 AM";}
        if(i==6){var x = "06 AM";}
        if(i==7){var x = "07 AM";}
        if(i==8){var x = "08 AM";}
        if(i==9){var x = "09 AM";}
        if(i==10){var x = "10 AM";}
        if(i==11){var x = "11 AM";}
        if(i==12){var x = "12 PM";}
        if(i==13){var x = "01 PM";}
        if(i==14){var x = "02 PM";}
        if(i==15){var x = "03 PM";}
        if(i==16){var x = "04 PM";}
        if(i==17){var x = "05 PM";}
        if(i==18){var x = "06 PM";}
        if(i==19){var x = "07 PM";}
        if(i==20){var x = "08 PM";}
        if(i==21){var x = "09 PM";}
        if(i==22){var x = "10 PM";}
        if(i==23){var x = "11 PM";}
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      console.log(series);
      return series;
    }
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
        categories: ['Careers360', '42andmore'],
      }
    });
    const [heatmapoptions,setheatmapoptions] = useState({
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
    });
    const [genderoptions,setgenderoptions] = useState({
      dataLabels: {
        style: {
          colors: ['#fff', '#000']
        }
      },
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            total: {
              enabled: false,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: ''
      },
      xaxis: {
        categories: ['Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 
        'Nov 2023', 'Jan 2024', 'Dec'],
        labels: {
          formatter: function (val) {
            return val 
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ['#329DFF', '#E5E9FA']
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    });
    const [genderseries,setgenderseries] = useState([{
      name: 'Male',
      data: [random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500),
        random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500)],
      color:'#329DFF'
    }, {
      name: 'Female',
      data: [random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500),
        random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500), random(100, 500)],
      color:'#E5E9FA'
    },
  
    {
      name: 'Other',
      data: [],
      color:'#343434'
    }
  ]);
    const [series,setseries] = useState([{
      name: 'Channels',
      data: [400, 430]
    }]);


    const [donutseries,donutsetseries] = useState([100, 56, 85, 42]);
    const [donutoptions,setdonutoptions] = useState({
      chart: {
        width: 380,
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
                  console.log("name test",val)
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
                  console.log("test",val);
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
      legend: {
        formatter: function(val, opts) {
          //console.log(opts.w.config.color[opts.seriesIndex]);
          var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
        return "<div style=display:inline;margin-left:15px;min-width:500px;font-size:14px;font-weight:500;color:"+opts.w.config.color[opts.seriesIndex] + "><span>"
         + val + 
         " </span></div> <span style='font-weight: 400;font-size: 14px;line-height: 19px;color: #6D6E71;margin-left: 17px;'>" 
         + opts.w.globals.series[opts.seriesIndex] + 
         "</span> <span style='font-weight: 400;font-size: 13px;line-height: 17px;color: #6D6E71;'> " 
         + percentage[0].toFixed(1) +"% </span></div> "
      }
      },
      color: ["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"],
      
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            fontFamily: 'none',
            paddingleft:'100px'
          }
        }
      }]
    });
    donutoptions.labels = ["Mobiles", "Desktop", "Tablet", "TV"].map((val, index) => {
      return val
    });
    //const [donutseries,donutsetseries] = useState([69, 56, 85, 42]);
    
    const [heatmapseries,heatmapsetseries] = useState([{
      name: 'Sun',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Mon',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Tues',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Wed',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Thur',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Fri',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Sat',
      data: generateData(24, {
        min: 0,
        max: 90
      })
    }
    ]);
    const [donut1series,donut1setseries] = useState([44, 55, 41, 17]);
    const [donut1options,set1donutoptions] = useState({
      chart: {
        width: 380,
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
                  console.log("donet test lable formetter",val)
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
                  console.log("donet test value formetter",val)
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
      legend: {
        formatter: function(val, opts) {
            //console.log(opts.w.config.color[opts.seriesIndex]);
            var percentage = opts.w.globals.seriesPercent[opts.seriesIndex];
          return "<div style=display:inline;margin-left:15px;min-width:500px;font-size:14px;font-weight:500;color:"+opts.w.config.color[opts.seriesIndex] + "><span>"
           + val + 
           " </span></div> <span style='font-weight: 400;font-size: 14px;line-height: 19px;color: #6D6E71;margin-left: 17px;'>" 
           + opts.w.globals.series[opts.seriesIndex] + 
           "</span> <span style='font-weight: 400;font-size: 13px;line-height: 17px;color: #6D6E71;'> " 
           + percentage[0].toFixed(1) +"% </span></div> "
        }
      },
      color: ["#329DFF", "#F27820", "#4FBA8B", "#D21F2B"],
      
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            fontFamily: 'none',
            // fontWeight:'10',
            // fontSize:'5px',
            paddingleft:'100px'
            
          }
          
        }
      }]
    }); 
     
    donut1options.labels = ["Mobile", "Desktop", "Tablet", "TV"].map((val, index) => {
      return val
    });
    // const [donut1series,donut1setseries] = useState([44, 55, 41, 17]);
    
    const [startDate, setStartDate] = useState(new Date());

    const [seriesData] = useState({
      series:[
        {
          name: 'Male',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
          name: 'Appointment Booked',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
          name: 'Female',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
          name: 'Walk-In',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
      ],
      options:{
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            'May 2023',
            'Jun 2023',
            'Aug 2023',
            'Sep 2023',
            'Oct 2023',
            'Nov 2023'
          ]
        },
        fill: {
          opacity: 1
        },
        colors: ['#48B070', '#E21B66', '#FABA00', '#45BEDF'],
        yaxis: {
          labels: {
            formatter: (val) => {
              return val / 1000 + 'K'
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
      }
  
});
      
    return (
    <>
<Dashbardcount />
      <CCard className="mb-4 paddingzero">
            <CCardHeader><CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Lead Trend</div>
              </h4>
            </CCol>
            <CCol sm={5} xs={5} xl={7}  className="d-none d-md-block">
            <div className='datedesign' style={{padding:"1px"}}>
  <div style={{display:"flex",alignItems:"baseline"}}>
    {/* <CFormLabel htmlFor="exampleFormControlInput1">Select the Telecaller Name</CFormLabel> */}
    <CFormSelect size="lg" style={{backgroundColor:"#F4F4F4",border: "none",borderRadius: '0px'}} 
      onChange={(val)=>{
        console.log(val.target.value)
        if (val.target.value === 'week' || val.target.value === 'month'){
          setShouldRenderDatePicker(true)
          setyearPicker(false)
          setPicker(val.target.value)
        }
        else if(val.target.value === 'day'){
          console.log('val.target.value',val.target.value)
          setyearPicker(true)
          setShouldRenderDatePicker(false)
          // setyearPicker(true)
          
        }
        else{
          setShouldRenderDatePicker(false)
          setyearPicker(false)
        }
      }}
      options={[{ value: 'day', label: 'Year'},{ value: 'week', label: 'Week' },{ value: 'month', label: 'Month' },]}
      >
      
    </CFormSelect>
    <CIcon icon={cilCalendar}style={{marginRight:'10px'}}/>
  </div>
<>
{shouldRenderDatePicker && (
            <div>
              <input type={picker} style={{backgroundColor:"rgb(244, 244, 244)",height:"30px",width:"150px",border: "none"}} />
            </div>
        )}
{yearPicker && (
              <div >
                  <select value={selectedYear} onChange={handleYearChange} style={{backgroundColor:"rgb(244, 244, 244)",height:"30px",width:"150px",border: "none"}}>
                    {[...Array(101)].map((_, index) => {
                      const year = currentYear - index;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
             </div>
        )}
</>
</div>
            </CCol>
          </CRow></CCardHeader>
            <CCardBody>
              <CCardBody>
                <CRow>
                <div>
                  <div id="chart">
                    <ReactApexChart options={seriesData.options} series={seriesData.series} type="bar" height={350} />
                  </div>
                </div>
            </CRow>
            </CCardBody>
            {/* <CChartLine
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
          /> */}
            </CCardBody>
</CCard>
<CRow>
<CCol md={6} sm={6}>
<CCard className="mb-4 paddingzero">
<CCardHeader>
<CRow>
            <CCol sm={12}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Lead Funnel</div>
              </h4>
            </CCol>
</CRow>
</CCardHeader>
<CCardBody>
<CRow>
    <CCol md={12} sm={12} >
    <div class="pyramid">
    <div class="zone"><p class="numberdesign-circle">1000</p></div>
    <div class="zone"><p class="numberdesign-circle">25000</p></div>
    <div class="zone"><p class="numberdesign-circle">50000</p></div>
    <div class="zone"><p class="numberdesign-circle">75000</p></div>
    <div class="zone"><p class="numberdesign-circle">100000</p></div>
  </div>
  <svg width="0" height="0">
    <defs>
   <clipPath id="part1" clipPathUnits= "objectBoundingBox">
     <polygon points= "0.5 0, 1 1, 0 1"/>
   </clipPath>
   <clipPath id="part2" clipPathUnits= "objectBoundingBox">
     <polygon points= "0.25 0,0.75 0, 1 1, 0 1"/>
   </clipPath>
   <clipPath id="part3" clipPathUnits= "objectBoundingBox">
     <polygon points= "0.165 0,0.83 0, 1 1, 0 1"/>
   </clipPath>
   <clipPath id="part4" clipPathUnits= "objectBoundingBox">
     <polygon points= "0.125 0,0.875 0, 1 1, 0 1"/>
   </clipPath>
   <clipPath id="part5" clipPathUnits= "objectBoundingBox">
     <polygon points= "0.995 0,0.90 0, 1 1, 0 1"/>
   </clipPath>
     </defs>
</svg>
  </CCol>
  {/* <CCol md={2}>
  <div class="number">
    <div className='stage1'>Stage 1</div>
    <div className='stage2'>Stage 2</div>
    <div className='stage3'>Stage 3</div>
    <div className='stage4'>Stage 4</div>
    <div className='stage5'>Stage 5</div>
  </div>
  </CCol> */}
</CRow>
<CRow>
<CCol md={12} sm={12}>
  <div class="number">
  <div className='satges1'></div><span className='stage1'>Lead</span>
   <div className='satges2'></div> <div className='stage1'>Verified Lead</div>
   <div className='satges3'></div> <div className='stage1'>Appointment Booked</div>
    <div className='satges4'></div><div className='stage1'>Walkin</div>
    <div className='satges5'></div><div className='stage1'>Surgeries</div>
  </div>
  </CCol>
</CRow>
</CCardBody>
</CCard>


</CCol>
<CCol md={6} sm={6}>

<CCard className="mb-4 paddingzero">
<CCardHeader>
<CRow>
            <CCol sm={12}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Recent Activity</div>
              </h4>
            </CCol>
</CRow>

</CCardHeader>
<CCardBody>
<div className='counselorbox'>
<CRow className='marginbottom15'>
      <CCol md={2} sm={2} xs={2}>
      <CAvatar src={student} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
          <div className='recentlogin'>Siva Kumar logged on to the CRM</div>
          <div className='recenttime'>05 Dec 22 | 09:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'>
      <CCol md={2} sm={2} xs={2}>
      <CAvatar src={student1} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Hari logged on to the CRM</div>
<div className='recenttime'>03 Dec 22 | 11:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'> 
      <CCol  md={2} sm={2} xs={2}>
      <CAvatar src={student2} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Dinesh Kumar logged on to the CRM</div>
<div className='recenttime'>01 Dec 22 | 10:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'>
      <CCol  md={2} sm={2} xs={2}> 
      <CAvatar src={student3} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Meena logged on to the CRM</div>
<div className='recenttime'>04 Dec 22 | 08:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'>
      <CCol  md={2} sm={2} xs={2}>
      <CAvatar src={student4} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Selva Kumar logged on to the CRM</div>
<div className='recenttime'>02 Dec 22 | 10:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'> 
      <CCol md={2} sm={2} xs={2}>
      <CAvatar src={student2} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Dinesh Kumar logged on to the CRM</div>
<div className='recenttime'>01 Dec 22 | 11:25 AM</div>
      </CCol>
</CRow>
<CRow className='marginbottom15'>
      <CCol  md={2} sm={2} xs={2}>
      <CAvatar src={student3} size="md" className=''/>
      </CCol>
      <CCol md={10} sm={10} xs={10}>
<div className='recentlogin'>Meena logged on to the CRM</div>
<div className='recenttime'>04 Dec 22 | 08:25 AM</div>
      </CCol>
</CRow>
</div>
</CCardBody>
</CCard>
</CCol>
</CRow>

     
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Top Channels</div>
          </h4>
      </CCol>

      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>
              <div className="row">

    <div className="col-lg-5">
      
    </div>
  </div>
                </div>
      </CCol>
      <div className="row">
  <div className="col-lg-6">
    <CDateRangePicker
      label="Date range"
      locale="en-US"
      onStartDateChange={(date) => console.log(date)}
      onEndDateChange={(date) => console.log(date)}
    />
   
  </div> 
  </div>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={12} sm={12}>
  <CRow  md={12} sm={12} xl={12} xs={12}>
    <div className='topchannel'>Channels</div>
  <div id="chart">
    <ReactApexChart options={options} series={series} type="bar" height={200} />
    </div>
  </CRow>
  
  
</CCol>
</CRow>
</CCardBody>
</CCard>
  
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
  <ReactApexChart options={donutoptions} series={donutseries} type="donut" height={350} />
  
</CCol>
<CCol md={6} sm={6}>
  <div className='topchannel marginbottom15'><span className='lightbox'>Conversion</span></div>
  <ReactApexChart options={donut1options} series={donut1series} type="donut" height={350} />
</CCol>
</CRow>
</CCardBody>
</CCard>
  

<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Geographic</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={5} sm={5}>
<div className="mapsvg">
      <MapChart />
</div>
</CCol>
<CCol md={7} sm={7}>
<CTable align="middle" className="mb-0" hover responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Place Name</CTableHeaderCell>
                    <CTableHeaderCell>Visited</CTableHeaderCell>
                    <CTableHeaderCell>Applied</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Fee Paid</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Joined</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Chennai
                      </CTableDataCell>
                      <CTableDataCell>
                      698
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      522
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Salem
                      </CTableDataCell>
                      <CTableDataCell>
                      523
                      </CTableDataCell>
                      <CTableDataCell>
                      498
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      432
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Coimbatore
                      </CTableDataCell>
                      <CTableDataCell>
                      700
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      546
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      65
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Trichy
                      </CTableDataCell>
                      <CTableDataCell>
                      589
                      </CTableDataCell>
                      <CTableDataCell>
                      458
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      123
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Vilupuram
                      </CTableDataCell>
                      <CTableDataCell>
                      563
                      </CTableDataCell>
                      <CTableDataCell>
                      456
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      363
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Bengalore
                      </CTableDataCell>
                      <CTableDataCell>
                      552
                      </CTableDataCell>
                      <CTableDataCell>
                      422
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      333
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Madurai
                      </CTableDataCell>
                      <CTableDataCell>
                      452
                      </CTableDataCell>
                      <CTableDataCell>
                      42
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      752
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      36
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
</CCol>
</CRow>
</CCardBody>
</CCard>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Demographic</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={12} sm={12}>
  <CRow>
     <div id="chart" className='doublebar'>
    <ReactApexChart options={genderoptions} series={genderseries} type="bar" height={350} />
    </div> 
  </CRow>
 
</CCol>
</CRow>
</CCardBody>
</CCard>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton displayinlineblock'>Performance</div><span className='performancespan'>Your Performance by day of week and time of day</span>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={12} sm={12}>
<div id="chart">
<ReactApexChart options={heatmapoptions} series={heatmapseries} type="heatmap" height={350} />
</div>
</CCol>
</CRow>
</CCardBody>
</CCard>
<CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='telecallerperformancebutton'>Telecaller Performance</div>
          </h4>
      </CCol>
      <CCol sm={7} className="d-none d-md-block">
      <div className='input-wrap pullright marginleftsearch'>
        <label for="search" id="input-label">Search</label>
        <CIcon icon={cilSearch} size="lg" /> <input name="search" id="product-search" placeholder="Search"/>
        
      </div>
      </CCol>
      </CRow>
</CCardHeader>
<CCardBody>
<CRow>
<CCol md={4} sm={4} lg={3} className="margintop20">
  <div className='counselorbox'>
    <CRow>
      <CCol md={3} sm={3} className="text-center">
      <CAvatar src={student} size="md" className='margintop5'/>
      </CCol>
      <CCol md={9} sm={9}>
<div className='counselorTitle'>Arun Kumar</div>
<div className='counselorDesignation'><span>Telecaller</span></div>
      </CCol>
    </CRow>
    <div className='margintop20'></div>
    <div className='leadcount'>Total Leads<span>563</span></div>

    <div className='leadcount'>Attended Leads<span>65</span></div>
    <div className='leadcount'>Converted Leads<span className='colorgreen'>12</span></div>
    <div className='margintop30'></div>
    <CRow className='textcenter'>
      <CCol md={3} sm={3} xs={6} className="d-none d-md-block">
        <div className='bookicon margintop10'><span><CIcon icon={bookicon} size="lg" /></span></div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Hot</div>
        <div className='quantityno'>12</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Warm</div>
        <div className='quantityno'>16</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Cold</div>
        <div className='quantityno'>6</div>
      </CCol>
    </CRow>
    <div className='margintop15'></div>
    <CRow>
    <CCol md={12} sm={12}>
      <div className='viewbutton'><span>View</span></div>
      </CCol>
      </CRow>
  </div>
</CCol>
<CCol md={4} sm={4} lg={3} className="margintop20">
  <div className='counselorbox'>
    <CRow>
    <CCol md={3} sm={3} className="text-center">
      <CAvatar src={student1} size="md" className='margintop5'/>
      </CCol>
      <CCol md={9} sm={9}>
<div className='counselorTitle'>Dinesh Kumar</div>
<div className='counselorDesignation'><span>Telecaller</span></div>
      </CCol>
    </CRow>
    <div className='margintop20'></div>
    <div className='leadcount'>Total Leads<span>563</span></div>

    <div className='leadcount'>Attended Leads<span>65</span></div>
    <div className='leadcount'>Converted Leads<span className='colorgreen'>12</span></div>
    <div className='margintop30'></div>
    <CRow className='textcenter'>
      <CCol md={3} sm={3} className="d-none d-md-block">
        <div className='bookicon margintop10'><span><CIcon icon={bookicon} size="lg" /></span></div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Hot</div>
        <div className='quantityno'>12</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Warm</div>
        <div className='quantityno'>16</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Cold</div>
        <div className='quantityno'>6</div>
      </CCol>
    </CRow>
    <div className='margintop15'></div>
    <CRow>
    <CCol md={12} sm={12}>
      <div className='viewbutton'><span>View</span></div>
      </CCol>
      </CRow>
  </div>
</CCol>
<CCol md={4} sm={4} lg={3} className="margintop20">
  <div className='counselorbox'>
    <CRow>
    <CCol md={3} sm={3} className="text-center">
      <CAvatar src={student2} size="md" className='margintop5'/>
      </CCol>
      <CCol md={9} sm={9}>
<div className='counselorTitle'>Siva Kumar</div>
<div className='counselorDesignation'><span>Telecaller</span></div>
      </CCol>
    </CRow>
    <div className='margintop20'></div>
    <div className='leadcount'>Total Leads<span>563</span></div>

    <div className='leadcount'>Attended Leads<span>65</span></div>
    <div className='leadcount'>Converted Leads<span className='colorgreen'>12</span></div>
    <div className='margintop30'></div>
    <CRow className='textcenter'>
      <CCol md={3} sm={3} className="d-none d-md-block">
        <div className='bookicon margintop10'><span><CIcon icon={bookicon} size="lg" /></span></div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Hot</div>
        <div className='quantityno'>12</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Warm</div>
        <div className='quantityno'>16</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Cold</div>
        <div className='quantityno'>6</div>
      </CCol>
    </CRow>
    <div className='margintop15'></div>
    <CRow>
    <CCol md={12} sm={12}>
      <div className='viewbutton'><span>View</span></div>
      </CCol>
      </CRow>
  </div>
</CCol>
<CCol md={4} sm={4} lg={3}  className="margintop20">
  <div className='counselorbox'>
    <CRow>
    <CCol md={3} sm={3} className="text-center">
      <CAvatar src={student3} size="md" className='margintop5'/>
      </CCol>
      <CCol md={9} sm={9}>
<div className='counselorTitle'>Selva Kumar</div>
<div className='counselorDesignation'><span>Telecaller</span></div>
      </CCol>
    </CRow>
    <div className='margintop20'></div>
    <div className='leadcount'>Total Leads<span>563</span></div>

    <div className='leadcount'>Attended Leads<span>65</span></div>
    <div className='leadcount'>Converted Leads<span className='colorgreen'>12</span></div>
    <div className='margintop30'></div>
    <CRow className='textcenter'>
      <CCol md={3} sm={3} className="d-none d-md-block">
        <div className='bookicon margintop10'><span><CIcon icon={bookicon} size="lg" /></span></div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Hot</div>
        <div className='quantityno'>12</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Warm</div>
        <div className='quantityno'>16</div>
      </CCol>
      <CCol md={3} sm={3} xs={4}>
        <div className='leadquality'>Cold</div>
        <div className='quantityno'>6</div>
      </CCol>
    </CRow>
    <div className='margintop15'></div>
    <CRow>
    <CCol md={12} sm={12}>
      <div className='viewbutton'><span>View</span></div>
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
export default Dashboard_admin;