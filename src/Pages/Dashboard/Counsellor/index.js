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
import ReactApexChart from "react-apexcharts";
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,cilChevronLeft,
} from '@coreui/icons'
import {download_sub,left,right} from './icon';
import Leadallocationvsattend from './leadallocationvsattend'
import Communicationandcalendar from './communicationandcalendar'
import Counsellorcomparison from './counsellorcomparison'
import Counsellorcalendar from './counsellorcalendar'
function Dashboard_counsellor() 
{
    return (
        <>
        <Leadallocationvsattend />
        <Communicationandcalendar />
        <Counsellorcomparison/>
        <Counsellorcalendar/>
        </>
    );
}
export default Dashboard_counsellor;