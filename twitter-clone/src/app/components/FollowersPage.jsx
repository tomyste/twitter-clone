import React, { useState } from 'react'
import { TabList } from './TabList';
import './componentsStyles/followersPage.scss'
import { ProfileTop } from './ProfileTop';

const tabs = [
    {   
        id: 'following',
        label: 'Following',
    },
    {
        id: 'followers',
        label: 'Followers',
    },
]



export const FollowersPage = () => {

  return (
        <>
            <ProfileTop></ProfileTop>
            <div className='followers-container'>
                <div className='followers-inside'>
                    <TabList tabs={tabs}></TabList>
                </div>
            </div>
        </>
    )
}
