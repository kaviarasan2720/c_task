import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilCreditCard,
  cilUser,
  cilStar,
  cilHeadphones,
  cilAccountLogout
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import {dashboard,lead,application,communication,
  templates,payment,user,settings,ticket} from '../../Assets/Images/Icon/menu';
const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={dashboard} customClassName="nav-icon" />
  // },
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={dashboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin',
        to: '/dashboard/admin',
      },
      // {
      //   component: CNavItem,
      //   name: 'Marketing',
      //   to: '/dashboard/marketing',
      // },
      {
        component: CNavItem,
        name: 'Telecaller',
        to: '/dashboard/counsellor',
      },
      {
        component: CNavItem,
        name: 'Target/Achieved',
        to: '/dashboard/target-achieved',
      },
      {
        component: CNavItem,
        name: 'User Analytics',
        to: '/dashboard/user-analytics',
      },
      // {
      //   component: CNavItem,
      //   name: 'Website Analytics',
      //   to: '/dashboard/website-analytics',
      // }
    ],
  },
  {
    component: CNavGroup,
    name: 'Leads',
    to: '/lead',
    icon: <CIcon icon={lead} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leads',
        to: '/lead/list',
      },
      // {
      //   component: CNavItem,
      //   name: 'Reports',
      //   to: '/lead/reports',
      // },
      {
        component: CNavItem,
        name: 'Raw upload',
        to: '/lead/raw-upload',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Application Manager',
    to: '/application',
    icon: <CIcon icon={application} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Applications ',
        to: '/application/list',
      },
      // {
      //   component: CNavItem,
      //   name: 'Reports',
      //   to: '/application/reports',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Raw upload',
      //   to: '/application/raw-upload',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Appointments',
    to: '/application',
    icon: <CIcon icon={application} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Applications',
        to: '/lead/allapointments',
      },
      {
        component: CNavItem,
        name: 'Smile',
        to: '/lead/smile',
      },
      {
        component: CNavItem,
        name: 'Lasik',
        to: '/lead/lasik',
      },
      {
        component: CNavItem,
        name: 'General',
        to: '/lead/general',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Communication',
    to: '/communication',
    icon: <CIcon icon={communication} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Communication',
        to: '/communication/all',
      },
      {
        component: CNavItem,
        name: 'SMS ',
        to: '/communication/sms',
      },
      {
        component: CNavItem,
        name: 'Email',
        to: '/communication/email',
      },
      {
        component: CNavItem,
        name: 'Whatsapp',
        to: '/communication/whatsapp',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Template Manager',
  //   to: '/template',
  //   icon: <CIcon icon={templates} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Create template ',
  //       to: '/template/create',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'View templates ',
  //       to: '/template/view',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Payment Manager',
    to: '/payment',
    icon: <CIcon icon={payment} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Payments ',
        to: '/payment/list',
      },
      // {
      //   component: CNavItem,
      //   name: 'Reports ',
      //   to: '/payment/reports',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'User Access ',
    to: '/user',
    icon: <CIcon icon={user} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/user/list',
      },
      {
        component: CNavItem,
        name: 'Create User',
        to: '/user/create',
      },
      {
        component: CNavItem,
        name: 'Access Control ',
        to: '/user/access-control',
      },
      {
        component: CNavItem,
        name: 'Log Activity',
        to: '/user/log-activity',
      },
      {
        component: CNavItem,
        name: 'User Activity',
        to: '/user/user-activity',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={settings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Integrations',
        to: '/settings/integrations',
      },
      {
        component: CNavItem,
        name: 'Support',
        to: '/settings/support',
      },
      // {
      //   component: CNavItem,
      //   name: 'Guide',
      //   to: '/settings/guide',
      // }
    ],
  },
  {
    component: CNavGroup,
    name: 'Ticket Manager',
    to: '/ticket',
    icon: <CIcon icon={ticket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Manage ',
        to: '/ticket/manage',
      },
      {
        component: CNavItem,
        name: 'Create Ticket',
        to: '/ticket/create',
      },
    ],
  }
  
  
  /*  {
    component: CNavItem,
    name: 'Application Form',
    to: '/application',
    icon: <CIcon icon={application} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Payment & Fees',
    to: '/payment',
    icon: <CIcon icon={payment} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/support',
    icon: <CIcon icon={support} customClassName="nav-icon" />
  }  ,
  {
    component: CNavItem,
    name: 'Login',
    to: '/login',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />
  }*/
]

export default _nav
