import React,{ Component, useEffect} from 'react'
import { AppHeader,AppSidebar,AppFooter,AppContent } from './index'
import { Link,useNavigate  } from "react-router-dom";
function DefaultLayout()
{
  //alert(localStorage.getItem('Userid'));
  //if(localStorage.getItem('Userid') == null){alert('yes')}else{alert('no')}
    const navigate = useNavigate();
    
    useEffect(() => {
    //   if(localStorage.getItem('UserId')!=="" && localStorage.getItem('UserName')!=="" && localStorage.getItem('UserId') != null)
    // {
    //   //alert(localStorage.getItem('UserId'));
    // }
    // else
    // {
    //   navigate("/login");
    // }
        }, []);
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    )
}
export default DefaultLayout