import React from "react";
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
import { Link } from "react-router-dom";
import Paymentcount from '../Dashboard/Common/paymentcount'
import Paymenttable from './list'
function Payment(){
    return (
        <>
       <Paymentcount />
       <Paymenttable />
        </>
    );
}
export default Payment;