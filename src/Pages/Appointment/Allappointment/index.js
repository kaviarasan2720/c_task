import React,{ Component} from 'react'
import Applicationchart from './applicationchart'
import Allapointmets from './allapointmets'
import Dashbardcount from '../common/dashbardcount';
function All_Apointments() 
{
    return (
    <>
        <Dashbardcount />
       <Applicationchart />
       <Allapointmets />
    </>
    );
}
export default All_Apointments;