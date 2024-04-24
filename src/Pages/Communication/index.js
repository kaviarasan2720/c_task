import React,{ Component} from 'react'
import Allsms from './allsms'
import Allemail from './allemail'
import Allwhatsapp from './allwhatsapp'
import { CCol, CRow, CCard, CCardHeader, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,
} from '@coreui/icons'
function Communication_all() 
{
    return (
    <>
    <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Overview</div>
              </h4>
            </CCol>
            <CCol sm={7} className="createarrow">
            <CDropdown variant="btn-group pullright">
              <CDropdownToggle className="createbutton" size="sm">Create</CDropdownToggle>
               <CDropdownMenu>
                <CDropdownItem href="#/communication/sms/create">Add SMS</CDropdownItem>
                <CDropdownItem href="#/communication/email/create">Add Email</CDropdownItem>
                <CDropdownItem href="#/communication/whatsapp/create">Add Whatsapp</CDropdownItem>
               </CDropdownMenu>
            </CDropdown>
            </CCol>
        </CRow>
        </CCardHeader>
    </CCard>
    <CRow>
        <CCol sm={4} md={4}><Allsms /></CCol>
        <CCol sm={4} md={4}><Allemail /></CCol>
        <CCol sm={4} md={4}><Allwhatsapp /></CCol>
    </CRow>
    </>
    );
}
export default Communication_all;