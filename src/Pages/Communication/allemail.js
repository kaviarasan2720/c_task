import React,{useState,useEffect} from 'react'
import { CCol, CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {sms,email,whatsapp} from '../../Assets/Images/Communication/menu';
import { Link } from "react-router-dom";
import API from "../../Config/api";
function Allemail() 
{
    const [emailall, setemail] = useState([]); 
    const [isEmpty, setisEmpty] = useState(true);
    useEffect(() => {
        emailfulllist();
        }, []);
        const emailfulllist = () =>{
            //alert(activePage);
          const apiUrl= API +'email/emailalllist';
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
                  setemail(result.data);
                }
              },
              (error)=>{}
              )
          }
    return (
    <>
      <CCard className="mb-2 paddingzero">
        <CCardHeader>
        <CRow>
            <CCol sm={5}>
              <div class="communicationtext"><CIcon icon={email} /><span>Email</span></div>
            </CCol>
            <CCol sm={7}>
            <Link to="/communication/email"><div className='pullright communicationviewall'>View All</div></Link>
            </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
        {emailall.map((emailall , index)=> ( 

<div>
            <div className='communicationbox'>
                <div className='emailsubject'>{emailall.subject}</div>
                
               <div className='communicationdesc'>{emailall.content}</div> 
               <div className='senderidcontent textunderlinenone' > <Link to={'/communication/email/edit/' + emailall.id}>View</Link></div>
            </div>
            <div className='margintop20'></div>
            </div>
            ))}
             {isEmpty?"":<div>No Data Found</div>}
        </CCardBody>
    </CCard>
    </>
    );
}
export default Allemail;