import React, { Component } from 'react';

import { Row, Col } from 'react-flexbox-grid';
import './ListRequests.css';
import Block from './Block';


class ListRequests extends Component {
    constructor() {
        super();
        this.mapList.bind(this);
    }

    
    mapList() {
        if(!this.props.list) return;
        return this.props.list.map((block, index) => {
            return (<Block className="col-xs" key={index} 
                                              index={index} 
                                              expand="collapse"
                                              block={block} />);
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