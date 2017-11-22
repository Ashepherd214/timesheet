import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ProjectNumber extends React.Component {
  render() {
    return (
      // Pull project numbers/ids from Server
      {}
    );
  }
}

class WBS extends React.Component {
  render() {
    return(
      // Finds available WBSs based on the projects number
        {}
    );
  }
}


/*function CurrentTime() {
  const element = (
    <h1>{new Date().toLocaleTimeString()}</h1>
  );
}*/

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      // Will pull time from the World clock webpage, update and render
      //  continuously.
        <h1>{this.state.date.toLocaleTimeString()}</h1>
    );
  }
}

class GetDate extends React.Component {
  render() {
    return(
      // Pulls date from World clock, updates and renders new when needed.
      {}
    );
  }
}

class ShowHeader extends React.Component {
  render() {
    return(
      // Will render Menu button, RSi Logo, Time and Date Respectively
      // on a header banner that persists throughout pages.
      <div className="headerBanner">
        <CurrentTime />
      </div>
    );
  }
}



//====================================================================//

ReactDOM.render(
  <ShowHeader />,
  document.getElementById('header')
);
