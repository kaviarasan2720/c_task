import React,{useState,useEffect,useRef} from 'react'
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
    CFormSelect,
    CFormTextarea
} from '@coreui/react'
import { Link,useNavigate  } from "react-router-dom";
import {useParams} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../../Config/api";
function Communication_email_view() 
{
    document.title="Email View | CRM 42andmore";
    useEffect(() => {
        getemailid();
        }, []);
    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        templateName:"",subject:"",content:"",status:""
    });
    const getemailid = () =>{
        const apiUrl= API +'email/emaildetail';
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
            setInputs(values => ({...values, ['subject']: result.data.subject}))
            setInputs(values => ({...values, ['templateName']: result.data.templateName}))
            setInputs(values => ({...values, ['content']: result.data.content}))
            setInputs(values => ({...values, ['status']: result.data.status}))
            setInputs(values => ({...values, ['createBy']: result.data.createBy}))
        }
      },
      (error)=>{}
      )
    }
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>View Template</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Template Name</CFormLabel>
                <CFormInput type="text" name="templateName" id="templateName" value={inputs.templateName || ""} readOnly/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Subject</CFormLabel>
                <CFormInput type="text" name="subject" id="subject"  value={inputs.subject || ""} readOnly/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Content</CFormLabel>
                <CFormTextarea name="content" id="content" value={inputs.content || ""} readOnly style={{resize:"none",height:"120px"}}/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                <CFormSelect name="status" id="status" value={inputs.status} readOnly>
                <option value="">Select</option>
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
export default Communication_email_view;