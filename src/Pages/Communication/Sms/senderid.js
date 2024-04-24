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
function Communication_sms_senderid() 
{
  const [isEmpty, setisEmpty] = useState(true);
const [sender, setsender] = useState([]);
const [user, setuser] = useState([]);
const [sendertype, setsendertype] = useState(''); 
const [activePage, setactivePage] = useState(1); 
const [show, setshow] = useState(10); 
const [pageRangeDisplayed, setpageRangeDisplayed] = useState(5);
const [search, setsearch] = useState('');
const [totalItemsCount, settotalItemsCount] = useState('');
const [itemsCountPerPage, setitemsCountPerPage] = useState(10);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
document.title="SMS SenderId list | CRM 42andmore";
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
const [entityidchecked, setentityidChecked] = useState(true);
const entityidhandleChange = () => { setentityidChecked(!entityidchecked);};
const senderidhandleChange = () => { setsenderidChecked(!senderidchecked);};
const [senderidchecked, setsenderidChecked] = useState(true);
const [sendertypechecked, setsendertypeChecked] = useState(true);
const sendertypehandleChange = () => { setsendertypeChecked(!sendertypechecked);};
const [purposechecked, setpurposeChecked] = useState(true);
const purposehandleChange = () => { setpurposeChecked(!purposechecked);};
const [datechecked, setdateChecked] = useState(true);
const datehandleChange = () => { setdateChecked(!datechecked);};
const [statuschecked, setstatusChecked] = useState(true);
const statushandleChange = () => { setstatusChecked(!statuschecked);};
const [controlchecked, setcontrolChecked] = useState(true);
const controlhandleChange = () => { setcontrolChecked(!controlchecked);};
const [isdefaultchecked, setisdefaultChecked] = useState(true);
const isdefaulthandleChange = () => { setisdefaultChecked(!isdefaultchecked);};

useEffect(() => {
  smslist();
  }, []);
  const clearfilter = () =>{
    setStartDate('');setEndDate('');setsendertype('');
    const apiUrl= API +'senderid/senderidlist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "sendertype":'',
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
            setsender(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const datefilter = () =>{
    const apiUrl= API +'senderid/senderidlist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "sendertype":sendertype,
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
            setsender(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const sendertypeChange = (event) =>{
    const value = event.target.value;
    setsendertype(value);
    const apiUrl= API +'senderid/senderidlist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "sendertype":value,
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
            setsender(result.data);
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
    const apiUrl= API +'senderid/senderidlist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "sendertype":sendertype,
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
            setsender(result.data);
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
    const apiUrl= API +'senderid/senderidlist';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
                "userId": localStorage.getItem('UserId'),
                "token": localStorage.getItem('Token'),
                "ipaddress": "ipaddress",
                "sendertype":sendertype,
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
              setsender(result.data);
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
      const apiUrl= API +'senderid/senderidlist';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
                "userId": localStorage.getItem('UserId'),
                "token": localStorage.getItem('Token'),
                "ipaddress": "ipaddress",
                "sendertype":sendertype,
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
              setsender(result.data);
              setactivePage(result.activePage);
              setitemsCountPerPage(result.itemsCountPerPage);
              settotalItemsCount(result.totalItemsCount);
            }
          },
          (error)=>{}
          )
      
    }
    const smslist = () =>{
      //alert(activePage);
    const apiUrl= API +'senderid/senderidlist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "sendertype":sendertype,
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
            setsender(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
    }
    const deletesenderid = (id) =>{
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button
                // onClick={() => {
                //   this.handleClickDelete();
                //   onClose();
                // }}
                onClick={() => deletefile(id)}
              >
                Yes, Delete it!
              </button>
            </div>
          );
        }
      });
    }
    const deletefile = (id) =>{
      const apiUrl= API +'senderid/deletesenderid';
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
        smslist();
        toast.success('Sender Id Deleted Successfully...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
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
              <div className='leadtrendbutton'>Sender ID List</div>
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
                    <Link to="/communication/sms/senderid-create"><li><CIcon icon={plus} customClassName="nav-icon"/><div>Sender ID</div></li></Link>
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
                    {snochecked ? <CTableHeaderCell>S.no</CTableHeaderCell>:''} 
                    {senderidchecked ? <CTableHeaderCell>Sender ID</CTableHeaderCell>:''} 
                    {entityidchecked ? <CTableHeaderCell>DLT Entity ID</CTableHeaderCell>:''} 
                     {purposechecked ? <CTableHeaderCell>Purpose</CTableHeaderCell>:''} 
                     {sendertypechecked ? <CTableHeaderCell>Type</CTableHeaderCell>:''} 
                     {datechecked ? <CTableHeaderCell>Date</CTableHeaderCell>:''} 
                     {statuschecked ? <CTableHeaderCell>Status</CTableHeaderCell>:''} 
                     {isdefaultchecked ? <CTableHeaderCell>Is Default</CTableHeaderCell>:''} 
                     {controlchecked ? <CTableHeaderCell className="text-center">Control</CTableHeaderCell>:''} 
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                {sender.map((sender , index)=> (
                    <CTableRow v-for="item in tableItems">
                      {snochecked ? <CTableDataCell>{activePage*itemsCountPerPage+index+1-itemsCountPerPage}</CTableDataCell>:''} 
                      {senderidchecked ? <CTableDataCell>{sender.senderId}</CTableDataCell>:''} 
                      {entityidchecked ? <CTableDataCell>{sender.dltentityId}</CTableDataCell>:''} 
                      {purposechecked ? <CTableDataCell>{sender.purpose}</CTableDataCell>:''} 
                      {sendertypechecked ? <CTableDataCell>{sender.senderType}</CTableDataCell>:''} 
                      {datechecked ? <CTableDataCell>{sender.createDate}</CTableDataCell>:''} 
                      {statuschecked ? <CTableDataCell>
                      {(sender.status)==1?<div class="leadstatus activecolorset marginzero">
                      <span class="leadactivecolor"></span>Active</div>:<div class="leadstatus inactivecolorset marginzero">
                      <span class="leadinactivecolor"></span>Inactive</div>}
                      </CTableDataCell>:''} 
                      {isdefaultchecked ? 
                      
                      
                      <CTableDataCell>
                        {(sender.isdefault)==1?<span className='defaultcolor'>Default</span>:<span className='makedefaultcolor'>Make Default</span>}
                        </CTableDataCell>:''
                      
                      } 
                      {controlchecked ? <CTableDataCell className="text-center">
                      <Link to={'/communication/sms/senderid-edit/' + sender.id}><div className='svgeditwidth editbox'><CIcon icon={edit} customClassName="nav-icon" /></div></Link>
                      <Link to={'/communication/sms/senderid-view/' + sender.id}><div className='svgviewwidth viewbox'><CIcon icon={view} customClassName="nav-icon" /></div></Link>
                      <div onClick={() => deletesenderid(`${sender.id}`)} className='svgviewwidth viewbox cursorpointer'><CIcon icon={deleteicon} customClassName="nav-icon" /></div>
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
          <CFormCheck id="senderid" label="Sender id" checked={senderidchecked} onChange={senderidhandleChange} />
          <CFormCheck id="entityid" label="DLT Entity ID" checked={entityidchecked} onChange={entityidhandleChange}/>
          <CFormCheck id="purpose" label="Purpose" checked={purposechecked} onChange={purposehandleChange}/>
          <CFormCheck id="sendertype" label="Type" checked={sendertypechecked} onChange={sendertypehandleChange}/>
          <CFormCheck id="date" label="Date" checked={datechecked} onChange={datehandleChange}/>
          <CFormCheck id="status" label="Status" checked={statuschecked} onChange={statushandleChange}/>
          <CFormCheck id="isdefault" label="Is Default" checked={isdefaultchecked} onChange={isdefaulthandleChange}/>
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
                <CFormLabel htmlFor="exampleFormControlInput1" className='bolttext'>Senderid Type</CFormLabel>
                <CFormSelect size="lg" name="sendertype" id="sendertype" onChange={sendertypeChange} aria-label="Large select example"
                 value={sendertype}>
                <option value="">Select type</option>
                <option value='option1'>option1</option>
                <option value='option2'>option2</option>
                <option value='option3'>option3</option>
                <option value='option4'>option4</option>
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
export default Communication_sms_senderid;