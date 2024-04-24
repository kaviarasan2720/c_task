import React,{ Component} from 'react'
import Applicationchart from './applicationchart'
import Smile from './smile'
import Dashbardcount from '../common/dashbardcount';
function Smile_Overall() 
{
    return (
    <>
    <Dashbardcount />
       <Applicationchart />
       <Smile />
    </>
    );
}
export default Smile_Overall;