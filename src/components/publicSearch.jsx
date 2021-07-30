import React, { Component } from 'react';
import './public.css';
import ImageTem from './imagesTemplate';
import ElseTem from './elseTemplate';
export default class publicSearch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="public">
                <ElseTem></ElseTem>
                {/* <ImageTem></ImageTem> */}
            </div>
        );
    }
}
