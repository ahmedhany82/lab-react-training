import React from 'react';

const IdCardStyle = {
    display: 'flex',
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '20%',
    border: "thin solid black",
    padding: '10px',
    margin: '10px'
}

const IdCardStyleText = {
    marginLeft: '20px'
}

const IdCard = (props) => {
    console.log(props.birth.toDateString());
    return (
        <div style={IdCardStyle}>
        <img src={props.picture} style={{ width: '300px', height: '250px' }} alt=""/>
        <div style={IdCardStyleText}>
            <h3>First name: {props.firstName}</h3>
            <h3>Last name: {props.lastName}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Birth: {props.birth.toDateString()}</h3>
        </div>
    </div>
    )
}

export default IdCard;