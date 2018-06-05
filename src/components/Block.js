import React, { Component } from 'react';

import { Row, Col } from 'react-flexbox-grid';
import './ListRequests.css';
import classNames from 'classnames';
import './Blocks.css';


class ListRequests extends Component {
    constructor() {
        super();
        this.handleClick.bind(this);
        this.state = {
            expand: 'collapse',
            collapse: true
        }
    }

 
    
    handleClick(index) {
        console.log(index);
        this.setState({ expand: this.state.expand && this.state.expand === 'expand' ? 'collapse' : 'expand' });
    }

    expand() {
       // console.log("expand");
        return<div> {this.state.expand == 'expand' ? 
        <div>
            <p>Contact: {this.props.block.contact_name? this.props.block.contact_name : "No contact information"}</p>
            <p>Phone: { this.props.block.contact_phone ? this.props.block.contact_phone : ""}</p>
            <p>Requested: {this.props.block.start_date ? 
                                        new Intl.DateTimeFormat('en-GB', { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: '2-digit' 
                                   }).format(Date.parse(this.props.block.start_date))
                : "No information"}</p>
            <p>Pin: {this.props.block.pin ? this.props.block.pin : "No information"}</p>
         </div>: ""}</div>
    }

    render() {
        const expand = this.expand();
        return(
            <div xs 
                className={classNames({'flex-container': true, expand: this.state.expand === 'expand', 'col-xs': this.state.expand === 'collapse', collapse: this.state.expand === 'collapse'})}          
                onClick={() => this.handleClick(this.props.index)}>

                    <h2>{this.props.block.agency_name}</h2>
                    <p>{this.props.block.address_to_request ? this.props.block.address_to_request : "No address information"}</p>
                    <p>{this.props.block.end_date ? 
                        new Intl.DateTimeFormat('en-GB', { 
                                              year: 'numeric', 
                                              month: 'long', 
                                              day: '2-digit' 
                                     }).format(Date.parse(this.props.block.end_date)) : "Not finished yet"}</p>
                    {expand}
            </div>
        );
    }
}

export default ListRequests;