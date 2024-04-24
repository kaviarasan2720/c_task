import React,{ Component} from 'react'
import Applicationchart from './applicationchart'
import Lasiks from './lasik'
import Dashbardcount from '../common/dashbardcount';
function Lasik_Overall() 
{
    return (
    <>
    <Dashbardcount />
       <Applicationchart />
       <Lasiks />
    </>
    );
}
export default Lasik_Overall;