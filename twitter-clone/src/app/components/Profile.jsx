import React from 'react'
import './componentsStyles/profile.scss';
import { TabList } from './TabList';
import { Tab } from 'bootstrap';
import { ProfileTop } from './ProfileTop';


const tabs = [
    {
        id: 'tweets',
        label: 'Tweets'
    },
    {
        id: 'tweets-replies',
        label: 'Tweets & Replies'
    },
    {
        id: 'media',
        label: 'Media'
    },
    {
        id: 'likes',
        label: 'Likes'
    },
]

export const Profile = () => {
  return (
    <div className='profile-container'>
            <ProfileTop></ProfileTop>
            <div className='profile-portada'>
                <div className='img-portada'>
                    <img src='../../../source/img/IMG_Prueba1.jpg' alt='Img portada de prueba' ></img>
                </div>
            </div>
            <div className='profile-body'>
                <div className='body-top'>
                    <div className='body-image'>
                        <img src='../../../source/img/IMG-Prueba2.jpg' alt='img de perfil'></img>
                    </div>
                    <div className='edit-info'>
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div className='body-info'>
                    <span className='info-username'> tom </span>
                    <span className='info-id'> @tomy_ste</span>
                    <span className='info-bio'> I like Music </span>
                    <div className='info-extra'>
                        <div className='location-birthdate'>
                            <div className='user-location'>
                                <i className='bi bi-geo-alt'></i>
                                <span className='location-name'> La Carlota, Cordoba</span>
                            </div>
                            <div className='user-birthdate'>
                                <i className='bi bi-arrow-clockwise'></i>
                                <span> Fecha de Nacimiento: 02/01/2001</span>
                            </div>
                        </div>
                        <div className='user-joined'>
                            <i className='bi bi-calendar-event'></i>
                            <span> Se unìo en agosto de 2014</span>
                        </div>
                    </div>
                    <div className='user-follows'>
                        <div className='following'>
                            <span > <b> 299</b> following</span>  
                        </div>
                        <div className='followers'>
                            <span > <b> 325</b> followers</span>  
                        </div>
                    </div>
                </div>
                <TabList tabs={tabs}></TabList>
            </div>
        </div>  
  )
}
