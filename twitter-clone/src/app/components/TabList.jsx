import classNames from 'classnames';
import React, { useState } from 'react'
import './componentsStyles/tabList.scss'




export const TabList = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
        <div className='tab-container'>
            <div className='tab-inside'>
            {tabs.map( ( tab ) => (
                <button 
                onClick={ () => setActiveTab(tab.id)}
                className='tab'
                key={tab.id}
                >
                    <span
                    className={classNames(
                        'tab__label', activeTab === tab.id && 'active'
                        )}
                    >
                    { tab.label }
                    </span>
                </button>
            ))}
            </div>
        </div>
        
    </>
  )
}
