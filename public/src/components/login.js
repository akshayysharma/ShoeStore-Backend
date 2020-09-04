import React, { Component } from 'react'
import logo from '../../img/logo.svg'


export default class login extends Component {
    constructor(props){
        super(props)
        this.state = {username: null, password: null ,err:null}
        
        this.update = e => {
            this.setState({[e.target.name]: e.target.value});
        }

        this.login = e =>{
            e.preventDefault()
            fetch(`http://localhost:3020/admin/auth/${this.state.username}/${this.state.password}`)
            .then(data => {
            data.status === 200 ? this.props.login() : this.setState({err:'Invalid login', username:'', password: ''})
        })
        } 
    }
    render() {
        return (
            <div className="login">
            <form className="form" onSubmit={this.login}>
                <img src={logo} className='form-logo' alt=""/>
                <h1 className="form-title">Admin Login</h1>
                <input type="text" autoComplete="off" value={this.state.username} onChange={this.update} name="username" className="input" placeholder="Username"/>
                <input type="password" name="password" value={this.state.password} onChange={this.update} className="input" placeholder="Password"/>
                <input type="submit" className="button" value="LOGIN"/>
                <p className="err-message">{this.state.err}</p>
            </form>
        </div>
        )
    }
}
