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

class CurrentTime extends React.Component {
  render() {
    return(
      // Will pull time from the World clock webpage, update and render
      //  continuously.
      {}
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

      </div>
    );
  }
}



//====================================================================//

ReactDOM.render(
  <ShowHeader />,
  document.getElementById('header')
);
