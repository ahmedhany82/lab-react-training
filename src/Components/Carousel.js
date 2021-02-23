import React, { Component } from 'react'

export default class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0
        }
    }

    leftbuttonHandler = () => {
        this.setState((state, props) =>  ({
            imgIndex: (state.imgIndex - 1 < 0)? 3: state.imgIndex - 1
        }))
    }

    rightbuttonHandler = () => {
        this.setState((state, props) =>  ({
            imgIndex: (state.imgIndex + 1) % 4
        }))
    }

    render() {
        return (
            <div style={{display:'flex'}}>
                <button style = {{
                    margin: '5px'
                }} onClick={this.leftbuttonHandler}>Left</button>
                <img src={this.props.imgs[this.state.imgIndex]} alt=""/>
                <button style = {{
                    margin: '5px'
                }} onClick={this.rightbuttonHandler}>Right</button>
            </div>
        )
    }
}
