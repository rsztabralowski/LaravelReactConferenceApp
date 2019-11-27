import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Eschedule extends Component {
    render() {
        return (
            
            
        <div className="container">
            <div>
              <h2>Day 1 - React</h2>
              <div>
                <ul>
                  <li>08:30 - 09:20 Tea and Coffee</li>
                  <li>09:30 - 12:30 React part 1</li>
                  <li>13:00 - 14:20 Lunch</li>
                  <li>14:30 - 17:00 React part 2</li>
                </ul>

                <a href="index.html">READ MORE</a>
              </div>
            </div>
            
            <div>
              <h2>Day 2 - CSS3 and Sass</h2>
              <div>
                <ul>
                  <li>08:30 - 09:20 Tea and Coffee</li>
                  <li>09:30 - 12:30 CSS3</li>
                  <li>13:00 - 14:20 Lunch</li>
                  <li>14:30 - 17:00 Sass</li>
                </ul>
                
                <a href="index.html">READ MORE</a>
              </div>
            </div>
           
            <div>
              <h2>Day 3 - Layout and Media</h2>
              <div>
                <ul>
                  <li>08:30 - 09:20 Tea and Coffee</li>
                  <li>09:30 - 12:30 Layout</li>
                  <li>13:00 - 14:20 Lunch</li>
                  <li>14:30 - 17:00 Trends</li>
                </ul>
                
                <a href="index.html">READ MORE</a>
              </div>
            </div>
        </div>
        );
    }
}

if (document.getElementById('eschedule')) 
{
    ReactDOM.render(<Eschedule />, document.getElementById('eschedule'));
}
