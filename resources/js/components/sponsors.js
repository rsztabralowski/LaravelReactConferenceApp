import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Sponsors extends Component {
    render() {
        return (
            
            <section className="container mb-5 pb-5">
            <h4 className="logo_font mb-4">Sponsors</h4>
            <div className="row align-items-center">
              <div className="col mb-4"><img className="d-block m-auto" src="img/intel.png" alt="sponsors logo" /></div>
              <div className="col mb-4"><img className="d-block m-auto" src="img/apple.png" alt="sponsors logo" /></div>
              <div className="col mb-4"><img className="d-block m-auto" src="img/paypal.png" alt="sponsors logo" /></div>
              <div className="col mb-4"><img className="d-block m-auto" src="img/wordpress.jpg" alt="sponsors logo" /></div>
            </div>
          </section>

        );
    }
}

if (document.getElementById('sponsors')) 
{
    ReactDOM.render(<Sponsors />, document.getElementById('sponsors'));
}
