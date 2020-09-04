import React, { Component } from 'react'

export default class order extends Component {
    constructor(){
    super()
    this.state = {data: []}
    }
    componentDidMount(){
    fetch('http://localhost:3020/admin/')
        .then(data => data.json())
        .then(items => {
            this.setState({data: Object.values(items)})
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <h1 className="sub-title">Orders Summary</h1>
                <div className="order-table">
                <div className="order-row">
                        <p className="order-item item-min">ORDER</p>
                        <p className="order-item item-min">TOTAL</p>
                        <p className="order-item">NAME</p>
                        <p className="order-item">EMAIL</p>
                        <p className="order-item">ADDRESS</p>
                        <p className="order-item">PHONE</p>
                        <p className="order-item item-min">STATUS</p>
                        </div>
                    {this.state.data.map(item => {
                        return(
                        <div className="order-row">
                        <p className="order-item item-min">{item.order}</p>
                        <p className="order-item item-min">$ {item.total}</p>
                        <p className="order-item">{item.name}</p>
                        <p className="order-item">{item.email}</p>
                        <p className="order-item">{item.address}</p>
                        <p className="order-item">{item.phone}</p>
                        {item.done?<p className="order-item item-min order-status-true">DELIEVERED</p>:
                        <p className="order-item item-min order-status-false">PENDING</p>}
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


