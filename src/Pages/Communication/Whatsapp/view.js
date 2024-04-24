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
function Communication_whatsapp_view() 
{
    document.title="Whatsapp View | CRM 42andmore";
    useEffect(() => {
        getwhatsappid();
        }, []);
    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        templateName:"",content:"",status:""
    });
    const getwhatsappid = () =>{
        const apiUrl= API +'whatsapp/whatsappdetail';
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
    const templateNameRef = useRef();
    const statusRef = useRef();
    const contentRef = useRef();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.templateName == "")
        {
            templateNameRef.current.focus();
            templateNameRef.current.style.border = "1px solid red";
            toast.error('Enter Template Name...', {position: "top-right",autoClose: 2500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            return false;
        }
        else{
            templateNameRef.current.style.border = "1px solid #b1b7c1";
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
        if(inputs.subject!="" && inputs.templateName!="" && inputs.content!="" && inputs.status!=""){
        const apiUrl= API +'whatsapp/updatewhatsapp';
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
              "userId": localStorage.getItem('UserId'),
              "token": localStorage.getItem('Token'),
              "ipaddress": "ipaddress",
              "templateName": inputs.templateName,
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
            toast.success('Whatsapp Updated Successfully...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            setTimeout(() => navigate(-1), 2000);
        }
        else{
            toast.error('Error in updating Whatsapp...', {position: "top-right",autoClose: 1500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
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
            <div className='leadtrendbutton'>Edit Template</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <form onSubmit={handleSubmit} autoComplete="off">
    <CRow>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Template Name</CFormLabel>
                <CFormInput type="text" name="templateName" id="templateName" ref={templateNameRef} value={inputs.templateName || ""} onChange={handleChange}/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Content</CFormLabel>
                <CFormTextarea name="content" id="content" ref={contentRef} value={inputs.content || ""} onChange={handleChange} style={{resize:"none",height:"120px"}}/>
            </div>
    </CCol>
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
export default Communication_whatsapp_view;