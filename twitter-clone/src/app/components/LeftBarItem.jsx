import React from 'react'
import useScreenSize from '../../hooks/useScreenSize'


export const LeftBarItem = ({ iconName, actionName}) => {

   const {width} = useScreenSize(); 

  return (
    <>
        <div className='left-bar-item'>
            <button>
                <i className={iconName}></i>
                {
                    ( width >= 1290 
                    ?<p> {actionName}</p> 
                    : undefined
                    )
                }
            </button>

        </div>
    </>
  )
}

// TODO: Especificar el tipo de props y que sean obligatorias
