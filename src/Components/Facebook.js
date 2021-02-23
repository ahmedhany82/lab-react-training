import React, { Component } from 'react'
import profiles from '../data/berlin.json';


const cardStyle = {
    width: '300px',
    height: '160px',
    border: "thin solid black",
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px'
}

export default class Facebook extends Component {
 
    render() {
        const list = profiles.map( (profile, index) => {
            return (
                <div style={cardStyle} key={index}>
                    <img src={profile.img} alt="" style={{width: '150px', height: '150px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                        <p style={{margin: '5px'}}><strong>First name: </strong>{profile.firstName}</p>
                        <p style={{margin: '5px'}}><strong>Last name: </strong>{profile.lastName}</p>
                        <p style={{margin: '5px'}}><strong>Country: </strong>{profile.country}</p>
                        <p style={{margin: '5px'}}><strong>Type: </strong>{profile.isStudent? "Student": "Teacher"}</p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}
