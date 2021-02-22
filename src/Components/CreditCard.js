import React from 'react';

export default function CreditCard(prop) {
    const cardLogo = (prop.type === "Visa")? '/img/visa.png' : '/img/master-card.svg'
    const cardNumber = '* * * * * * * * * * * *' + prop.number.slice(-4)
    const backColor = prop.bgColor;
    const textColor = prop.color;
    
    return (
        <div style={
            {
            backgroundColor: backColor,
            color: textColor,
            margin: '10px',
            padding: '25px',
            width: '300px',
            height: '150px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            }
        }>
            <img src={cardLogo} style={{ width: '50px', height: '25px', alignSelf: 'flex-end', marginBottom: '10px'  }} alt=""/>
            <h2>{cardNumber}</h2>
            <div style={
                {
                    textAlign: 'left',
                    paddingBottom: '10px'
                }
            }>
                <p style={{margin: '0px'}}>Expires {prop.expirationMonth}/{prop.expirationYear} &nbsp; &nbsp; &nbsp;{prop.bank}</p>
                <p style={{margin: '0px'}}>{prop.owner}</p>
            </div>
        </div>
    )
}
