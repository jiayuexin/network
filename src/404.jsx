import React from 'react';

export default class F404 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a
                    onClick={() => {
                        this.props.history.push('/NetworkDisk');
                    }}
                >
                    去首页
                </a>
            </div>
        );
    }
}
