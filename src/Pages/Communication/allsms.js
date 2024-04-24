import React,{useState,useEffect} from 'react'
import { CCol, CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {sms,email,whatsapp} from '../../Assets/Images/Communication/menu';
import { Link } from "react-router-dom";
import API from "../../Config/api";
function Allsms() 
{
    const [smsall, setsms] = useState([]); 
    const [isEmpty, setisEmpty] = useState(true);
    useEffect(() => {
        smsfulllist();
        }, []);
        const smsfulllist = () =>{
            //alert(activePage);
          const apiUrl= API +'sms/smsalllist';
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
                  setsms(result.data);
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
              <div class="communicationtext"><CIcon icon={sms} /><span>SMS </span></div>
            </CCol>
            <CCol sm={7}>
            <Link to="/communication/sms"><div className='pullright communicationviewall'>View All</div></Link>
            </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
            {smsall.map((smsall , index)=> ( 

                <div>
                     <div className='communicationbox'>
                <div className='communicationdesc'>{smsall.content}</div>
                    <CRow>
                        <CCol md={6}><div className='senderidcontent alignleft' >{smsall.senderName}</div></CCol>
                        <CCol md={6} className="textunderlinenone"><Link to={'/communication/sms/edit/' + smsall.id}>
                            <div className='senderidcontent'>View</div></Link></CCol>
                    </CRow>
                    
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
export default Allsms;