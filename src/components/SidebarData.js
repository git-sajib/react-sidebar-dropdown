import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: 'Check in/out',
    path: '/reports',
    icon: <FaIcons.FaRunning />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Attendance',
        path: '/reports/reports1',
        icon: <BsIcons.BsCheckCircle/>,
        cName: 'sub-nav'
      },
      {
        title: 'Report',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
       
        
      },
    ]
  },


  {
    title: 'Portfolio',
    path: '/products',
    icon: <BsIcons.BsFillPersonLinesFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add portfolio',
        path: '/reports/reports1',
        icon: <BsIcons.BsFillPersonPlusFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'All portfolio',
        path: '/reports/reports2',
        icon: <BsIcons.BsFillLayersFill />,
       
        
      },
    ]
  },


  {
    title: 'Inbox',
    path: '/products',
    icon: <RiIcons.RiMailLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New message',
        path: '/reports/reports1',
        icon: <RiIcons.RiMessage2Fill/>,
        cName: 'sub-nav'
      },
      {
        title: 'All message',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
       
        
      },
    ]
  },

  
  {
    title: 'Bulletins',
    path: '/products',
    icon: <RiIcons.RiFileList2Fill/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New bulletin',
        path: '/reports/reports1',
        icon: <RiIcons.RiNewspaperLine />,
        cName: 'sub-nav'
      },
      {
        title: 'All bulletins',
        path: '/reports/reports2',
        icon: <RiIcons.RiFileListFill />,
       
        
      },
    ]
  },


  {
    title: 'Events',
    path: '/messages',
    icon: <RiIcons.RiCalendarTodoFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New event',
        path: '/messages/message1',
        icon: <RiIcons.RiChatPollLine />
      },
      {
        title: 'All events',
        path: '/messages/message2',
        icon: <RiIcons.RiBillLine/>
      }
    ]
  },


  {
    title: 'Health',
    path: '/messages',
    icon: <RiIcons.RiHealthBookFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Health report',
        path: '/messages/message1',
        icon: <RiIcons.RiFileList2Fill/>
      },
    ]
  },

  {
    title: 'Doccuments',
    path: '/messages',
    icon: <FaIcons.FaRegNewspaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New doccument',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All doccuments',
        path: '/messages/message2',
        icon: <IoIcons.IoMdDocument />
      }
    ]
  },

  {
    title: 'Student settings',
    path: '/messages',
    icon: <FaIcons.FaUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add new student',
        path: '/messages/message1',
        icon: <FaIcons.FaUserPlus />
      },
      {
        title: 'Add new parent',
        path: '/messages/message2',
        icon: <FaIcons.FaUserFriends/>
      },
      {
        title: 'Total students',
        path: '/messages/message1',
        icon: <FaIcons.FaUsers/>
      },
      {
        title: 'Total Parents',
        path: '/messages/message1',
        icon: <RiIcons.RiTeamFill/>
      },
      {
        title: 'Classes',
        path: '/messages/message1',
        icon: <IoIcons.IoIosSchool />
      },
    ]
  },

  {
    title: 'Settings',
    path: '/messages',
    icon: <IoIcons.IoIosSettings/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admin users',
        path: '/messages/message1',
        icon: <FaIcons.FaUserEdit />
      },
      {
        title: 'Teachers',
        path: '/messages/message2',
        icon: <FaIcons.FaChalkboardTeacher/>
      },
      {
        title: 'App support',
        path: '/messages/message1',
        icon: <IoIcons.IoIosBuild/>
      },
      {
        title: 'Subscription',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />,
      },
     
    ]
  },
]
