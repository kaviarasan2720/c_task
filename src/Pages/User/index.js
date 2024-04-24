import React,{ Component} from 'react'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
} from '@coreui/react'
import student from '../../Assets/Images/student.jpg'
import student1 from '../../Assets/Images/student1.png'
import student2 from '../../Assets/Images/student2.png'
import student3 from '../../Assets/Images/student3.png'
import student4 from '../../Assets/Images/student4.png'
import {message,pencil,edit} from '../../Assets/Images/User/menu';
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
function User() 
{
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>All Users</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student} /></div>
            <div class="leadstatus activecolorset"><span class="leadactivecolor"></span>Active</div>
            <div className='username'>Siva Prabhgar</div>
            <div className='userdesignation'>Admin Panel</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/1"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student1} /></div>
            <div class="leadstatus activecolorset"><span class="leadactivecolor"></span>Active</div>
            <div className='username'>Dinesh kumar</div>
            <div className='userdesignation'>Admin Panel</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/2"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student2} /></div>
            <div class="leadstatus inactivecolorset"><span class="leadinactivecolor"></span>Inactive</div>
            <div className='username'>Gopi </div>
            <div className='userdesignation'>Admin Panel</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/3"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student3} /></div>
            <div class="leadstatus activecolorset"><span class="leadactivecolor"></span>Active</div>
            <div className='username'>Meena</div>
            <div className='userdesignation'>Admin Panel</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/4"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student4} /></div>
            <div class="leadstatus inactivecolorset"><span class="leadinactivecolor"></span>Inactive</div>
            <div className='username'>Siva Prabhgar</div>
            <div className='userdesignation'>Admin</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/5"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
      <CCol sm={4} md={4}>
        <div className='userboxdesign textaligncenter'>
            <div className='userimagewidth'><CAvatar src={student} /></div>
            <div class="leadstatus activecolorset"><span class="leadactivecolor"></span>Active</div>
            <div className='username'>Selva kumar</div>
            <div className='userdesignation'>Admin</div>
            <div className='usertitle'><ul><li>Admin</li><li>Business Analysist</li></ul> </div>
            <div className='userline'></div>
            <div className='usericon'>
                <CRow>
                <CCol md={4}><CIcon icon={message} /></CCol>
                <CCol md={4}><Link to="/user/list/6"><CIcon icon={pencil} /></Link></CCol>
                <CCol md={4}><CIcon icon={edit} /></CCol>
                </CRow>
            </div>
        </div>
      </CCol>
    </CRow>
    </CCardBody>
    </CCard>
    </>
    );
}
export default User;