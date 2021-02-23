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

    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: ''
        }
    }

    button = (country) => {
        this.setState((state, props) =>  ({
            selectedCountry: country
        }))
    }


    render() {
        const list = profiles.map( (profile, index) => {
            return (
                <div style={ (this.state.selectedCountry == profile.country)? {...cardStyle, backgroundColor: 'lightblue'} : cardStyle } key={index}>
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
               <button 
                    onClick={() => this.button('Reset')} 
                    style={(this.state.selectedCountry == 'Reset')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Reset</button>            
                <button 
                    onClick={() => this.button('England')} 
                    style={(this.state.selectedCountry == 'England')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>England</button>
                <button 
                    onClick={() => this.button('USA')} 
                    style={(this.state.selectedCountry == 'USA')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>USA</button>
                <button 
                    onClick={() => this.button('Malaysia')} 
                    style={(this.state.selectedCountry == 'Malaysia')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Malaysia</button>
               <button 
                    onClick={() => this.button('Germany')} 
                    style={(this.state.selectedCountry == 'Germany')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Germany</button>
               <button 
                    onClick={() => this.button('Sweden')} 
                    style={(this.state.selectedCountry == 'Sweden')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Sweden</button>                                        
               <button 
                    onClick={() => this.button('Nigeria')} 
                    style={(this.state.selectedCountry == 'Nigeria')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Nigeria</button>
               <button 
                    onClick={() => this.button('Italy')} 
                    style={(this.state.selectedCountry == 'Italy')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Italy</button>
               <button 
                    onClick={() => this.button('Scotland')} 
                    style={(this.state.selectedCountry == 'Scotland')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Scotland</button>
               <button 
                    onClick={() => this.button('Kazakhstan')} 
                    style={(this.state.selectedCountry == 'Kazakhstan')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Kazakhstan</button>
               <button 
                    onClick={() => this.button('Russia')} 
                    style={(this.state.selectedCountry == 'Russia')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Russia</button>                                                                                                 
               <button 
                    onClick={() => this.button('Catalonia')} 
                    style={(this.state.selectedCountry == 'Catalonia')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Catalonia</button>
               <button 
                    onClick={() => this.button('France')} 
                    style={(this.state.selectedCountry == 'France')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>France</button>
               <button 
                    onClick={() => this.button('Israel')} 
                    style={(this.state.selectedCountry == 'Israel')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Israel</button>
               <button 
                    onClick={() => this.button('Brazil')} 
                    style={(this.state.selectedCountry == 'Brazil')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Brazil</button>                                                                                
               <button 
                    onClick={() => this.button('Taiwan')} 
                    style={(this.state.selectedCountry == 'Taiwan')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Taiwan</button>
               <button 
                    onClick={() => this.button('Turkey')} 
                    style={(this.state.selectedCountry == 'Turkey')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Turkey</button>
               <button 
                    onClick={() => this.button('Norway')} 
                    style={(this.state.selectedCountry == 'Norway')? {backgroundColor: 'lightblue'} : {backgroundColor: 'white'}}>Norway</button>                                                           
                {list}
            </div>
        )
    }
}