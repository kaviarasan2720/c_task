import React,{ Component, useState, useRef} from 'react'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../../Config/api";
function Communication_sms_senderid_create() 
{
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        senderId:"",senderType:"",dltentityId:"",purpose:"",status:"",isdefault:""
    });
    const senderIdRef = useRef();
    const senderTypeRef = useRef();
    const dltentityIdRef = useRef();
    const purposeRef = useRef();
    const statusRef = useRef();
    const isdefaultRef = useRef();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.senderId == "")
        {
            senderIdRef.current.focus();
            senderIdRef.current.style.border = "1px solid red";
            toast.error('Enter senderId...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            senderIdRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.senderType == "")
        {
            senderTypeRef.current.focus();
            senderTypeRef.current.style.border = "1px solid red";
            toast.error('Enter Sender Type...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            senderTypeRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.dltentityId == "")
        {
            dltentityIdRef.current.focus();
            dltentityIdRef.current.style.border = "1px solid red";
            toast.error('Enter DLT Entity ID...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            dltentityIdRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.status == "")
        {
            statusRef.current.focus();
            statusRef.current.style.border = "1px solid red";
            toast.error('Select sender Id status...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            statusRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.senderId!="" && inputs.senderType!="" && inputs.dltentityId!="" && inputs.status!=""){
        const apiUrl= API +'senderid/createsenderid';
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "senderId": inputs.senderId,
              "senderType": inputs.senderType,
              "dltentityId": inputs.dltentityId,
              "isdefault": inputs.isdefault,
              "purpose": inputs.purpose,
              "status": inputs.status,
              "createBy":localStorage.getItem('UserId'),
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
            toast.success('Sender Id Created Successfully...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            setTimeout(() => navigate(-1), 2000);
        }
        else{
            toast.error('Error in adding Sender Id...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        }
      },
      (error)=>{}
      )
        }
        else{

        }
      }
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Create Sender ID</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <form onSubmit={handleSubmit} autoComplete="off">
    <CRow>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                <CFormInput type="text" id="senderId" name="senderId" ref={senderIdRef} value={inputs.senderId || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Type</CFormLabel>
                <CFormSelect name="senderType" id="senderType" aria-label="Large select example" ref={senderTypeRef} value={inputs.senderType || ""} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">DLT Entity ID</CFormLabel>
                <CFormInput type="text" id="dltentityId" name="dltentityId" ref={dltentityIdRef} value={inputs.dltentityId || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Purpose</CFormLabel>
                <CFormTextarea  name="purpose" id="purpose" style={{resize:'none',height:'120px'}} ref={purposeRef} value={inputs.purpose || ""} onChange={handleChange}></CFormTextarea>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Is Default</CFormLabel>
                <CFormSelect size="lg" name="isdefault" id="isdefault" ref={isdefaultRef} value={inputs.isdefault || ""} onChange={handleChange}>
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                <CFormSelect size="lg" name="status" id="status" ref={statusRef} value={inputs.status || ""} onChange={handleChange}>
                <option value="">Select</option>
                <option value="1">Enable</option>
                <option value="0">Disable</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
    <div className="margintop20">
    <CButton className='buttonsubmit pullright' type="submit">Create</CButton>
    </div>
    </CCol>
    </CRow>
    </form>
    </CCardBody>
    </CCard>
    <ToastContainer />
    </>
    );
}
export default Communication_sms_senderid_create;