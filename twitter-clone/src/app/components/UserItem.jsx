import React from 'react'
import './componentsStyles/followersPage.scss'


export const UserItem = () => {
    return (
        <div className='item-container'>
            <div className='item-head'>
                <span className='item-username'> Nombre </span>
                <button className='item-button'>asd</button>
            </div>
            <div className='item-info'>
                <span className='item-idName'> @nickname</span>
                <span className='item-description'> Quis amet reprehenderit et ex ad reprehenderit deserunt cupidatat minim deserunt non cupidatat.</span>
            </div>
        </div>
    )
}



