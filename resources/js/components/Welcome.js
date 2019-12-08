import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            
                <div>
                    <img className="img-fluid" src="img/background_img.jpg"></img>
                    <br /><br />
                    <h1>Front.End</h1>
                    <h4>Developers Conference 2019</h4>
                    <h4>Edinburgh 15th - 17th November</h4>
                </div>

        );
    }
}

if (document.getElementById('welcome')) 
{
    ReactDOM.render(<Example />, document.getElementById('welcome'));
}
