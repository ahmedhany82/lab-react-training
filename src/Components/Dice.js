import React, { Component } from 'react'

export default class Dice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgIndex: Math.floor(Math.random() * (7 - 1) + 1)
        }
    }

    imageHandler = () => {
        this.setState((state, props) =>  ({
            imgIndex: 0
        }))
        setTimeout(() => {
            this.setState((state, props) => ({
                imgIndex: Math.floor(Math.random() * (5 - 1) + 1)
            }))
        }, 1000)
    }


    render() {
        const images = ['/img/dice-empty.png',
                        '/img/dice1.png',
                        '/img/dice2.png',
                        '/img/dice3.png',
                        '/img/dice4.png',
                        '/img/dice5.png',
                        '/img/dice6.png']
        return (
            <div>
                <img onClick={this.imageHandler} src={images[this.state.imgIndex]} alt="" 
                    style={{width: '150px', height: '150px', display: 'flex', marginLeft: '10px'}}
                />
            </div>
        );
    }
}
