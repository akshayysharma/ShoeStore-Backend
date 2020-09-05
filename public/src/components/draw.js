import React, { Component } from 'react'

export default class draw extends Component {
    constructor(){
        super()
        this.state = {data: null}
    }
    componentDidMount(){
        fetch('http://localhost:3020/admin/draw')
        .then(data => data.json())
        .then(items => {
            this.setState({data: items})
        })
    }
    render() {
        return (
            <div>
                <h1 className="sub-title">Edit Draw</h1>
            </div>
        )
    }
}
