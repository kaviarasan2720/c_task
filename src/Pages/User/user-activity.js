import React,{ Component,useState,useEffect} from 'react'
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
    CFormCheck,
    CFormLabel,
    CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilCalendar,cilSearch
} from '@coreui/icons'
import {edit,view,filter,plus,column,download,more} from '../../Assets/Images/Lead/menu';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../Config/api";
import Pagination from "react-js-pagination";
const User_user_activity = () => {
  const [isEmpty, setisEmpty] = useState(true);
const [actionActivity, setactionActivity] = useState([]);
const [user, setuser] = useState([]);
const [userfilter, setuserfilter] = useState(''); 
const [activePage, setactivePage] = useState(1); 
const [show, setshow] = useState(10); 
const [pageRangeDisplayed, setpageRangeDisplayed] = useState(5);
const [search, setsearch] = useState('');
const [totalItemsCount, settotalItemsCount] = useState('');
const [itemsCountPerPage, setitemsCountPerPage] = useState(10);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
document.title="User action activity | CRM 42andmore";
useEffect(() => {
  actionlist();
  alluserlist();
  }, []);
  const clearfilter = () =>{
    setStartDate('');setEndDate('');
    const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "userfilter":'',
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
            setactionActivity(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const datefilter = () =>{
    const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "userfilter":userfilter,
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
            setactionActivity(result.data);
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
    const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": value,
              "userfilter":userfilter,
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
            setactionActivity(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
  }
  const userChange = (event) =>{
    const value = event.target.value;
    setuserfilter(value);
    const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "userfilter":value,
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
            setactionActivity(result.data);
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
  const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "search": search,
              "userfilter":userfilter,
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
            setactionActivity(result.data);
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
    const apiUrl= API +'user/useractivitylist';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "userfilter":userfilter,
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
            setactionActivity(result.data);
            setactivePage(result.activePage);
            setitemsCountPerPage(result.itemsCountPerPage);
            settotalItemsCount(result.totalItemsCount);
          }
        },
        (error)=>{}
        )
    
  }
  const actionlist = () =>{
    //alert(activePage);
  const apiUrl= API +'user/useractivitylist';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
            "userId": localStorage.getItem('UserId'),
            "token": localStorage.getItem('Token'),
            "ipaddress": "ipaddress",
            "userfilter":userfilter,
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
          setactionActivity(result.data);
          setactivePage(result.activePage);
          setitemsCountPerPage(result.itemsCountPerPage);
          settotalItemsCount(result.totalItemsCount);
        }
      },
      (error)=>{}
      )
  }
  const alluserlist = () =>{
  const apiUrl= API +'user/useralllist';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
            "userId": localStorage.getItem('UserId'),
            "token": localStorage.getItem('Token'),
            "ipaddress": "ipaddress",
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
          setuser(result.data);
        }
      },
      (error)=>{}
      )
  }

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
const [timechecked, settimeChecked] = useState(true);
const timehandleChange = () => { settimeChecked(!timechecked);};
const [datechecked, setdateChecked] = useState(true);
const datehandleChange = () => { setdateChecked(!datechecked);};
const [ipchecked, setipChecked] = useState(true);
const iphandleChange = () => { setipChecked(!ipchecked);};
const [activitychecked, setactivityChecked] = useState(true);
const activityhandleChange = () => { setactivityChecked(!activitychecked);};
const [mobilechecked, setmobileChecked] = useState(false);
const mobilehandleChange = () => { setmobileChecked(!mobilechecked);};
const [namechecked, setnameChecked] = useState(true);
const namehandleChange = () => { setnameChecked(!namechecked);};
const [emailchecked, setemailChecked] = useState(false);
const emailhandleChange = () => { setemailChecked(!emailchecked);};
const [codechecked, setcodeChecked] = useState(true);
const codehandleChange = () => { setcodeChecked(!codechecked);};
    return (
        <>
        <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
                <CCol md={6} className='margintop10'>
                <span className='filterbox' onClick={toggleFilter}><CIcon icon={filter} /></span>
            <div className='displayinlineblock'>
            <div className='input-wrap-lead'>
            {/* <label for="search" id="input-label">Search</label> */}
            <input name="search" id="product-search-lead" placeholder="Search Username or Access code" onChange={searchValue}/>
            <CIcon icon={cilSearch} size="lg" />
            </div>
            </div>
                </CCol>
                <CCol md={6}>
                    <ul className='customlisvg pullright'>
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
                  {codechecked ? <CTableHeaderCell>Access Code</CTableHeaderCell>:''}
                  {namechecked ? <CTableHeaderCell>Username</CTableHeaderCell>:''}
                  {emailchecked ? <CTableHeaderCell>Email ID</CTableHeaderCell>:''}
                  {mobilechecked ? <CTableHeaderCell>Mobile No</CTableHeaderCell>:''}
                  {activitychecked ? <CTableHeaderCell>Action Task</CTableHeaderCell>:''}
                  {ipchecked ? <CTableHeaderCell>IP Address</CTableHeaderCell>:''}
                  {datechecked ? <CTableHeaderCell>Date</CTableHeaderCell>:''}
                  {timechecked ? <CTableHeaderCell>Time</CTableHeaderCell>:''}
                  </CTableRow>
                </CTableHead>
                <CTableBody className='leadbodycolor'>
                {actionActivity.map((action , index)=> (
                    <CTableRow v-for="item in tableItems">
                    {snochecked ? <CTableDataCell>{activePage*itemsCountPerPage+index+1-itemsCountPerPage}</CTableDataCell>:''}
                    {codechecked ? <CTableDataCell>42andmore{action.userId}</CTableDataCell>:''}
                    {namechecked ? <CTableDataCell>{action.userName}</CTableDataCell>:''}
                    {emailchecked ? <CTableDataCell>{action.userEmailId}</CTableDataCell>:''}
                    {mobilechecked ? <CTableDataCell>{action.userMobilenumber}</CTableDataCell>:''}
                    {activitychecked ? <CTableDataCell>{action.userActiontask}</CTableDataCell>:''}
                    {ipchecked ? <CTableDataCell>{action.ipaddress}</CTableDataCell>:''}
                    {datechecked ? <CTableDataCell>{action.date}</CTableDataCell>:''}
                    {timechecked ? <CTableDataCell>{action.time}</CTableDataCell>:''}

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
          <CFormCheck id="accesscode" label="Access Code" checked={codechecked} onChange={codehandleChange}/>
          <CFormCheck id="username" label="Username" checked={namechecked} onChange={namehandleChange}/>
          <CFormCheck id="useremailid" label="User EmailId" checked={emailchecked} onChange={emailhandleChange}/>
          <CFormCheck id="usermobile" label="User Mobile" checked={mobilechecked} onChange={mobilehandleChange}/>
          <CFormCheck id="activity" label="Activity" checked={activitychecked} onChange={activityhandleChange}/>
          <CFormCheck id="ipaddress" label="IP Address" checked={ipchecked} onChange={iphandleChange}/>
          <CFormCheck id="date" label="Date" checked={datechecked} onChange={datehandleChange}/>
          <CFormCheck id="time" label="Time" checked={timechecked} onChange={timehandleChange}/>
          
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
                <CFormSelect size="lg" className="" aria-label="Large select example" onChange={showChange}>
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
                <CFormLabel htmlFor="exampleFormControlInput1" className='bolttext'>User</CFormLabel>
                <CFormSelect size="lg" className="" onChange={userChange} aria-label="Large select example">
                <option value="">Select user</option>
                {user.map((user , index)=> (
                <option value={user.id}>{user.userName}</option>
                ))}
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
        </>
    );
}
export default User_user_activity;