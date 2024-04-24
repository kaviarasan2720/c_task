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
function Communication_sms_view() 
{
    document.title="SMS View | CRM 42andmore";
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
            <div className='leadtrendbutton'>View SMS Template</div>
          </h4>
      </CCol>
      </CRow>
    </CCardHeader>
    <CCardBody>
    <CRow>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                <CFormSelect name="senderId" id="senderId" value={inputs.senderId} readonly>
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
                <CFormSelect name="smsType" id="smsType" value={inputs.smsType} readonly>
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
                <CFormInput type="text" name="templateName" id="templateName" value={inputs.templateName || ""} readonly/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Template ID</CFormLabel>
                <CFormInput type="text" name="templateId" id="templateId"value={inputs.templateId || ""} readonly/>
            </div>
    </CCol>
    <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Telemarketer ID</CFormLabel>
                <CFormInput type="text" id="telemarketerId" name="telemarketerId" value={inputs.telemarketerId || ""} readonly/>
            </div>
    </CCol>
    <CCol md={12}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Content</CFormLabel>
                <CFormTextarea type="text" name="content" id="content" value={inputs.content || ""}  readonly style={{resize:"none",height:"150px"}}/>
            </div>
    </CCol>
    
    <div className="margintop10"></div>
   <CCol md={12} style={{color:'red'}}>{text}</CCol>
   <div className="margintop10"></div>
   <CCol md={4}>
            <div className="mb-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                <CFormSelect name="status" id="status" value={inputs.status} readonly>
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
export default Communication_sms_view;