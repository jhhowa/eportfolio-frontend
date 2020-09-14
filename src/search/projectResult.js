import React from "react";
import "./search.css";


export default class ProjectResult extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="searchResult">
                <img src={this.props.project.image} alt={this.props.project.name}/>
                <h3><a href={this.props.project.url}>{this.props.project.name}</a></h3>
                <p><strong>{this.props.project.author}</strong></p>
                <p>{this.props.project.info}</p>
                
            </div>
        )
    }

}