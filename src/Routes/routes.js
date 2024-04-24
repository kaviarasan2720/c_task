import React from 'react'

//const Dashboard = React.lazy(() => import('../Pages/Dashboard'))
//const Application = React.lazy(() => import('../Pages/Application'))
//const Application_Formone = React.lazy(() => import('../Pages/Application/form_one'))
//const Application_Formsecond = React.lazy(() => import('../Pages/Application/form_second'))
//const Application_Formthree = React.lazy(() => import('../Pages/Application/form_three'))
//const Application_Formfour = React.lazy(() => import('../Pages/Application/form_four'))
//const Application_Formconfirm = React.lazy(() => import('../Pages/Application/form_confirm'))
//const Payment = React.lazy(() => import('../Pages/Payment'))
//const Payment_detail = React.lazy(() => import('../Pages/Payment/detail'))
//const Profile = React.lazy(() => import('../Pages/Profile'))
//const CardProfile = React.lazy(() => import('../Pages/Profile/image'))
//const Profile_Changepassword = React.lazy(() => import('../Pages/Profile/change-password'))
//const Support = React.lazy(() => import('../Pages/Support'))

import Dashboard from "../Pages/Dashboard";

/* Dashboard Start */

import Dashboard_admin from "../Pages/Dashboard/Admin/";
import Dashboard_marketing from "../Pages/Dashboard/Marketing/";
import Dashboard_counsellor from "../Pages/Dashboard/Counsellor/";
import Dashboard_target_achieved from "../Pages/Dashboard/Target-Achieved/";
import Dashboard_user_analytics from "../Pages/Dashboard/User-Analytics/";
import Dashboard_website_analytics from "../Pages/Dashboard/Website-Analytics/";

/* Dashboard End */

/* Lead Start */

import Lead from "../Pages/Leads/";
import Lead_reports from "../Pages/Leads/Reports/";
import Lead_raw_upload from "../Pages/Leads/Rawupload/";
import Lead_add from "../Pages/Leads/add";
import Lead_edit from "../Pages/Leads/edit";

/* Lead End */

/* Application Start */

import Application from "../Pages/Application/";
import Application_reports from "../Pages/Application/Reports/";
import Application_raw_upload from "../Pages/Application/Rawupload/";

/* Application End */

/* User Start */

import User from "../Pages/User/";
import Create_user from "../Pages/User/create";
import Edit_user from "../Pages/User/edit";
import User_access_control from "../Pages/User/access-control";
import User_access_control_create from "../Pages/User/access-control-create";
import User_log_activity from "../Pages/User/log-activity";
import User_user_activity from "../Pages/User/user-activity";

/* User End */

/* Settings Start */

import Integrations from "../Pages/Settings/integrations";
import Support from "../Pages/Settings/support";

/* Settings End */

/* Ticket Start */

import Ticket from "../Pages/Ticket/";
import Create_ticket from "../Pages/Ticket/create";
import Create_ticket_add from "../Pages/Ticket/add";

/* Ticket End */

/* Communication Start */

import Communication_all from "../Pages/Communication/";
import Communication_sms from "../Pages/Communication/Sms/list";
import Communication_sms_create from "../Pages/Communication/Sms/create"; 
import Communication_sms_edit from "../Pages/Communication/Sms/edit"; 
import Communication_sms_view from "../Pages/Communication/Sms/view"; 
import Communication_sms_senderid from "../Pages/Communication/Sms/senderid";
import Communication_sms_senderid_create from "../Pages/Communication/Sms/senderid-create";
import Communication_sms_senderid_edit from "../Pages/Communication/Sms/senderid-edit";
import Communication_sms_senderid_view from "../Pages/Communication/Sms/senderid-view";

import Communication_email from "../Pages/Communication/Email/list";
import Communication_email_create from "../Pages/Communication/Email/create"; 
import Communication_email_edit from "../Pages/Communication/Email/edit"; 
import Communication_email_view from "../Pages/Communication/Email/view"; 

import Communication_whatsapp from "../Pages/Communication/Whatsapp/list";
import Communication_whatsapp_create from "../Pages/Communication/Whatsapp/create";
import Communication_whatsapp_edit from "../Pages/Communication/Whatsapp/edit"; 
import Communication_whatsapp_view from "../Pages/Communication/Whatsapp/view";  



import All_Apointments from '../Pages/Appointment/Allappointment/';
import Generals from '../Pages/Appointment/General/';
import Lasik_Overall from '../Pages/Appointment/Lasik/';
import Smile_Overall from '../Pages/Appointment/Smile/';
/* Communication End */

/* Settings Start */

import Payment from "../Pages/Payment/";


/* Settings End */



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard/admin', name: 'Admin', element: Dashboard_admin },
  // { path: '/dashboard/marketing', name: 'Marketing', element: Dashboard_marketing },
  { path: '/dashboard/counsellor', name: 'Telecaller', element: Dashboard_counsellor },
  { path: '/dashboard/target-achieved', name: 'Target/Achieved', element: Dashboard_target_achieved },
  { path: '/dashboard/user-analytics', name: 'User Analytics', element: Dashboard_user_analytics },
  // { path: '/dashboard/website-analytics', name: 'Website Analytics', element: Dashboard_website_analytics },
  
  { path: '/lead/list', name: 'Lead List', element: Lead },
  { path: '/lead/reports', name: 'Lead reports', element: Lead_reports },
  { path: '/lead/raw-upload', name: 'Raw Upload', element: Lead_raw_upload },
  { path: '/lead/create', name: 'Add Lead', element: Lead_add },
  { path: '/lead/edit' ,  name: 'Edit Lead', element: Lead_edit },

  { path: '/lead/allapointments', name: 'All apointments', element: All_Apointments },  //********** */
  { path: '/lead/general', name: 'General', element: Generals },
  { path: '/lead/lasik', name: 'Lasik', element: Lasik_Overall },
  { path: '/lead/smile', name: 'Smile', element: Smile_Overall },


  { path: '/application/list', name: 'Application List', element: Application },
  { path: '/application/reports', name: 'Application reports', element: Application_reports },
  { path: '/application/raw-upload', name: 'Raw Upload', element: Application_raw_upload },

  { path: '/user/list', name: 'User List', element: User },
  { path: '/user/create', name: 'Create User', element: Create_user },
  { path: '/user/list/:id', name: 'Edit User', element: Edit_user },
  { path: '/user/access-control', name: 'Access Control', element: User_access_control },
  { path: '/user/access-control/create', name: 'Create Role', element: User_access_control_create },
  { path: '/user/log-activity', name: 'Log Activity', element: User_log_activity },
  { path: '/user/user-activity', name: 'User Activity', element: User_user_activity },

  { path: '/settings/integrations', name: 'Integrations List', element: Integrations },
  { path: '/settings/support', name: 'Support', element: Support },

  { path: '/ticket/manage', name: 'Manage', element: Ticket },
  { path: '/ticket/create', name: 'Ticket', element: Create_ticket },
  { path: '/ticket/create/add', name: 'Create', element: Create_ticket_add },

  { path: '/communication/all', name: 'All Communication', element: Communication_all },
  { path: '/communication/sms', name: 'SMS Listing', element: Communication_sms },
  { path: '/communication/sms/create', name: 'SMS Create', element: Communication_sms_create },
  { path: '/communication/sms/edit/:id', name: 'SMS Edit', element: Communication_sms_edit },
  { path: '/communication/sms/view/:id', name: 'SMS View', element: Communication_sms_view },
  { path: '/communication/sms/senderid-list', name: 'Sender Id Listing', element: Communication_sms_senderid },
  { path: '/communication/sms/senderid-create', name: 'Sender Id Create', element: Communication_sms_senderid_create },
  { path: '/communication/sms/senderid-edit/:id', name: 'Sender Id Edit', element: Communication_sms_senderid_edit },
  { path: '/communication/sms/senderid-view/:id', name: 'Sender Id View', element: Communication_sms_senderid_view },

  { path: '/communication/email', name: 'Email Listing', element: Communication_email },
  { path: '/communication/email/create', name: 'Email Create', element: Communication_email_create },
  { path: '/communication/email/edit/:id', name: 'Email Edit', element: Communication_email_edit },
  { path: '/communication/email/view/:id', name: 'Email View', element: Communication_email_view },

  { path: '/communication/whatsapp', name: 'Whatsapp Listing', element: Communication_whatsapp },
  { path: '/communication/whatsapp/create', name: 'Whatsapp Create', element: Communication_whatsapp_create },
  { path: '/communication/whatsapp/edit/:id', name: 'Whatsapp Edit', element: Communication_whatsapp_edit },
  { path: '/communication/whatsapp/view/:id', name: 'Whatsapp View', element: Communication_whatsapp_view },
  { path: '/payment/list', name: 'Payment List', element: Payment },

]

export default routes
