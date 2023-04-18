import React from 'react'
import './componentsStyles/postBox.scss'
export const PostBox = () => {
  
    return (
    <div className='post-container'>
        <div className='post-inside'>
            <div className='post-head'>
                    <div className='title-date'>
                        <h2 className='post-title'> Tom </h2>
                        <p className='post-date'> 02/01 </p>
                    </div>
                    <i className="bi bi-three-dots three-dots"></i>
                </div>
                <div className='post-body'>
                    <p> Tweet de prueba</p>
                </div>
                <div className='post-footer'>
                    <button>
                        <i className="bi bi-chat-text icon-post"></i>
                    </button>
                    <button>
                        <i className="bi bi-star icon-post"></i>
                    </button>
                    <button>
                        <i className="bi bi-send icon-post"></i>

                    </button>
                </div>
        </div>    
        
    </div>
  )
}
