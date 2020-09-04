import React, { Component } from 'react'
import Orders from './order'
import Draw from './draw'
import Login from './login'
import Header from './header'
import '../../css/style.css'

export default class app extends Component {
    constructor(){
        super()
        this.state = {order: true, logged: false}
        this.switchPage = () => this.setState({order: !this.state.order})

        this.login = () => this.setState({logged: true})
        this.logout = () => this.setState({logged: false})
    }
    render() {
        return (
            <div>
                <Header switch={this.switchPage} data={this.state} logout={this.logout} />
                {this.state.logged? this.state.order?<Orders /> : <Draw />  
                : <Login login={this.login} />}
            </div>
        )
    }
}
