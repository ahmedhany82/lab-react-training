import React, { Component } from 'react'


const elementStyle = {
    color: 'black',
    width: '100px',
    height: '100px',
    border: "thin solid black",
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const tableStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

export default class NumbersTable extends Component {


    render() {
        let arr = []
        for(let i=1; i <= this.props.limit; i++) {
            arr.push(i)
        }
        const output = arr.map((number, index) => {
            return ( 
                <div style={(number % 2 === 0)? { ...elementStyle, backgroundColor: 'red' }: { ...elementStyle, backgroundColor: 'white' }} key={index}>
                    {number}
                </div>                    
            )
        })
        return (
            <div style={tableStyle}>
                {output}
            </div>
        )
    }
}