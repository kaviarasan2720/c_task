import React,{ Component, useState, useRef, useEffect} from 'react'
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
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CFormSelect,
} from '@coreui/react'
import { Link,useNavigate  } from "react-router-dom";
import {useParams} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../../Config/api";
function Communication_sms_senderid_edit() 
{
    useEffect(() => {
        getSenderid();
        }, []);
    const {id} = useParams();
    const navigate = useNavigate();
    const getSenderid = () =>{
        const apiUrl= API +'senderid/senderiddetail';
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
            //alert(result.data.senderId);
            setInputs(values => ({...values, ['senderId']: result.data.senderId}))
            setInputs(values => ({...values, ['senderType']: result.data.senderType}))
            setInputs(values => ({...values, ['dltentityId']: result.data.dltentityId}))
            setInputs(values => ({...values, ['purpose']: result.data.purpose}))
            setInputs(values => ({...values, ['isdefault']: result.data.isdefault}))
            setInputs(values => ({...values, ['status']: result.data.status}))
            //alert(result.data.isdefault);
            
            setInputs(values => ({...values, ['createBy']: result.data.createBy}))
        }
      },
      (error)=>{}
      )
    }

    const [inputs, setInputs] = useState({
        senderId:"",senderType:"",dltentityId:"",purpose:"",status:"",isdefault:""
    });
    
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Edit Sender ID</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                <CFormInput type="text" id="senderId" name="senderId" value={inputs.senderId || ""} readOnly/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Type</CFormLabel>
                <CFormSelect name="senderType" id="senderType" aria-label="Large select example" value={inputs.senderType || ""} readOnly>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">DLT Entity ID</CFormLabel>
                <CFormInput type="text" id="dltentityId" name="dltentityId" value={inputs.dltentityId || ""} readOnly/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Purpose</CFormLabel>
                <CFormTextarea  name="purpose" id="purpose" style={{resize:'none',height:'120px'}} value={inputs.purpose || ""} readOnly></CFormTextarea>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="isdefault">Is Default</CFormLabel>
                <CFormSelect size="lg" name="isdefault" id="isdefault" value={inputs.isdefault} readOnly>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                <CFormSelect size="lg" name="status" id="status" value={inputs.status} readOnly>
                <option value="1">Enable</option>
                <option value="0">Disable</option>
              </CFormSelect>
            </div>
    </CCol>
    </CRow>
    </CCardBody>
    </CCard>
    <ToastContainer />
    </>
    );
}
export default Communication_sms_senderid_edit;