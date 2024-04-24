import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CFormCheck
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
// import {edit,view,filter,plus,column,download,more} from '../../Assets/Images/Lead/menu';
import {edit,view,filter,plus,column,download,more} from '../../../Assets/Images/Lead/menu';
const General = () => {
    return (
        <>
        <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
                <CCol md={6} className='margintop10'>
                <span className='filterbox'>
                    <CIcon icon={filter} />
                    </span>
            <div className='displayinlineblock'>
            <div className='input-wrap-lead'>
            <input name="search" id="product-search-lead" placeholder="Search Mobile or Email"/>
            <CIcon icon={cilSearch} size="lg" />
            </div>
            </div>
                </CCol>
                <CCol md={6}>
                    <ul className='customlisvg pullright'>
                        <li><CIcon icon={column} customClassName="nav-icon"/><div>Columns</div></li>
                        <li><CIcon icon={download} customClassName="nav-icon"/><div>Download</div></li>
                        <li><CIcon icon={more} customClassName="nav-icon"/><div>More</div></li>
                    </ul>
               
                </CCol>
            </CRow>
          </CCardHeader>
            <CCardBody>
            <CTable align="middle" className="mb-0" border responsive>
                <CTableHead className="leadheadcolor" color="light">
                  <CTableRow>
                    <CTableHeaderCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableHeaderCell>
                    <CTableHeaderCell>S.no</CTableHeaderCell>
                    <CTableHeaderCell>Appointment No</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Service</CTableHeaderCell>
                    <CTableHeaderCell>Source</CTableHeaderCell>
                    <CTableHeaderCell>Date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Control</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>01</CTableDataCell>
                      <CTableDataCell>Selva kumar</CTableDataCell>
                      <CTableDataCell>selva@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Chennai</CTableDataCell>
                      <CTableDataCell>careers360</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems" className='leadselectcolor'>
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" defaultChecked/></CTableDataCell>
                      <CTableDataCell>02</CTableDataCell>
                      <CTableDataCell>Dinesh kumar</CTableDataCell>
                      <CTableDataCell>dinesh@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech ECE</CTableDataCell>
                      <CTableDataCell>Avadi</CTableDataCell>
                      <CTableDataCell>42andmore</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>03</CTableDataCell>
                      <CTableDataCell>Jai ganesh</CTableDataCell>
                      <CTableDataCell>ganesh@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech CSE</CTableDataCell>
                      <CTableDataCell>T.nagar</CTableDataCell>
                      <CTableDataCell>careers360</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>04</CTableDataCell>
                      <CTableDataCell>Meena</CTableDataCell>
                      <CTableDataCell>meena@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Chennai</CTableDataCell>
                      <CTableDataCell>College dekho</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>05</CTableDataCell>
                      <CTableDataCell>Priya</CTableDataCell>
                      <CTableDataCell>priya@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Velacherry</CTableDataCell>
                      <CTableDataCell>careers360</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>06</CTableDataCell>
                      <CTableDataCell>Lokes</CTableDataCell>
                      <CTableDataCell>lokes@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech IT</CTableDataCell>
                      <CTableDataCell>Guindy</CTableDataCell>
                      <CTableDataCell>42andmore</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>07</CTableDataCell>
                      <CTableDataCell>Suresh Kumar</CTableDataCell>
                      <CTableDataCell>sureshkumar@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Chennai</CTableDataCell>
                      <CTableDataCell>College dekho</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>08</CTableDataCell>
                      <CTableDataCell>Sivakumar</CTableDataCell>
                      <CTableDataCell>sivakumar@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Trichy</CTableDataCell>
                      <CTableDataCell>42andmore</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>09</CTableDataCell>
                      <CTableDataCell>Sam</CTableDataCell>
                      <CTableDataCell>sam@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Namakal</CTableDataCell>
                      <CTableDataCell>careers360</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      <CTableDataCell>10</CTableDataCell>
                      <CTableDataCell>Benjamin</CTableDataCell>
                      <CTableDataCell>benjamin@gmail.com</CTableDataCell>
                      <CTableDataCell>B Tech EEE</CTableDataCell>
                      <CTableDataCell>Salem</CTableDataCell>
                      <CTableDataCell>College dekho</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div>
                        <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div>
                      </CTableDataCell>
                    </CTableRow>
                    
                </CTableBody>
              </CTable>
            </CCardBody>
</CCard>
        </>
    );
}
export default General;