import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    return (
        <div style={{
            display: 'flex',
            // justifyContent: 'center',
            marginLeft: '350px',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'navy',
            color: 'white',
            margin: '5px',
            height: '200px',
            borderRadius: '10px'
        }}>
            <img src={props.img} style={{ marginLeft: '560px', width: '150px', height: '150px', borderRadius: '50%'}} alt=""/>
            <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <p style={{ margin: '15px'}}>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p style={{ margin: '15px'}}>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
