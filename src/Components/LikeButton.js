import React, { Component } from 'react'

export default class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            colorIndex: 0
        }
    }

    buttonHandler = () => {
        this.setState((state, props) =>  ({
            counter: state.counter + 1,
            colorIndex: (state.colorIndex + 1) % 6
        }))
    }


    render() {
        return (
            <div>
                <button style = {{
                    backgroundColor: ['purple','blue','green','yellow','orange','red'][this.state.colorIndex],
                    color: 'white',
                    margin: '5px'
                }} onClick={this.buttonHandler}>{this.state.counter} Likes</button>
            </div>
        )
    }
}
