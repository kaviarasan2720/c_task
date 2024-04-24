import React,{ Component,useState} from 'react'
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
    CFormTextarea,
    CFormCheck,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {leftarrow,leadmail,leadwhatsapp,leadcall,leadmore,download,signal} from '../../Assets/Images/Lead/menu';
import student from '../../Assets/Images/student.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function Leftmenu() 
{
    return (
        <>
<CCol sm={3} md={3} className='leadpagetab setpaddingdesktop'>
        <CCard className="mb-4 paddingzero">
        <CCardBody className='linkcss '>
        <Link to="/lead/list"><div className='leadbackmessage'><CIcon icon={leftarrow} /> <span>Back to leads</span></div></Link>
        <div className='margintop20'></div>
        <div className='text-center'>
        <div className='userimagewidth'><CAvatar src={student} /></div>
        <div class="leadstatus"><span class="leadactivecolor"></span>Last Activity: 26 Jan 2022, 10:15 AM</div>
        <div className='leadName'>Arun Kumar</div>
        <div className='leadApplication'>202312521</div>
        <div className='margintop20'></div>
        <CRow>
        <CCol sm={3} md={3}>
        <div className='leademail'>
            <center><div className='iconbg'><CIcon icon={leadmail} /></div>
        {/* <div className='tooltext'>Email</div> */}
        </center>
        </div>
        </CCol>
        <CCol sm={3} md={3}>
        <div className='leadwhatsapp'>
            <center><div className='iconbg'><CIcon icon={leadwhatsapp} /></div>
        {/* <div className='tooltext'>WhatsApp</div> */}
        </center>
        </div>
        </CCol>
        <CCol sm={3} md={3}>
        <div className='leadcall'>
            <center><div className='iconbg'><CIcon icon={leadcall} /></div>
        {/* <div className='tooltext'>Call</div> */}
        </center>
        </div>
        </CCol>
        <CCol sm={3} md={3}>
        <div className='leadmore'>
            <center><div className='iconbg'><CIcon icon={leadmore} /></div>
        {/* <div className='tooltext'>More</div> */}
        </center>
        </div>
        </CCol>
        </CRow>
        <div className='margintop10'></div>
        <CRow>
        <CCol sm={6} md={6}>
        <div className=''>
            <center><div className='leadscrorecount'>50</div>
        <div className='leadscroretext'>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9974 12.7084C19.9959 12.6641 19.9944 12.6197 19.9929 12.575C19.9913 12.5304 19.9897 12.4856 19.988 12.4407L19.9868 12.407L19.9861 12.3901L19.986 12.3859L19.9855 12.3482L19.9854 12.3464L19.9849 12.3395L19.9807 12.2836C19.975 12.209 19.9693 12.1341 19.9635 12.0592L19.9592 12.0025L19.9526 11.929C19.9481 11.8801 19.9435 11.8312 19.939 11.7825C19.9343 11.7338 19.9296 11.6852 19.9249 11.6367C19.9225 11.6125 19.9201 11.5884 19.9177 11.5642C19.9148 11.5419 19.9119 11.5197 19.909 11.4974C19.885 11.3207 19.8636 11.1471 19.833 10.9802C19.8186 10.8967 19.8053 10.8145 19.7903 10.7345C19.7739 10.6547 19.7579 10.5766 19.7423 10.5006C19.7128 10.3484 19.6758 10.2063 19.6445 10.075C19.6365 10.0422 19.6287 10.01 19.621 9.97867C19.6125 9.94744 19.6042 9.917 19.5961 9.88727C19.5796 9.82798 19.564 9.77171 19.5493 9.71889C19.5344 9.66614 19.5212 9.61663 19.5074 9.57123C19.4933 9.52598 19.4802 9.48439 19.4685 9.44684C19.451 9.39166 19.4363 9.34519 19.4247 9.30847C19.4075 9.25426 19.3513 9.22378 19.2975 9.23938L15.9162 10.2205C15.8646 10.2354 15.8327 10.2877 15.8425 10.3413C15.8462 10.3614 15.8504 10.3843 15.855 10.4099C15.8599 10.4358 15.8652 10.4644 15.871 10.4956C15.8765 10.5268 15.8808 10.561 15.8864 10.5972C15.8918 10.6334 15.8976 10.6719 15.9037 10.7126C15.9066 10.7329 15.9101 10.7535 15.9129 10.7749C15.9153 10.7964 15.9177 10.8183 15.9203 10.8407C15.9297 10.9304 15.9437 11.0266 15.95 11.1297C15.9542 11.181 15.9585 11.2337 15.9628 11.2875C15.9661 11.3414 15.9678 11.3967 15.9706 11.4527C15.9779 11.5645 15.9765 11.6808 15.9786 11.7981L15.9791 11.8419L15.9776 11.8805C15.9767 11.9063 15.9758 11.9322 15.975 11.9581C15.9743 11.9839 15.9736 12.0097 15.9729 12.0356L15.9721 12.0744L15.9698 12.1302C15.9667 12.2052 15.9635 12.2802 15.9604 12.355L15.958 12.411L15.9577 12.418L15.9577 12.4197C15.9577 12.4282 15.957 12.353 15.9572 12.3855L15.957 12.3882L15.956 12.3993L15.954 12.4214C15.9513 12.4508 15.9487 12.4801 15.9461 12.5093C15.9436 12.5385 15.9411 12.5675 15.9387 12.5964C15.9353 12.6252 15.932 12.6538 15.9286 12.6822C15.9214 12.739 15.917 12.7953 15.9081 12.8501C15.9003 12.905 15.8926 12.9588 15.8852 13.0116C15.8762 13.064 15.8674 13.1153 15.8589 13.1652C15.8512 13.2152 15.8409 13.2633 15.8317 13.3098C15.8221 13.3563 15.8145 13.4014 15.8045 13.4443C15.7948 13.4871 15.7855 13.5281 15.7766 13.5671C15.7723 13.5863 15.768 13.6051 15.7639 13.6233C15.7596 13.639 15.7555 13.6542 15.7515 13.6689C15.7492 13.6779 15.7469 13.6863 15.7446 13.6951H19.8802C19.9356 13.6951 19.9818 13.6508 19.9839 13.5944C19.9839 13.594 19.9839 13.5937 19.9839 13.5934C19.9874 13.515 19.9909 13.4345 19.9945 13.3521C19.9961 13.2699 19.9976 13.1859 19.9992 13.1005C20.0016 13.0151 19.999 12.9283 19.9988 12.8406C19.9983 12.7968 19.9979 12.7527 19.9974 12.7084Z" fill="#212121"/>
<path d="M18.922 8.28887C18.9775 8.26612 19.0028 8.2007 18.9772 8.14568C18.9659 8.12122 18.9526 8.09263 18.9375 8.06028C18.9233 8.02988 18.9076 7.99623 18.8906 7.9596C18.8685 7.91379 18.8446 7.86427 18.8191 7.81135C18.7934 7.75864 18.766 7.70254 18.7371 7.64343C18.7225 7.61269 18.7081 7.58733 18.6931 7.55848C18.6781 7.53027 18.6627 7.50142 18.647 7.47194C18.6155 7.41312 18.5833 7.35163 18.5487 7.28865C18.513 7.22636 18.476 7.16192 18.4381 7.09569C18.4191 7.06266 18.3998 7.02915 18.3802 6.99528C18.3598 6.96193 18.3391 6.92817 18.3182 6.89405C18.2761 6.82607 18.2332 6.7566 18.1895 6.68599C18.0974 6.54774 18.0056 6.40313 17.9032 6.26241C17.8781 6.22698 17.8528 6.19142 17.8275 6.15575L17.7894 6.10229L17.7497 6.04971C17.6967 5.97976 17.6434 5.90958 17.5902 5.83938C17.5359 5.77 17.4799 5.70207 17.4249 5.63388C17.3971 5.60001 17.3702 5.56565 17.3418 5.53256C17.3134 5.49957 17.285 5.46666 17.2568 5.43389C17.2285 5.40124 17.2003 5.36866 17.1723 5.33627C17.1445 5.30376 17.1164 5.2718 17.0874 5.24089C17.0301 5.1787 16.9734 5.11729 16.9177 5.05686C16.8619 4.99663 16.8042 4.94002 16.7492 4.88343C16.6938 4.82714 16.64 4.77186 16.5851 4.72052C16.5307 4.66873 16.4779 4.61836 16.4267 4.56962C16.3758 4.52076 16.3239 4.47639 16.2754 4.43245C16.2266 4.38898 16.1798 4.34733 16.1353 4.30772C16.0897 4.26941 16.0464 4.2331 16.0057 4.19898C15.965 4.16498 15.9269 4.13317 15.8917 4.10376C15.8564 4.07446 15.8226 4.04906 15.7929 4.02537C15.7496 3.99153 15.713 3.96293 15.6839 3.94021C15.6396 3.90557 15.5764 3.91297 15.5408 3.95684L13.726 6.19354C13.6918 6.23572 13.6947 6.29737 13.7329 6.33587C13.748 6.35113 13.7656 6.36879 13.7853 6.38866C13.8041 6.40798 13.8258 6.42843 13.848 6.45231C13.8702 6.47616 13.8941 6.50199 13.9197 6.52956C13.9454 6.557 13.9727 6.58619 14.0014 6.61697C14.0292 6.64874 14.0583 6.6822 14.0887 6.71708C14.1188 6.75227 14.1516 6.78721 14.1829 6.82618C14.2144 6.86476 14.2469 6.90463 14.2805 6.94564C14.3146 6.9859 14.3472 7.0296 14.3809 7.07376C14.4142 7.11822 14.4499 7.16205 14.4834 7.20906C14.517 7.25592 14.551 7.30355 14.5856 7.35178C14.6032 7.3755 14.6198 7.40026 14.6363 7.42539C14.6529 7.45034 14.6696 7.47537 14.6864 7.50054C14.7032 7.52557 14.7201 7.55074 14.737 7.57599C14.7539 7.60124 14.7694 7.62765 14.7857 7.65348C14.8177 7.70561 14.851 7.75697 14.8825 7.80946C14.9131 7.86247 14.9439 7.9155 14.9744 7.9683L14.9974 8.0077L15.0189 8.04793C15.0332 8.07464 15.0475 8.10131 15.0618 8.12782C15.1206 8.23262 15.1703 8.34067 15.2223 8.44219C15.2461 8.49424 15.2694 8.54538 15.2923 8.5955C15.3038 8.62045 15.3151 8.64514 15.3263 8.66952C15.3367 8.69434 15.3469 8.71884 15.357 8.74304C15.3774 8.79118 15.3971 8.83808 15.4162 8.88338C15.4339 8.92931 15.451 8.97368 15.4673 9.01625C15.4755 9.03752 15.4835 9.05833 15.4914 9.07867C15.4988 9.09852 15.508 9.12 15.5129 9.13653C15.5246 9.17123 15.5356 9.20418 15.546 9.23513C15.5566 9.26587 15.5666 9.29461 15.5758 9.32121C15.5878 9.35789 15.5989 9.3915 15.6089 9.4219C15.6201 9.45585 15.6299 9.48586 15.6383 9.51158C15.6572 9.56931 15.72 9.59874 15.7754 9.57606L18.922 8.28887Z" fill="#212121"/>
<path d="M9.67998 4.29372C9.70748 4.29754 9.73788 4.30176 9.77101 4.30637C9.80394 4.3122 9.83956 4.31852 9.8776 4.32528C9.91558 4.33192 9.956 4.33897 9.99859 4.34643C10.0356 4.35269 10.0739 4.36178 10.1138 4.37027L11.2591 1.9849C11.2024 1.97588 11.146 1.96692 11.0909 1.95815C11.0531 1.95243 11.0158 1.94584 10.9788 1.94113C10.9417 1.93656 10.9051 1.93204 10.8689 1.92758C10.7967 1.91886 10.7265 1.91035 10.6586 1.90214C10.5905 1.8962 10.5247 1.89046 10.4616 1.88495C10.3984 1.88002 10.3382 1.87352 10.2805 1.87073C10.223 1.86786 10.1684 1.86512 10.1171 1.86255C10.0658 1.86008 10.0179 1.85779 9.97354 1.85564C9.92918 1.85492 9.88842 1.85425 9.8516 1.85365C9.79981 1.85301 9.75586 1.85247 9.72061 1.85204C9.66472 1.85136 9.61847 1.89584 9.61579 1.95268L9.51135 4.17289C9.50878 4.2276 9.54754 4.27522 9.60082 4.28266C9.62352 4.28584 9.64998 4.28954 9.67998 4.29372Z" fill="#212121"/>
<path d="M12.7582 5.51624C12.789 5.53903 12.8182 5.56064 12.8456 5.58098C12.873 5.601 12.8987 5.61973 12.9225 5.63708C12.9328 5.64428 12.9498 5.6574 12.9637 5.6679C12.978 5.67877 12.9916 5.68912 13.0045 5.69894C13.0327 5.72035 13.0576 5.73926 13.0789 5.75544C13.1268 5.79184 13.1948 5.77954 13.2276 5.72865L14.723 3.40943C14.7558 3.35854 14.7399 3.2901 14.688 3.25981C14.6649 3.24635 14.638 3.23061 14.6075 3.2128C14.5935 3.20461 14.5788 3.19602 14.5633 3.18697C14.5464 3.17726 14.5288 3.1671 14.5104 3.15651C14.4679 3.13263 14.4218 3.10685 14.3727 3.07926C14.3235 3.05197 14.2712 3.02295 14.216 2.99232C14.1634 2.9655 14.1082 2.93731 14.0505 2.90788C13.9926 2.87912 13.9336 2.84711 13.8702 2.81807C13.8072 2.78866 13.742 2.75824 13.675 2.72697C13.6084 2.69499 13.5382 2.66594 13.4669 2.63546C13.3953 2.60562 13.3233 2.573 13.2481 2.54421C13.2291 2.53686 13.2097 2.52942 13.1905 2.522L12.5454 5.37286C12.5811 5.39567 12.6147 5.41985 12.6478 5.44167C12.6863 5.46767 12.7231 5.49256 12.7582 5.51624Z" fill="#212121"/>
<path d="M7.67247 4.2821C7.70135 4.27822 7.72971 4.27342 7.75803 4.27038C7.78634 4.26746 7.81432 4.26457 7.8419 4.2617C7.89695 4.25589 7.95049 4.25023 8.0023 4.24474C8.05426 4.2412 8.10447 4.23777 8.15266 4.23447C8.1767 4.2328 8.20024 4.23117 8.22325 4.22956C8.2462 4.228 8.26919 4.22601 8.28889 4.22599C8.3295 4.22489 8.36805 4.22388 8.40424 4.22292C8.44032 4.22176 8.47405 4.22067 8.50529 4.21966C8.5438 4.2194 8.57916 4.21917 8.61108 4.21895C8.64624 4.21876 8.67731 4.21859 8.70388 4.21844C8.76367 4.21812 8.81066 4.16657 8.80674 4.10582L8.67213 2.01437C8.6682 1.95362 8.61502 1.90876 8.55571 1.91639C8.52933 1.91978 8.49853 1.92374 8.46365 1.92822C8.43131 1.9324 8.3955 1.93705 8.35651 1.94211C8.31045 1.94908 8.26064 1.95658 8.2074 1.96462C8.15432 1.97285 8.09782 1.98162 8.03826 1.99086C8.00778 1.99523 7.97971 2.00104 7.95026 2.0067C7.92089 2.0124 7.89085 2.01825 7.86018 2.02421C7.79893 2.03626 7.73517 2.04882 7.6691 2.06181C7.60357 2.077 7.53578 2.09274 7.46611 2.10888C7.43136 2.117 7.39611 2.12526 7.36045 2.13362C7.32483 2.1421 7.2891 2.15248 7.25287 2.16202C7.18056 2.18163 7.10672 2.20167 7.03161 2.22204C6.95725 2.24486 6.88165 2.26806 6.80515 2.29155C6.767 2.30358 6.72845 2.31492 6.69014 2.32776C6.65199 2.34102 6.61357 2.35434 6.57504 2.36773C6.53658 2.38115 6.49797 2.39461 6.45925 2.40814C6.42052 2.42156 6.38172 2.43504 6.34344 2.45041C6.26671 2.48022 6.18967 2.51017 6.11264 2.54012C6.03595 2.57068 5.96052 2.60455 5.88492 2.6366C5.84723 2.65295 5.80944 2.66873 5.7722 2.68551C5.73521 2.7029 5.69835 2.72022 5.66161 2.73749C5.62496 2.75477 5.58843 2.772 5.55212 2.78913C5.5158 2.80624 5.47963 2.82308 5.44448 2.84167C5.37391 2.87794 5.3042 2.91378 5.23566 2.94902C5.16709 2.98402 5.10174 3.02265 5.03683 3.05821C4.97222 3.09443 4.90869 3.12899 4.84875 3.16622C4.78848 3.20262 4.72985 3.23805 4.67313 3.2723C4.61625 3.30609 4.56349 3.34257 4.51178 3.37554C4.46044 3.40904 4.41124 3.44117 4.36444 3.47172C4.31865 3.50372 4.27519 3.53407 4.23437 3.5626C4.19366 3.59116 4.15555 3.61786 4.12031 3.64258C4.08511 3.66729 4.05397 3.69179 4.02528 3.71297C3.98639 3.74221 3.95319 3.76716 3.92633 3.78735C3.88147 3.82107 3.87094 3.88476 3.90231 3.93172L4.75526 5.20854C4.78561 5.25398 4.84496 5.26824 4.89197 5.24121C4.91363 5.22877 4.93923 5.21405 4.96843 5.19729C4.99389 5.18295 5.02142 5.16601 5.05252 5.14953C5.08359 5.13302 5.11719 5.11523 5.15309 5.0962C5.18888 5.07714 5.22698 5.05686 5.26713 5.03549C5.30797 5.01556 5.3509 4.99459 5.3957 4.97273C5.44071 4.95138 5.48637 4.92692 5.53561 4.90559C5.58448 4.88375 5.635 4.86118 5.68696 4.83796C5.73839 4.81385 5.79287 4.79278 5.84799 4.77027C5.9034 4.74841 5.9589 4.72367 6.01702 4.70277C6.0749 4.68153 6.13376 4.65994 6.19332 4.63808C6.22285 4.62665 6.25325 4.61699 6.28372 4.60708C6.31412 4.59712 6.34468 4.58711 6.37536 4.57705C6.40597 4.56698 6.43671 4.55686 6.46753 4.5467C6.49852 4.53712 6.52995 4.52855 6.56117 4.51937C6.62388 4.50171 6.68618 4.48212 6.74934 4.4657C6.81254 4.44977 6.87574 4.43384 6.93868 4.418C6.96993 4.40954 7.00163 4.40291 7.03319 4.39629C7.06468 4.38954 7.09609 4.38281 7.1274 4.3761C7.1586 4.36934 7.18969 4.36264 7.22064 4.35595C7.25165 4.34965 7.28283 4.34478 7.31359 4.33914C7.3751 4.32827 7.43586 4.31751 7.49565 4.30697C7.55565 4.29854 7.61466 4.29023 7.67247 4.2821Z" fill="#212121"/>
<path d="M1.85651 5.93293C1.83415 5.96512 1.81171 5.99747 1.78916 6.02994C1.76668 6.0624 1.74411 6.09498 1.72146 6.12767C1.69891 6.1604 1.67781 6.19435 1.65588 6.22775C1.61263 6.29499 1.56838 6.36172 1.52602 6.42971C1.48466 6.49828 1.44329 6.56686 1.40209 6.63517L1.37135 6.68632L1.34217 6.7383C1.32278 6.77285 1.30346 6.80734 1.28419 6.84166C1.20546 6.97784 1.13706 7.11704 1.06754 7.24925C1.03518 7.31666 1.00335 7.38296 0.972193 7.44787C0.956741 7.48028 0.941436 7.51239 0.926341 7.54407C0.91213 7.57618 0.898109 7.60793 0.884257 7.63927C0.856678 7.70182 0.829857 7.76269 0.803899 7.82155C0.779689 7.88117 0.756278 7.93874 0.733815 7.994C0.711794 8.04943 0.689541 8.10189 0.670573 8.15279C0.651857 8.20375 0.634089 8.2521 0.617373 8.29753C0.600742 8.3429 0.585184 8.38537 0.570805 8.42464C0.557521 8.46429 0.545331 8.50071 0.5343 8.53361C0.519984 8.57687 0.507689 8.614 0.497647 8.64439C0.479858 8.69811 0.50691 8.75639 0.55891 8.77669L1.3528 9.08658C1.40333 9.1063 1.46023 9.08328 1.48358 9.03357C1.49516 9.00896 1.50899 8.97949 1.52489 8.94564C1.53807 8.91776 1.55263 8.88687 1.56853 8.85324C1.58541 8.82008 1.60367 8.78428 1.62318 8.74597C1.64263 8.7078 1.66331 8.66709 1.68512 8.62422C1.7071 8.58148 1.7324 8.53764 1.75752 8.49134C1.78295 8.4453 1.80945 8.39731 1.83689 8.34762C1.86579 8.2989 1.89567 8.24848 1.9264 8.19665C1.94171 8.17078 1.95722 8.14456 1.97293 8.11803C1.98945 8.09198 2.00619 8.06566 2.0231 8.03897C2.05691 7.98581 2.09145 7.93154 2.12659 7.87628C2.20124 7.76867 2.27425 7.65534 2.35676 7.54604C2.37691 7.51841 2.39714 7.4907 2.41743 7.4629L2.44785 7.42116L2.47973 7.38035C2.52217 7.32592 2.56478 7.27133 2.60739 7.21673C2.65078 7.1628 2.69581 7.11026 2.73958 7.05728C2.76177 7.03097 2.78307 7.00414 2.80579 6.97856C2.82853 6.95304 2.85118 6.92757 2.87375 6.90221C2.89627 6.87688 2.91869 6.85165 2.94101 6.82652C2.96312 6.80127 2.98543 6.77647 3.00861 6.7527C3.05421 6.70462 3.09926 6.65712 3.14358 6.61037C3.18781 6.5637 3.23398 6.52041 3.27756 6.47663C3.32147 6.43318 3.36396 6.39031 3.4077 6.35102C3.45074 6.31115 3.49259 6.27238 3.53309 6.23484C3.57326 6.1971 3.61465 6.1634 3.65288 6.12957C3.69137 6.0962 3.72825 6.06422 3.76332 6.0338C3.79777 6.00604 3.83044 5.97972 3.86113 5.95494C3.89166 5.9302 3.92023 5.90703 3.94665 5.8856C3.95878 5.87539 3.9752 5.86318 3.98907 5.85244C4.0033 5.84148 4.01688 5.83107 4.02977 5.82118C4.05783 5.7996 4.08261 5.78056 4.10383 5.76427C4.15156 5.7276 4.15894 5.65767 4.12012 5.61137L3.21623 4.5332C3.17741 4.4869 3.10842 4.48336 3.06537 4.52559C3.04623 4.54437 3.02385 4.56629 2.99855 4.59114C2.98693 4.60252 2.97467 4.61454 2.96183 4.62713C2.94876 4.64005 2.93632 4.65182 2.9201 4.66869C2.88912 4.70052 2.85562 4.73497 2.81981 4.77175C2.78419 4.80856 2.74627 4.84772 2.70629 4.889C2.66914 4.92999 2.63006 4.97307 2.58931 5.01802C2.54905 5.06332 2.50564 5.10895 2.46364 5.15898C2.42147 5.20875 2.3779 5.26022 2.33307 5.3131C2.28771 5.36536 2.24381 5.4215 2.19865 5.47845C2.15383 5.53571 2.10659 5.59283 2.06152 5.65337C2.01657 5.7139 1.97089 5.77544 1.92465 5.83777C1.90116 5.86866 1.8787 5.90056 1.85651 5.93293Z" fill="#212121"/>
<path d="M0.213789 9.71311C0.208505 9.7396 0.202315 9.77064 0.195305 9.80571C0.188884 9.83791 0.181768 9.87358 0.174021 9.91239C0.166421 9.95209 0.158989 9.99897 0.150694 10.0468C0.142526 10.0951 0.133852 10.1465 0.124716 10.2007C0.120294 10.2277 0.115242 10.2556 0.111052 10.2838C0.107326 10.3118 0.103537 10.3404 0.0996419 10.3695C0.0848209 10.4864 0.0653051 10.6122 0.054063 10.7465C0.0475367 10.8135 0.040842 10.8822 0.0339999 10.9525C0.0283578 11.0229 0.0245894 11.0949 0.0197263 11.168C0.00835788 11.314 0.00627367 11.4654 0.00153684 11.6186L0 11.6762L0.000273684 11.734C0.000484209 11.7726 0.000694735 11.8112 0.000905261 11.85C0.00113684 11.8888 0.00136842 11.9276 0.00157894 11.9664L0.00193684 12.0246L0.00412631 12.0829C0.00722104 12.1604 0.0103158 12.238 0.0134105 12.3153L0.0157473 12.373L0.0164631 12.3917L0.0174736 12.4057L0.0194947 12.4335C0.0221894 12.4706 0.0248631 12.5077 0.0275368 12.5445C0.0302105 12.5814 0.0328841 12.6182 0.0355157 12.6547C0.0391578 12.6928 0.0427578 12.7308 0.0463788 12.7685C0.0500209 12.8062 0.053642 12.8436 0.057242 12.8808C0.0590525 12.8994 0.060863 12.9179 0.0626735 12.9363C0.0649262 12.9544 0.0671788 12.9725 0.0694104 12.9905C0.0783788 13.0623 0.0871998 13.133 0.0958314 13.2021C0.106252 13.2709 0.116442 13.3383 0.126337 13.4039C0.1356 13.4694 0.147537 13.5328 0.158505 13.594C0.15941 13.599 0.160315 13.6038 0.1612 13.6087C0.170358 13.6588 0.213178 13.6951 0.26322 13.6951H0.54303C0.602778 13.6951 0.650188 13.6439 0.646672 13.5832C0.645725 13.567 0.644756 13.5506 0.643683 13.534C0.640188 13.475 0.635978 13.4141 0.63463 13.3512C0.632609 13.2884 0.630546 13.2239 0.62842 13.1581C0.62802 13.0922 0.62762 13.0249 0.62722 12.9565C0.627114 12.9394 0.627009 12.9222 0.626904 12.905C0.627262 12.8881 0.627641 12.871 0.62802 12.8539C0.628757 12.8198 0.629493 12.7854 0.630251 12.7508C0.630988 12.7162 0.631746 12.6814 0.632504 12.6465C0.634188 12.6099 0.635851 12.5731 0.637556 12.5362C0.639241 12.4992 0.640946 12.4622 0.64263 12.425L0.643914 12.397L0.644546 12.3831L0.64463 12.3813C0.64463 12.3769 0.644714 12.3854 0.644756 12.3839L0.645009 12.3805L0.645535 12.3738L0.649788 12.3197C0.65543 12.2476 0.661093 12.1753 0.666777 12.1029L0.671114 12.0487L0.677241 11.9947C0.681325 11.9587 0.685388 11.9228 0.689451 11.8869C0.693493 11.8511 0.697535 11.8153 0.701556 11.7797L0.707556 11.7264L0.715325 11.6734C0.73663 11.5326 0.754735 11.394 0.781262 11.2614C0.793704 11.1949 0.80484 11.1296 0.817619 11.0659C0.831535 11.0025 0.845135 10.9405 0.858377 10.8802C0.882882 10.7592 0.914651 10.6468 0.940503 10.5426C0.947135 10.5166 0.953619 10.4911 0.959956 10.4663C0.966651 10.4418 0.973872 10.4186 0.980524 10.3956C0.993935 10.3499 1.00667 10.3065 1.01863 10.2657C1.03086 10.2246 1.0409 10.1879 1.05261 10.151C1.06488 10.1133 1.07612 10.0788 1.08631 10.0477C1.09739 10.0137 1.10718 9.98364 1.11556 9.95792C1.1344 9.9002 1.10149 9.83831 1.04372 9.82264L0.342273 9.63219C0.284484 9.61648 0.225705 9.65346 0.213789 9.71311Z" fill="#212121"/>
<path d="M8.1538 13.4149C8.38201 13.5285 8.62376 13.5824 8.86176 13.5824C9.45919 13.5824 10.0333 13.2435 10.3134 12.6602C10.3673 12.5479 10.4091 12.4239 10.4362 12.3072L12.0694 5.08954L12.6914 2.34082L13.0767 0.638056C13.1216 0.439886 12.9668 0.304886 12.8114 0.304886C12.7205 0.304886 12.6294 0.351165 12.578 0.458106L11.7939 2.09112L10.6372 4.50015L7.41248 11.2161C7.02084 12.0317 7.35275 13.0162 8.1538 13.4149ZM8.92163 11.0906C9.35866 11.0906 9.71296 11.4513 9.71296 11.8963C9.71296 12.3413 9.35866 12.702 8.92163 12.702C8.4846 12.702 8.13031 12.3413 8.13031 11.8963C8.13031 11.4513 8.4846 11.0906 8.92163 11.0906Z" fill="#212121"/>
</svg>

            <span>Lead Score</span></div></center>
        </div>
        </CCol>
        <CCol sm={6} md={6}>
        <div className=''>
            <center><div className='leadstregthcount'>09%</div>
        <div className='leadstregthtext'>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7362 0.273438H13.4531C13.6037 0.273438 13.7266 0.396266 13.7266 0.546875V13.4531C13.7266 13.6037 13.6037 13.7266 13.4531 13.7266H11.7362C11.5856 13.7266 11.4628 13.6037 11.4628 13.4531V0.546875C11.4628 0.396266 11.5856 0.273438 11.7362 0.273438ZM0.546875 8.3778H2.26379C2.4144 8.3778 2.53723 8.50063 2.53723 8.65123V13.4531C2.53723 13.6037 2.4144 13.7266 2.26379 13.7266H0.546875C0.396266 13.7266 0.273438 13.6037 0.273438 13.4531V8.65123C0.273438 8.50063 0.396266 8.3778 0.546875 8.3778V8.3778ZM4.27664 5.67634H5.99356C6.14417 5.67634 6.267 5.79917 6.267 5.94978V13.4531C6.267 13.6037 6.14417 13.7266 5.99356 13.7266C5.42125 13.7266 4.84895 13.7266 4.27664 13.7266C4.12604 13.7266 4.00321 13.6037 4.00321 13.4531C4.00321 10.952 4.00321 8.45089 4.00321 5.94978C4.00323 5.79917 4.12606 5.67634 4.27664 5.67634ZM8.00641 2.97489H9.72333C9.87394 2.97489 9.99677 3.09772 9.99677 3.24833V13.4531C9.99677 13.6037 9.87394 13.7266 9.72333 13.7266C9.15102 13.7266 8.57872 13.7266 8.00641 13.7266C7.8558 13.7266 7.73298 13.6037 7.73298 13.4531C7.73298 10.0515 7.73298 6.64992 7.73298 3.24833C7.733 3.09772 7.85583 2.97489 8.00641 2.97489V2.97489Z" fill="#212121"/>
</svg>
            <span>Lead Strength</span></div></center>
        </div>
        </CCol>
        </CRow>
        <CButton className='applicationdownload'><svg style={{marginTop:"-5px"}} width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.75 16.25V20.5833C22.75 21.158 22.5217 21.7091 22.1154 22.1154C21.7091 22.5217 21.158 22.75 20.5833 22.75H5.41667C4.84203 22.75 4.29093 22.5217 3.8846 22.1154C3.47827 21.7091 3.25 21.158 3.25 20.5833V16.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5835 10.8333L13.0002 16.25L18.4168 10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 16.25V3.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Download Application</CButton>
<div className='margintop10'></div>
<Tabs>
    <TabList>
      <Tab>Lead Info</Tab>
      <Tab>Address Info </Tab>
    </TabList>
    <TabPanel>
        <div>
        <CRow className='text-left'>
        <CCol sm={5} md={5}>Quality <span className='pullright'>:</span></CCol>
        <CCol sm={7} md={7}>Hot</CCol>
        </CRow>
        <CRow className='text-left'>
        <CCol sm={5} md={5}>Status <span className='pullright'>:</span></CCol>
        <CCol sm={7} md={7}>Converted</CCol>
        </CRow>
        <CRow className='text-left'>
        <CCol sm={5} md={5}>Publisher <span className='pullright'>:</span></CCol>
        <CCol sm={7} md={7}>42andmore</CCol>
        </CRow>
        <CRow className='text-left'>
        <CCol sm={5} md={5}>Source <span className='pullright'>:</span></CCol>
        <CCol sm={7} md={7}>Google Ads</CCol>
        </CRow>
            {/* <table style={{width:"80%"}} className="leadtable">
            <thead>
            <tr><td>Quality <span className='pullright'>:</span> </td><td>Hot</td></tr>
            <tr><td>Status <span className='pullright'>:</span> </td><td>Converted</td></tr>
            <tr><td>Publisher <span className='pullright'>:</span> </td><td>42andmore</td></tr>
            <tr><td>Source <span className='pullright'>:</span> </td><td>Google Ads</td></tr>
            </thead>
            </table> */}
        </div>
    </TabPanel>
    <TabPanel>
        <div className='text-left'>
        <div className='addresstitle'>Name</div>
        <div className='addresstext'>Dinesh Kumar</div>
        <div className='addresstitle'>Email ID</div>
        <div className='addresstext'>dinesh@42andmore.com</div>
        <div className='addresstitle'>Mobile Number</div>
        <div className='addresstext'>9632587410</div>
        <div className='addresstitle'>Address</div>
        <div className='addresstext'>No: 29/1, Venkataraman St,
Parthasarathi Puram, T. Nagar,
Chennai, Tamil Nadu <br />600017</div>
        </div>
        </TabPanel>
    </Tabs>
        </div>
        </CCardBody>
        </CCard>
        </CCol>
        </>
    )
}
export default Leftmenu;