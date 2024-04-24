import React,{ Component} from 'react'
import Usercount from '../Common/usercount'
import Demographicdetail from './demographic'
import Locationdetail from './location'
import MarksAnalytics from './marksanalytics'
import Schooldetail from './schooldetail'
import Schoolgroupdetail from './schoolgroupdetail'
import Cutmarksanalytics from './cutmarksanalytics'

function Dashboard_user_analytics() 
{
    return (
    <>
        <Usercount />
        <Demographicdetail />
        <Locationdetail />
        {/* <MarksAnalytics /> */}
        {/* <Schooldetail /> */}
        <Schoolgroupdetail />
        {/* <Cutmarksanalytics /> */}
    </>
    );
}
export default Dashboard_user_analytics;