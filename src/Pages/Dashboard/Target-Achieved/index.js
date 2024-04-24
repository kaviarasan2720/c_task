import React,{ Component,useState} from 'react'
import Targetcount from '../Common/targetcount'
import TargettoAchieved from './targettoachieved'
import Targetvssource from './targetvssource'
import Targetvsapplication from './targetvsapplication'
import Targetvspayment from './targetvspayment'
function Dashboard_target_achieved() 
{
    return (
    <>
       <Targetcount />
       <TargettoAchieved />
       <Targetvssource />
       <Targetvsapplication />
       <Targetvspayment />
    </>
    );
}
export default Dashboard_target_achieved;