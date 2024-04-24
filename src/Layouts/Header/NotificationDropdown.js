import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import student from './../../Assets/Images/student.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
      <CIcon icon={cilBell} size="lg"   />
      <span class="powerdesign">15</span>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownHeader className="bg-light fw-semibold py-2">You have 15 Notification</CDropdownHeader>
      <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          4 New Message 
        </CDropdownItem>
        
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          8 New Announcement
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          3 New Updates 
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
