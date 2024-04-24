import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react' 
import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilSearch,cilXCircle,cilHome } from '@coreui/icons'

import  AppBreadcrumb  from './AppBreadcrumb'
import  AppBreadcrumbright  from './AppBreadcrumbright'
import  AppHeaderDropdown  from './AppHeaderDropdown'
import  NotificationDropdown  from './NotificationDropdown'


const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-3">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src="https://42crm.com/kings/static/media/logo.ee8a3439.svg" height={35} alt="42andmore Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
        {/*<input type=""></input>
   
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>*/}
            <div className='input-wrap'>
        <label for="search" id="input-label">Search</label>
        <input name="search" id="product-search" placeholder="Search"/>
        <CIcon icon={cilSearch} size="lg" />
      </div>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#" className="positionset">
              <NotificationDropdown />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="marginleftZero">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid className='navdesign'>
        <AppBreadcrumb />
        <AppBreadcrumbright />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
