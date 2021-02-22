import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';

function App() {
  return (
    <div className="App">
        <h1 className="App-header">IdCard</h1>
        <IdCard lastName='Doe'
                firstName='John'
                gender='male'
                height={178}
                birth={new Date("1992-07-14")}
                picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard
                lastName='Delores '
                firstName='Obrien'
                gender='female'
                height={172}
                birth={new Date("1988-05-11")}
                picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        <h1 className="App-header">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
