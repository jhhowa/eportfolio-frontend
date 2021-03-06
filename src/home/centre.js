import React from 'react';
import Searchbar from '../common/searchbar.js'
import './centre.css'

class Centre extends React.Component {
    render() {
        return(
            <div className="centralContainer">
                <img alt="CircleSpace" src='./Logo.svg' />
                <div className="text">
                    <h3>Welcome to CircleSpace! Search below for people, projects, tags, etc.</h3>
                </div>
                <div className="searchArea">
                    <Searchbar />
                </div>                
            </div>
        )
    }
}

export default Centre;