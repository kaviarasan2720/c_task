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
import { Link,useNavigate  } from "react-router-dom";
import student from './../../Assets/Images/student.jpg'
import API from "../../Config/api";

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const logout = () =>{
    const apiUrl= API +'login/logout';
    //alert(localStorage.getItem('UserId'));
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
          "userId": localStorage.getItem('UserId'),
          "token": localStorage.getItem('Token'),
          "ipaddress": "ipaddress"
    });
    const options = {
      method: 'POST',
      body: raw,
      headers: myHeaders,
      redirect: 'follow'
      };
      fetch(apiUrl,options)
      .then(res =>res.json())
      .then((result)=>
      {
      if(result.status===200)
      {
        localStorage.setItem('isLoggedIn', '');
        localStorage.setItem('LoginResponse', '');
        localStorage.setItem('UserId', '' );
        localStorage.setItem('UserName', '');
        localStorage.setItem('userEmailId', '');
        localStorage.setItem('userMobilenumber', '');
        localStorage.setItem('roleId', '');
        localStorage.setItem('project', '');
        localStorage.setItem('projectUrl', '');
        localStorage.setItem('Token', '');
        navigate("/login");
      }
      },
      (error)=>{}
      )
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={student} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="/#/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/#/profile/change-password">
          <CIcon icon={cilSettings} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="javascript:void(0);" onClick={logout}>
          <CIcon icon={cilSettings} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
