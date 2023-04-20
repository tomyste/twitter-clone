import React, { useState } from 'react'
import { TabList } from './TabList';
import './componentsStyles/followersPage.scss'
import { ProfileTop } from './ProfileTop';
import { UserItem } from './UserItem';


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
            <TabList tabs={tabs}></TabList>
            <div className='followers-container'>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>


            </div>

        </>
    )
}
