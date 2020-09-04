import React from 'react'
import logo from '../../img/logo.svg'

export default function header(props) {
    return (
        <>
        {props.data.logged?
        <>
        <div className='head'>
            <div className='head-intro'>
                <img src={logo}  className='logo' alt=""/>
                 Shoe Store
            </div>
            <div className="head-links-all">
             {props.data.order? <div className="head-links" onClick={props.switch}>
                Drawer
            </div> :
            <div className="head-links" onClick={props.switch}>
                Orders
            </div>}
            <div className="head-links logout" onClick={props.logout}>
            Log Out
            </div>
            </div>
            </div>
            

            
            </>
            : null}  
        
        </>
    )
}
