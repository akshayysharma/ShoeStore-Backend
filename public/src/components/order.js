import React from 'react'
import {useState, useEffect} from 'react'

function orders(){
    const [list, setList] = useState(null)
    useEffect(
        fetch('http://localhost:3020/admin/')
        .then(data => data.json())
        .then(items => {
            console.log(items)
            setTimeout(setList(items),1000)
        })
    )
    return(
        <>
        <div className='order-table'>
            <h1>
                Test
            </h1>
        </div>
        </>
    )
}

export default orders