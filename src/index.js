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


class DrawTable extends React.Component {
  render() {
    const project = this.props.project;
    const description = project.description :
      <span style={{color: 'white'}}>
        {project.description}
      </span>;

    return(
      //Should be able to render rows based on Project Numbers selected + 1 empty
      // for when teh add button is clicked to give the user a chance to add
      // a project number. If user attempts to save or make change while the
      // new row is still blank, user will be informed the row will be deleted.
      <tr>
        <td>{project}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

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
  constructor() {
    super();

    var today = new Date(),
    numericalDate = (today.getMonth() + 1) + '/' + today.getDate() +  '/' + today.getFullYear();

    this.state = {
      date: numericalDate
    };
  }
  render() {
    return(
      // Pulls date from World clock, updates and renders new when needed.
      <h1>{this.state.date}</h1>
    );
  }
}

class ShowHeader extends React.Component {
  render() {
    return(
      // Will render Menu button, RSi Logo, Time and Date Respectively
      // on a header banner that persists throughout pages.
      <div className="headerBanner">
        <div className="headerElement1"><CurrentTime  /> </div>
        <div className="headerElement2"><GetDate /> </div>
      </div>
    );
  }
}

class ShowChart extends React.Component {
  render() {
    return(

    );
  }
}

//====================================================================//

ReactDOM.render(
  <ShowHeader />,
  document.getElementById('header')
);
