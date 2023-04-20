import React from 'react';
import './componentsStyles/leftBar.scss'
import { LeftBarItem } from './LeftBarItem';


export const LeftBar = () => {



  return (
    <div className='left-bar'>
      <div className='left-bar-container'>
        <div className='left-bar-inside'>
          <div className='left-bar-head'>
            <h2> LOGO </h2>
          </div>
          <div className='left-bar-body'></div>
            <LeftBarItem iconName={"bi bi-house"} actionName={"Home"}></LeftBarItem>
            <LeftBarItem iconName={"bi bi-bell"} actionName={"Notifications"}></LeftBarItem>
            <LeftBarItem iconName={"bi bi-envelope"} actionName={"Messages"}></LeftBarItem>
            <LeftBarItem iconName={"bi bi-person"} actionName={"Profile"}></LeftBarItem>
            <LeftBarItem iconName={"bi bi-door-closed"} actionName={"logout"}></LeftBarItem>



          <div className='left-bar-footer'>
            <LeftBarItem iconName={"bi bi-plus"} actionName={"Post"}></LeftBarItem>
          </div>
        </div>
      </div>
    </div>
  )
}
