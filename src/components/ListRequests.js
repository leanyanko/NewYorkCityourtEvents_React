import React, { Component } from 'react';

import { Row, Col } from 'react-flexbox-grid';
import './ListRequests.css';


class ListRequests extends Component {
    constructor() {
        super();
    
        this.mapList.bind(this);
    }
    
    mapList() {
        if(!this.props.list) return;
        return this.props.list.map((block, i) => {
            return (<Col key={i} xs><h2>{block.agency_name}</h2>
                                    <p>{block.address_to_request ? block.address_to_request : "No address information"}</p>
                                    <p>{block.end_date ? block.end_date : "Not finished yet"}</p></Col>);
        });
    }


    render() {
        return(<div>
            <Row>
                { this.mapList() }
            </Row>
            </div>);
    }
}

export default ListRequests;