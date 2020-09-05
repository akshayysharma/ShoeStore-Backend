import React, { Component } from 'react'
import logo from '../../img/logo.svg'

export default class header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <>
        <div className='head'>
            <div className='head-intro'>
                <img src={logo}  className='logo' alt=""/>
                 Shoe Store
            </div>

            <div className="head-links-all">
                {this.props.data? <div className="head-links" onClick={this.props.switch}>Drawer</div> :
                <div className="head-links" onClick={this.props.switch}>Orders</div>}
                <div className="head-links logout" onClick={this.props.logout}>Log Out</div>
            </div>

        </div>
        </>
        )
    }
}
