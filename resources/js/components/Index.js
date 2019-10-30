import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">I'm a React component added to Laravel project!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('react_js')) {
    ReactDOM.render(<Example />, document.getElementById('react_js'));
}
