import React,{useState,useEffect} from 'react'
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
    CFormCheck,
    CFormLabel,
    CFormSelect,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch,cilCalendar } from '@coreui/icons'
import {edit,view,filter,plus,column,download,more,deleteicon} from '../../../Assets/Images/Lead/menu';
import { Link } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../../Config/api";
import Pagination from "react-js-pagination";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Communication_email() 
{
  const [isEmpty, setisEmpty] = useState(true);
const [email, setemail] = useState([]); 
const [activePage, setactivePage] = useState(1); 
const [show, setshow] = useState(10); 
const [pageRangeDisplayed, setpageRangeDisplayed] = useState(5);
const [search, setsearch] = useState('');
const [totalItemsCount, settotalItemsCount] = useState('');
const [itemsCountPerPage, setitemsCountPerPage] = useState(10);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
document.title="Email list | CRM 42andmore";
const [isBottomOpen, setIsBottomOpen] = useState(false)
const [isFilterOpen, setIsFilterOpen] = useState(false)
const [enableOverlay, setEnableOverlay] = useState(true)
const [enablefilterOverlay, setEnablefilterOverlay] = useState(true)

const toggleBottom = () => {
  setIsBottomOpen((prev) => !prev)
}
const toggleFilter = () => {
  setIsFilterOpen((prev) => !prev)
}

const [snochecked, setsnoChecked] = useState(true);
const snohandleChange = () => { setsnoChecked(!snochecked);};
const [templateNamechecked, settemplateNameChecked] = useState(true);
const templateNamehandleChange = () => { settemplateNameChecked(!templateNamechecked);};
const [subjectchecked, setsubjectChecked] = useState(true);
const subjecthandleChange = () => { setsubjectChecked(!subjectchecked);};
const [datechecked, setdateChecked] = useState(true);
const datehandleChange = () => { setdateChecked(!datechecked);};
const [statuschecked, setstatusChecked] = useState(true);
const statushandleChange = () => { setstatusChecked(!statuschecked);};
const [controlchecked, setcontrolChecked] = useState(false);
const controlhandleChange = () => { setcontrolChecked(!controlchecked);};

useEffect(() => {
  emaillist();
  }, []);
  const clearfilter = () =>{
    setStartDate('');setEndDate('');
    const apiUrl= API +'email/emaillist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "show": show,
              "startdate": '',
              "enddate": '',
              "activePage": activePage,
              "status": 1,
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
            if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
            setemail(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const datefilter = () =>{
    const apiUrl= API +'email/emaillist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "show": show,
              "startdate": startDate,
              "enddate": endDate,
              "activePage": activePage,
              "status": 1,
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
            if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
            setemail(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  
  const searchValue = (event) => {
    const value = event.target.value;
    //console.action(value);
    setsearch(value);
    const apiUrl= API +'email/emaillist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": value,
              "show": show,
              "startdate": startDate,
              "enddate": endDate,
              "activePage": activePage,
              "status": 1,
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
            if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
            setemail(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const showChange = (event) =>{
    const value = event.target.value;
    setshow(value);
    const apiUrl= API +'email/emaillist';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
                "userId": localStorage.getItem('UserId'),
                "token": localStorage.getItem('Token'),
                "ipaddress": "ipaddress",
                "search": search,
                "show": value,
                "startdate": startDate,
                "enddate": endDate,
                "activePage": activePage,
                "status": 1,
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
              if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
              setemail(result.data);
              setactivePage(result.activePage);
              setitemsCountPerPage(result.itemsCountPerPage);
              settotalItemsCount(result.totalItemsCount);
            }
          },
          (error)=>{}
          )
    }
    const handlePageChange =(pageNumber) => {
      //alert(pageNumber);
      setactivePage(pageNumber);
      const apiUrl= API +'email/emaillist';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
                "userId": localStorage.getItem('UserId'),
                "token": localStorage.getItem('Token'),
                "ipaddress": "ipaddress",
                "search": search,
                "show": show,
                "startdate": startDate,
                "enddate": endDate,
                "activePage": pageNumber,
                "status": 1,
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
              if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
              setemail(result.data);
              setactivePage(result.activePage);
              setitemsCountPerPage(result.itemsCountPerPage);
              settotalItemsCount(result.totalItemsCount);
            }
          },
          (error)=>{}
          )
      
    }
    const emaillist = () =>{
      //alert(activePage);
    const apiUrl= API +'email/emaillist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "show": show,
              "startdate": startDate,
              "enddate": endDate,
              "activePage": activePage,
              "status": 1,
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
            if(result.data==""){setisEmpty(false)}else{setisEmpty(true)}
            setemail(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
    }
    const deleteemail = (id) =>{
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button onClick={() => deletefile(id)}>Yes, Delete it!</button>
            </div>
          );
        }
      });
    }
    const deletefile = (id) =>{
      const apiUrl= API +'email/deleteemail';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
          "userId": localStorage.getItem('UserId'),
          "token": localStorage.getItem('Token'),
          "ipaddress": "ipaddress",
          "id": id
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
        emaillist();
        toast.success('Email Deleted Successfully...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        document.getElementById('react-confirm-alert').innerHTML = "";
        const div =  document.querySelector('body');
        div.classList.remove('react-confirm-alert-body-element');
      }
    },
    (error)=>{}
    )
    }
    return (
    <>
    <CCard className="mb-2 paddingzero">
            <CCardHeader><CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
              <div className='leadtrendbutton'>Email Listing</div>
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <div className='datedesign'>Feb 1 2022 - Feb 1 2023 <CIcon icon={cilCalendar} /></div>
            </CCol>
          </CRow>
          </CCardHeader>
          </CCard>
       <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
                <CCol md={6} className='margintop10'>
                <span className='filterbox' onClick={toggleFilter}>
                    <CIcon icon={filter} />
                    </span>
            <div className='displayinlineblock'>
            <div className='input-wrap-lead'>
            <input name="search" id="product-search-lead" placeholder="Search ..." onChange={searchValue}/>
            <CIcon icon={cilSearch} size="lg" />
            </div>
            </div>
                </CCol>
                <CCol md={6}>
                    <ul className='customlisvg pullright'>
                    <Link to="/communication/email/create"><li><CIcon icon={plus} customClassName="nav-icon"/><div>Template</div></li></Link>
                        <li onClick={toggleBottom}><CIcon icon={column} customClassName="nav-icon"/><div>Columns</div></li>
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
                    {snochecked ? <CTableHeaderCell>S.no</CTableHeaderCell>:''}
                    {templateNamechecked ? <CTableHeaderCell>Template Name</CTableHeaderCell>:''}
                    {subjectchecked ? <CTableHeaderCell>Subject</CTableHeaderCell>:''}
                    {datechecked ? <CTableHeaderCell>Date</CTableHeaderCell>:''}
                    {statuschecked ? <CTableHeaderCell>Status</CTableHeaderCell>:''} 
                    {controlchecked ? <CTableHeaderCell className="text-center">Control</CTableHeaderCell>:''}
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                {email.map((email , index)=> (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="checkboxlead"><CFormCheck id="flexCheckChecked"  label="" /></CTableDataCell>
                      {snochecked ? <CTableDataCell>{activePage*itemsCountPerPage+index+1-itemsCountPerPage}</CTableDataCell>:''}
                      {templateNamechecked ? <CTableDataCell>{email.templateName}</CTableDataCell>:''}
                      {subjectchecked ? <CTableDataCell>{email.subject}</CTableDataCell>:''}
                      {datechecked ? <CTableDataCell>{email.createDate}</CTableDataCell>:''}
                      {statuschecked ?  <CTableDataCell>
                      {(email.status)==1?<div class="leadstatus activecolorset marginzero">
                      <span class="leadactivecolor"></span>Active</div>:<div class="leadstatus inactivecolorset marginzero">
                      <span class="leadinactivecolor"></span>Inactive</div>}
                      </CTableDataCell>:''} 
                      
                    {controlchecked ?  <CTableDataCell className="text-center">
                    <Link to={'/communication/email/edit/' + email.id}><div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div></Link>
                    <Link to={'/communication/email/view/' + email.id}> <div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div></Link>
                        <div onClick={() => deleteemail(`${email.id}`)} className='svgviewwidth viewbox cursorpointer'><CIcon icon={deleteicon} customClassName="nav-icon" /></div>
                      </CTableDataCell>:''} 
                    </CTableRow>
                     ))}
                     {isEmpty?"":<CTableDataCell colspan="10" style={{padding: "0.5rem 0.5rem"}}>No Data Found</CTableDataCell>}
                </CTableBody>
              </CTable>
              <div className='margintop10'></div>
              <CCol md={12}>
        <CRow>
          <CCol md="6" className="no-padding">
          <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={handlePageChange}
          itemClass='page-item'
          linkClass='page-link'
        /></CCol>
        <CCol md="6">
        <b className="pull-right">Showing {activePage} to {itemsCountPerPage} of {totalItemsCount} entries</b>
        </CCol>
        </CRow>
        </CCol>
            </CCardBody>
</CCard>
<Drawer open={isBottomOpen} onClose={toggleBottom} direction='right' size={300} enableOverlay={enableOverlay}>
  {/* <DrawerBody /> */}
  <div className="filterpadding formcheckboxdesign">
          <p className="drawertitle">Column By<span className="closebutton" onClick={toggleBottom}>X</span></p>
          <CFormCheck id="sno" label="S.no" checked={snochecked} onChange={snohandleChange} />
          <CFormCheck id="templateName" label="Template Name" checked={templateNamechecked} onChange={templateNamehandleChange}/>
          <CFormCheck id="subject" label="Subject" checked={subjectchecked} onChange={subjecthandleChange} />
          <CFormCheck id="date" label="Date" checked={datechecked} onChange={datehandleChange}/>
          <CFormCheck id="status" label="Status" checked={statuschecked} onChange={statushandleChange}/>
          <CFormCheck id="control" label="Control" checked={controlchecked} onChange={controlhandleChange}/>
      </div>
  </Drawer>
  <Drawer open={isFilterOpen} onClose={toggleFilter} direction='right' size={300} enablefilterOverlay={enablefilterOverlay}>
  {/* <DrawerBody /> */}
  <div className="filterpadding formcheckboxdesign noborderdesign">
          <p className="drawertitle">Filter By<span className="closebutton" onClick={toggleFilter}>X</span></p>
          <CRow>
          <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1" className='bolttext'>Show By</CFormLabel>
                <CFormSelect size="lg" name="showby" id="showby" aria-label="Large select example" onChange={showChange}>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="250">250</option>
                <option value="500">500</option>
              </CFormSelect>
            </div>
          </CCol>
          <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1" className='bolttext'>Start Date</CFormLabel>
                <DatePicker dateFormat="dd-MM-yyyy"  name="startdate" id="startdate" className='form-control' selected={startDate}
                    onChange={(date) => setStartDate(date)} />
            </div>
          </CCol>
          <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1" className='bolttext'>End Date</CFormLabel>
                <DatePicker dateFormat="dd-MM-yyyy"  name="enddate" id="enddate" className='form-control' selected={endDate}
                    onChange={(date) => setEndDate(date)} />
            </div>
          </CCol>
          <CCol md={6}>
          <div className="clearfilter">
          <CButton className='buttonsubmit' onClick={clearfilter}>Clear Filter</CButton>
          </div>
          </CCol>
          <CCol md={6}>
          <div className="">
          <CButton className='buttonsubmit' onClick={datefilter}>Submit</CButton>
          </div>
          </CCol>
          </CRow>       
      </div>
  </Drawer>
  <ToastContainer />
    </>
    );
}
export default Communication_email;