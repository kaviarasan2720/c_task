import React,{useState,useEffect} from 'react'
import { CCol, CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {sms,email,whatsapp} from '../../Assets/Images/Communication/menu';
import { Link } from "react-router-dom";
import API from "../../Config/api";
function Allwhatsapp() 
{
    const [whatsappall, setwhatsapp] = useState([]); 
    const [isEmpty, setisEmpty] = useState(true);
    useEffect(() => {
        whatsappfulllist();
        }, []);
        const whatsappfulllist = () =>{
            //alert(activePage);
          const apiUrl= API +'whatsapp/whatsappalllist';
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
                  setwhatsapp(result.data);
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
              <div class="communicationtext"><CIcon icon={whatsapp} /><span>Whatsapp </span></div>
            </CCol>
            <CCol sm={7}>
            <Link to="/communication/whatsapp"><div className='pullright communicationviewall'>View All</div></Link>
            </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
        {whatsappall.map((whatsappall , index)=> ( 

<div>
            <div className='communicationbox whatsappbg'>
            <div className='emailsubject'>{whatsappall.templateName}</div>
            <div className='communicationdesc'>{whatsappall.content}</div>
           <div className='senderidcontent textunderlinenone' > <Link to={'/communication/whatsapp/edit/' + whatsappall.id}>View</Link></div>
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
export default Allwhatsapp;