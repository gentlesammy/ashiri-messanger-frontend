import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/loginForm'
import styles from '../styles/Home.module.css'
import { toast } from 'react-toastify';
import axios from 'axios'
import { UserContext } from '../context'
import { useRouter } from "next/router";
import { CarryOutOutlined, InboxOutlined, LogoutOutlined, MenuOutlined, NotificationOutlined, ProfileOutlined } from '@ant-design/icons'
import Profile from '../components/profile'
import Inbox from '../components/inbox'
import Notification from '../components/notification'
import { Switch } from 'antd'

export default function Dashboard() {
  const router = useRouter()
  const [state, setState] = useContext(UserContext);
  const [showNav, setShowNav] = useState(false);
  const [curretPage, setCurretPage] = useState("profile")
  // useEffect(() => {
  //   if(state && state.token == ""){router.push("/")};
  // }, [state])

  const switchPage = (pageName) => {
    return setCurretPage(pageName)
  }

  const toggleMobileDashboardNav = ()=>{
    setShowNav((current) =>{
      return !current
    })
  }

  
  
  
  return (
    <div className={styles.container}>
      <Head>
      <title>Asiri Messanger: Dashboard</title>
      <meta name="description" content="Asiri messages allow you to receive anonymous messages from Friends anonymously" />
        {/* //favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
      <div className="menu_icon_mobile pt-3 text-center">
            <Switch checked={showNav} onClick={toggleMobileDashboardNav}/>
        </div>
      <div className='dashboard_area'>
          {/* dashboard navbar section */}
          <div className={`dashboard_navbar ${!showNav  && "hide_dashboard_navbar"}`}>
            <h3 className='text-center py-2'>Dashboard</h3>
            <div className="links">

              <div className={`linkto ${curretPage === "profile" && "active"}`} onClick={()=>switchPage("profile")}>
                <ProfileOutlined title="Profile" className="link-icon"/>
                <span>Profile</span>
              </div>

              <div className={`linkto ${curretPage === "inbox" && "active"}`} onClick={()=>switchPage("inbox")}>
                <InboxOutlined title="Inbox" className="link-icon"/>
                <span>Inbox</span>
              </div>

              <div className={`linkto ${curretPage === "notification" && "active"}`} onClick={()=>switchPage("notification")}>
                <NotificationOutlined title="Notification" className="link-icon"/>
                <span>Notification</span>
              </div>

              <div className='linkto'>
                <LogoutOutlined title="Logout" className="link-icon"/>
                <span>Logout</span>
              </div>
            </div>  




          </div>
          {/* dashboard display section */}
          <div className="dashboard_display_section">
              {
                curretPage === "profile" && 
                <Profile/>
              }
              {
                curretPage === "inbox" && 
                <Inbox/>
              }

              {
                curretPage === "notification" && 
                <Notification/>
              }
          </div>
      </div>
      
    </div>
  )
}
