import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header front-title">Front.End</div>
                            <div className="card-body developers-subtitle">Developers Conference</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('welcome')) 
{
    ReactDOM.render(<Example />, document.getElementById('welcome'));
}
