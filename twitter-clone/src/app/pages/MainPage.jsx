import React from 'react'
import { LeftBar, RigthBar} from '../components/index';
import {FeedCenter} from './FeedCenter'
import './mainPage.scss'
import useScreenSize from '../../hooks/useScreenSize';



export const MainPage = () => {

  const { width } = useScreenSize();
  


  // * Esta logica es para no renderizar elementos en determinado tamaño de pantalla.

  if ( width <= 1290 ){
    return (<>
        <div className='container'>
          <LeftBar></LeftBar>
          <FeedCenter></FeedCenter>
          {
            (width <= 910) 
            ? (undefined)
            : (<RigthBar></RigthBar>)
          }
        </div>
    </>)
  }

  return (
    <>
      <div className='container'>
        <div className='left-column'> left</div>
        <LeftBar></LeftBar>
        <FeedCenter></FeedCenter>
        <RigthBar></RigthBar>
        <div className='right-column'> right</div>
        
      </div>
    </>
  )
}
