import React,{ Component,useState} from 'react'
import {
    CRow,
} from '@coreui/react'
import Leftmenu from './leadleft'
import Rightdetail from './rightdetail'
function Lead_edit() 
{
    
    return (
    <>
    <CRow >
       <Leftmenu />
       <Rightdetail />
    </CRow>
    </>
    );
}
export default Lead_edit;