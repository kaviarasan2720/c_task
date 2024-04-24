import React,{ Component} from 'react'
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
    CFormInput,
    CFormLabel,
    CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react' 
import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilSearch,cilXCircle,cilHome } from '@coreui/icons'
import {dashboard,lead,application,communication,
    templates,payment,user,settings,ticket} from '../../Assets/Images/Icon/menu';
import { Link } from 'react-router-dom';
function Create_user() 
{
    return (
    <>
    <div className='ticketsearchbox'>
        <div className='tickettitle'>Tell Us What You Need Help With</div>
        <div className=''>
        <div className='searchicon'><CIcon icon={cilSearch} size="lg" /></div>
        <input name="search" class="ticketsearch" placeholder="Search here"/>
        {/* <div className='searchicon'><CIcon icon={cilSearch} size="lg" /></div> */}
        </div>
        </div>
     <CCard className="mb-4 paddingzero noborderradius">
    <CCardBody>
        
        <div className='margintop20'></div>
        <div>
        <CRow className='ticketshowbox'>
          <CCol md={6}>
            <div className='ticketiconbox'><CIcon icon={ticket} size="lg" /></div>
          <div className='ticketheading'>It is a long established fact that a reader will be distracted by the readable</div>
          <div className='ticketdescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='readmore'>Read more</div>
          </CCol>
          <CCol md={6}>
            <div className='ticketiconbox'><CIcon icon={ticket} size="lg" /></div>
          <div className='ticketheading'>It is a long established fact that a reader will be distracted by the readable</div>
          <div className='ticketdescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='readmore'>Read more</div>
          </CCol>
          <CCol md={6}>
            <div className='ticketiconbox'><CIcon icon={ticket} size="lg" /></div>
          <div className='ticketheading'>It is a long established fact that a reader will be distracted by the readable</div>
          <div className='ticketdescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='readmore'>Read more</div>
          </CCol>
          <CCol md={6}>
            <div className='ticketiconbox'><CIcon icon={ticket} size="lg" /></div>
          <div className='ticketheading'>It is a long established fact that a reader will be distracted by the readable</div>
          <div className='ticketdescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='readmore'>Read more</div>
          </CCol>
          <CCol md={12}>
    <div className="margintop40">
    <Link to="/ticket/create/add"><CButton className='buttonsubmit pullright'>Skip</CButton></Link>
    </div>
    </CCol>
       </CRow>
        </div>
    </CCardBody>
    </CCard>
    </>
    );
}
export default Create_user;