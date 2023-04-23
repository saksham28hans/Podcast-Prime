import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, PlayCircleOutline, Timeline, TrendingUp, WorkOutline, List } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to='/' className='link'>
            <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon' />
                 Home
            </li>
            </Link>
          {/* <Link to='/users' className='link'>
            <li className="sidebarListItem">
                <PermIdentity className='sidebarIcon' />
                 Users
            </li>
          </Link> */}
          <Link to='/movies' className='link'>
            <li className="sidebarListItem">
                <PlayCircleOutline className='sidebarIcon' />
                 Podcast
            </li>
          </Link>
          <Link to='/lists' className='link'>
            <li className="sidebarListItem">
                <List className='sidebarIcon' />
                 Lists
            </li>
          </Link> 
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <MailOutline className='sidebarIcon' />
                 Mail
            </li>
            <li className="sidebarListItem">
                <DynamicFeed className='sidebarIcon' />
                 Feedback
            </li>
            <li className="sidebarListItem">
                <ChatBubbleOutline className='sidebarIcon' />
                 Messages
            </li>
          </ul>
        </div> */}

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <WorkOutline className='sidebarIcon' />
                 Manage
            </li>
            <li className="sidebarListItem">
                <Timeline className='sidebarIcon' />
                 Analytics
            </li>
            <li className="sidebarListItem">
                <Report className='sidebarIcon' />
                 Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
