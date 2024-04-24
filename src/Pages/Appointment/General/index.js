import React,{ Component} from 'react'
import Applicationchart from './applicationchart'
import General from './general'
import Dashbardcount from '../common/dashbardcount';
function Generals() 
{
    return (
    <>
    <Dashbardcount />
       <Applicationchart />
       <General />
    </>
    );
}
export default Generals;