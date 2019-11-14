import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Attendees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        list: []
      };
    }
  
    componentDidMount() {
      fetch("../eventbrite/eventbrite.php")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              list: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, list } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <p className="total">{list.total}</p>
                <ul>
                {list.attendees.map(attendee => (
                    <li key={attendee}>
                        {attendee}
                    </li>
                    ))}
                </ul>
          </div>
        );
      }
    }
  }

if (document.getElementById('attendees')) 
{
    ReactDOM.render(<Attendees />, document.getElementById('attendees'));
}
