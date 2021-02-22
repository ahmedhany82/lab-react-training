import React from 'react';

const GreetingsStyle = {
    border: "thin solid black",
    textAlign: 'left',
    padding: '5px 10px',
    margin: '5px 10px'
}

const Greetings = (props) => {
    const language = props.lang;
    let greeting;
    switch(language) {
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello"
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
    }
    return (
        <div style={GreetingsStyle}>
            <p>{greeting} {props.children}</p>
        </div>
        )    
}


export default Greetings;