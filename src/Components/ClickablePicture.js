import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    imageHandler = () => {
        this.setState((state, props) =>  ({
            clicked: !state.clicked
        }))
    }


    render() {
        return (
            <div>
                <img onClick={this.imageHandler} src={this.state.clicked ? this.props.imgClicked : this.props.img } alt="" 
                    style={{width: '150px', height: '150px', display: 'flex', marginLeft: '10px'}}
                />
            </div>
        );
    }
}

