import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Events extends Component {
    render() {
        return (
        <div className="card-deck">    
        <div className="card mb-5">
          <img className="card-img-top" src="img/react2.png" alt="Card image cap"></img>
          <div className="card-body">
            <h4 className="card-title">React</h4>
            <div className="row card-text bg-light">
              <div className="col-6">Location</div>
              <div className="col-6">Hall 4</div>
            </div>
            <div className="row card-text bg-light">
              <div className="col-6">Date</div>
              <div className="col-6">15th November</div>
            </div>
            <div className="row card-text bg-light">
              <div className="col-6">Time</div>
              <div className="col-6">1pm</div>
            </div>
            <div className="row card-text bg-light mb-3">
              <div className="col-6">Duration</div>
              <div className="col-6">2 hours</div>
            </div>
            
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sunt illum ab recusandae libero, enim repudiandae
                consequuntur aliquid, quam laborum. Mollitia maiores ratione rem
                consequuntur nihil, delectus modi facere odio voluptates odit
                accusantium hic neque porro magnam, perspiciatis ullam.</p>
          </div>

          <div className="card-body">
              <h4>Keynote Speakers</h4>
               
                
                <div className="media">
                  <div className="media-left media-middle">
                    <img className="mr-4 rounded-circle" src="img/woman.jpg" alt="keynote speaker 1" width="64px.toString()" height="64px.toString()"/>
                  </div>
                  <div className="media-body">
                    <h5>Alice Fox</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo amet rerum. Ipsam, alias voluptas! Corporis illum veritatis porro dolor.</p>
                  </div>
                </div>
                
                
                
                <div className="media">
                  <div className="media-left media-middle">
                      <img className="mr-4 rounded-circle" src="img/man.jpg" alt="keynote speaker 2" width="64px.toString()" height="64px.toString()"/>
                  </div>
                  <div className="media-body">
                    <h5>Steve Lynch</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo amet rerum. Ipsam, alias voluptas! Corporis illum veritatis porro dolor.</p>
                  </div>
                </div>
                  
                
                <div className="text-center">
                  <a className="btn btn-primary" type="button" href="https://www.eventbrite.co.uk/e/frontend-developers-conference-tickets-81871677391">BOOK NOW</a>
                </div>
          </div>

          <div className="card-footer text-center">
            <button className="btn btn-primary" type="button">Read More</button>
          </div>

      </div>

      <div className="card mb-5">
          <img className="card-img-top" src="img/css3_2.png" alt="Card image cap"></img>
          <div className="card-body">
            <h4 className="card-title">CSS and Sass</h4>
            <div className="row card-text bg-light">
                <div className="col-6">Location</div>
                <div className="col-6">Hall 2</div>
              </div>
              <div className="row card-text bg-light">
                <div className="col-6">Date</div>
                <div className="col-6">16th November</div>
              </div>
              <div className="row card-text bg-light">
                <div className="col-6">Time</div>
                <div className="col-6">3pm</div>
              </div>
              <div className="row card-text bg-light mb-3">
                <div className="col-6">Duration</div>
                <div className="col-6">3 hours</div>
              </div>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                  architecto sunt illum ab recusandae libero, enim repudiandae
                  consequuntur aliquid, quam laborum. Mollitia maiores ratione rem
                  consequuntur nihil, delectus modi facere odio voluptates odit
                  accusantium hic neque porro magnam, perspiciatis ullam.</p>
          </div>

          <div className="card-body">
              <h4>Keynote Speakers</h4>
               
                
                <div className="media">
                  <div className="media-left media-middle">
                    <img className="mr-4 rounded-circle" src="img/man.jpg" alt="keynote speaker 1" width="64px.toString()" height="64px.toString()"/>
                  </div>
                  <div className="media-body">
                    <h5>James Boyd</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo amet rerum. Ipsam, alias voluptas! Corporis illum veritatis porro dolor.</p>
                  </div>
                </div>
                
                
                
                <div className="media">
                  <div className="media-left media-middle">
                      <img className="mr-4 rounded-circle" src="img/woman.jpg" alt="keynote speaker 2" width="64px.toString()" height="64px.toString()"/>
                  </div>
                  <div className="media-body">
                    <h5>Clare Brown</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo amet rerum. Ipsam, alias voluptas! Corporis illum veritatis porro dolor.</p>
                  </div>
                </div>
                  
                
                <div className="text-center">
                  <a className="btn btn-primary" type="button" href="https://www.eventbrite.co.uk/e/frontend-developers-conference-tickets-81871677391">BOOK NOW</a>
                </div>
          </div>

          <div className="card-footer text-center">
            <button className="btn btn-primary" type="button">Read More</button>
          </div>
        </div>

        
        <div className="card mb-5">
          <img className="card-img-top" src="img/layout2.jpg" alt="Card image cap"></img>
          <div className="card-body">
            <h4 className="card-title">Layouts and Media</h4>
            <div className="row card-text bg-light">
                <div className="col-6">Location</div>
                <div className="col-6">Hall 1</div>
              </div>
              <div className="row card-text bg-light">
                <div className="col-6">Date</div>
                <div className="col-6">17th November</div>
              </div>
              <div className="row card-text bg-light">
                <div className="col-6">Time</div>
                <div className="col-6">1pm</div>
              </div>
              <div className="row card-text bg-light mb-3">
                <div className="col-6">Duration</div>
                <div className="col-6">2 hours</div>
              </div>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                  architecto sunt illum ab recusandae libero, enim repudiandae
                  consequuntur aliquid, quam laborum. Mollitia maiores ratione rem
                  consequuntur nihil, delectus modi facere odio voluptates odit
                  accusantium hic neque porro magnam, perspiciatis ullam.</p>
          </div>

          <div className="card-body">
              <h4>Keynote Speakers</h4>
               
                
                <div className="media">
                  <div className="media-left">
                    <img className="mr-4 rounded-circle" src="img/man.jpg" alt="keynote speaker 1" width="64px.toString()" height="64px.toString()"/>
                  </div>
                  <div className="media-body">
                    <h5>Simon Duvet</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo amet rerum. Ipsam, alias voluptas! Corporis illum veritatis porro dolor.</p>
                  </div>
                </div>
                  
                
                <div className="text-center">
                  <a className="btn btn-primary" type="button" href="https://www.eventbrite.co.uk/e/frontend-developers-conference-tickets-81871677391" target="_blank">BOOK NOW</a>
                </div>
          </div>

          <div className="card-footer text-center">
            <button className="btn btn-primary" type="button">Read More</button>
          </div>

        </div>
      </div>

        );
    }
}

if (document.getElementById('events')) 
{
    ReactDOM.render(<Events />, document.getElementById('events'));
}
