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
import {payment_detail,download_sub} from '../Dashboard/icon';
function Payment_detail(){
    return (<>
     <CRow>
          <CCard className="mb-4 paddingzero">
            <CCardHeader className='supporttitle'>Paid Details </CCardHeader>
            <div className='margintop10'></div>
            <CCardBody>
            <CRow>
                <CCol md={2}></CCol>
                <CCol  md={8} className="custombg">
                <CRow>
                <CCol md={1} xs={3}>
                <div className="studentdashboardiconbox color3">
                <center><img src={payment_detail}/></center>
               </div>
               </CCol>
                <CCol md={5} xs={9}>
                <div>
                    <div className="invoicetitle">Invoice number - REC20221118</div>
                    <div className="invoicedate">Paid 10 22 November 2022 <div className='doughtgreencolor'></div> <span style={{color:"#66DB94"}}>UPI Transfer</span></div>
                </div>
                </CCol>
                <CCol md={6}>
                <div className="amountbox">Rs 1500.00 <span><div class="icon-animated-payment icon-animated-tick-payment" tabindex="-1" aria-hidden="true">
	               <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		           <circle cx="50" cy="50" r="50"/>
	               </svg>
                   <div class="tick">
		           <svg class="tick-leg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
			       <polygon class="" points="1,41 0,48 25,52 25,45" />
		           </svg>
		           <svg class="tick-leg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
			       <polygon class="" points="18,45 25,47 25,0 18,0" />
		           </svg>
	               </div>
                </div>Paid</span></div>
                </CCol>
                </CRow>
                <div className="margintop20"></div>
                <CRow>
                <CCol md={12}>
                <CTable align="middle" className="mb-0 customborder" responsive>
                <CTableHead className="headcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell>Cost Breakdown</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='bodycolor customcolor'>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Application Cost<span>Rs 1500.00</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Discount<span>Rs 0.00</span>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" >
                      <CTableDataCell>
                      Amount Paid<span>Rs 1500.00</span>
                      </CTableDataCell>
                    </CTableRow>
                </CTableBody>
              </CTable>
                </CCol>

                </CRow>
               <div className="margintop20"></div>
               <div className='downloadinvoice'><img src={download_sub} className="marginright3" /> Downloade Invoice</div>
            </CCol>
           
            </CRow>
            </CCardBody>
            </CCard>
        </CRow>
    </>);
}
export default Payment_detail;