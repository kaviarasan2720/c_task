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
function Communication_sms_edit() 
{
    document.title="SMS Edit | CRM 42andmore";
    useEffect(() => {
        allsenderlist();
        getsmsid();
        }, []);
    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        senderId:"",templateName:"",smsType:"",templateId:"",telemarketerId:"",content:"",status:""
    });
    const getsmsid = () =>{
        const apiUrl= API +'sms/smsdetail';
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
            setInputs(values => ({...values, ['senderId']: result.data.senderId}))
            setInputs(values => ({...values, ['smsType']: result.data.smsType}))
            setInputs(values => ({...values, ['templateName']: result.data.templateName}))
            setInputs(values => ({...values, ['templateId']: result.data.templateId}))
            setInputs(values => ({...values, ['telemarketerId']: result.data.telemarketerId}))
            setInputs(values => ({...values, ['content']: result.data.content}))
            setInputs(values => ({...values, ['status']: result.data.status}))
            setInputs(values => ({...values, ['createBy']: result.data.createBy}))
        }
      },
      (error)=>{}
      )
    }
    const senderIdRef = useRef();
    const templateNameRef = useRef();
    const smsTypeRef = useRef();
    const templateIdRef = useRef();
    const statusRef = useRef();
    const telemarketerIdRef = useRef();
    const contentRef = useRef();
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
            toast.error('Select senderId...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            senderIdRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.smsType == "")
        {
            smsTypeRef.current.focus();
            smsTypeRef.current.style.border = "1px solid red";
            toast.error('Enter Sms Type...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            smsTypeRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.templateName == "")
        {
            templateNameRef.current.focus();
            templateNameRef.current.style.border = "1px solid red";
            toast.error('Enter Template name...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            templateNameRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.templateId == "")
        {
            templateIdRef.current.focus();
            templateIdRef.current.style.border = "1px solid red";
            toast.error('Enter Template Id...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            templateIdRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.telemarketerId == "")
        {
            telemarketerIdRef.current.focus();
            telemarketerIdRef.current.style.border = "1px solid red";
            toast.error('Enter Telemarketer Id...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            telemarketerIdRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.content == "")
        {
            contentRef.current.focus();
            contentRef.current.style.border = "1px solid red";
            toast.error('Enter Content...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            contentRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.status == "")
        {
            statusRef.current.focus();
            statusRef.current.style.border = "1px solid red";
            toast.error('Select template status...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            statusRef.current.style.border = "1px solid #b1b7c1";
        }
        if(inputs.senderId!="" && inputs.smsType!="" && inputs.templateName!="" && inputs.templateId!="" && inputs.telemarketerId!="" && inputs.content!="" && inputs.status!=""){
        const apiUrl= API +'sms/updatesms';
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "senderId": inputs.senderId,
              "smsType": inputs.smsType,
              "templateName": inputs.templateName,
              "templateId": inputs.templateId,
              "telemarketerId": inputs.telemarketerId,
              "content": inputs.content,
              "status": inputs.status,
              "updateBy":localStorage.getItem('UserId'),
              "id":id
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
            toast.success('SMS Updated Successfully...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            setTimeout(() => navigate(-1), 2000);
        }
        else{
            toast.error('Error in updateing SMS...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        }
      },
      (error)=>{}
      )
        }
        else{

        }
      }
    const [senderidlist, setsenderidlist] = useState([]);
    const allsenderlist = () =>{
        const apiUrl= API +'senderid/senderalllist';
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
                setsenderidlist(result.data);
              }
            },
            (error)=>{}
            )
        }
    let text = `Template format as per DLT approval : Congratulations! You have received shopping voucher worth Rs. {#var#}. Valid till {#var#}.- <Brand Name>`;
    return (
    <>
     <CCard className="mb-4 paddingzero">
     <CCardHeader>
     <CRow>
      <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            <div className='leadtrendbutton'>Create Template ID</div>
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
                <CFormSelect name="senderId" id="senderId" ref={senderIdRef} value={inputs.senderId} onChange={handleChange}>
                <option value="">Select</option>
                {senderidlist.map((sender , index)=> (
                <option value={sender.id}>{sender.senderId}</option>
                ))}
                </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Type</CFormLabel>
                <CFormSelect name="smsType" id="smsType" ref={smsTypeRef} value={inputs.smsType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Template Name </CFormLabel>
                <CFormInput type="text" name="templateName" id="templateName" ref={templateNameRef} value={inputs.templateName || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Template ID</CFormLabel>
                <CFormInput type="text" name="templateId" id="templateId" ref={templateIdRef} value={inputs.templateId || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Telemarketer ID</CFormLabel>
                <CFormInput type="text" id="telemarketerId" name="telemarketerId" ref={telemarketerIdRef} value={inputs.telemarketerId || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Content</CFormLabel>
                <CFormTextarea type="text" name="content" id="content" ref={contentRef} value={inputs.content || ""} onChange={handleChange} style={{resize:"none",height:"150px"}}/>
            </div>
    </CCol>
    
    <div className="margintop10"></div>
   <CCol md={12} style={{color:'red'}}>{text}</CCol>
   <div className="margintop10"></div>
   <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                <CFormSelect name="status" id="status" ref={statusRef} value={inputs.status} onChange={handleChange}>
                <option value="">Select</option>
                <option value="1">Enable</option>
                <option value="0">Disable</option>
              </CFormSelect>
            </div>
    </CCol>
    <CCol md={8}>
    <div className="margintop20">
    <CButton className='buttonsubmit pullright' type="submit">Update</CButton>
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
export default Communication_sms_edit;