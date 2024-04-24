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
const Userbytime = () => {
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
    return (
        <>
        <CCard className="mb-4 paddingzero">
<CCardHeader>
    <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton displayinlineblock'>Users by time of day</div>
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
</>
);

}
export default Userbytime;
