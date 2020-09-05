import React, { Component } from 'react'
import Orders from './order'
import Draw from './draw'
import Login from './login'
import Header from './header'
import '../../css/style.css'

export default class app extends Component {
    constructor(){
        super()
        this.state = {order: true, logged: false, token: null}
        this.switchPage = () => this.setState({order: !this.state.order})

        this.login = () => this.setState({logged: true})
        this.logout = () => this.setState({logged: false})
        this.setToken = key => this.setState({token:key})
    }
    render() {
        return (
            <div>
                {this.state.logged?
                <>
                <Header token={this.state.token} switch={this.switchPage} data={this.state.order} logout={this.logout} />
                {this.state.order?<Orders /> : <Draw /> }
                </> 
                : <Login login={this.login} />}
            </div>
        )
    }
}
