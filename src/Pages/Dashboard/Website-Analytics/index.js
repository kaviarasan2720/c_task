import React,{ Component,useState} from 'react'
import Dashbardwebcount from '../Common/dashbardwebcount'
import Deviceperformance from './deviceperformance'
import Userbytime from './userbytime'
import Geobysession from './geobysession'
import Sourcemedium from './sourcemedium'
import Trafficchannel from './trafficchannel'
function Dashboard_website_analytics() 
{
    return (
    <>
    <Dashbardwebcount />
    <Trafficchannel />
    <Sourcemedium />
    <Geobysession />
    <Userbytime />
    <Deviceperformance />
    </>
    );
}
export default Dashboard_website_analytics;