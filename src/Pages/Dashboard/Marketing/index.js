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
import Dashbardcount from '../Common/dashbardcount'
import Leadtrend from './leadtrend'
import Topchannel from './topchannel'
import Deviceperformance from './deviceperformance'
import Geographic from './geographic'
import Demographicdetail from './demographic'
import Performancedetail from './performance'

import { CChartLine,CChartBar,CChart,CChartDoughnut} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,
} from '@coreui/icons'
import DatePicker from "react-datepicker";
import ReactApexChart from "react-apexcharts";

import {bookicon} from '../../../Assets/Images/Icon/menu';
function Dashboard_marketing() 
{
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug ', 'Sep', 
        'Oct', 'Nov', 'Dec'],
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
    }]);
    
    
    
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
    
    
    const [startDate, setStartDate] = useState(new Date());
    return (
    <>
      <Dashbardcount />
      <Leadtrend />
      <Topchannel />
      <Deviceperformance />
      <Geographic />
      <Demographicdetail />
      <Performancedetail />

    </>
    );
}
export default Dashboard_marketing;