import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RSILogoSmall from './img/RSILogoSmall.png';




class DrawRow extends React.Component {
  render() {
    const project = this.props.project;

    return(
      //Should be able to render rows based on Project Numbers selected + 1 empty
      // for when teh add button is clicked to give the user a chance to add
      // a project number. If user attempts to save or make change while the
      // new row is still blank, user will be informed the row will be deleted.
      <tr>
        <td>{project.number}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

class  DrawTable extends React.Component {
  render() {
    const rows = [];

    this.props.projects.forEach((project) => {
      if (project.description) {
        rows.push(
          <DrawRow
            project={project}
            key={project.number}
            descriptor={project.description} />
        );
      }
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Project Number</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
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
        <div className="headerElement1">
          <img className="headerElement1" src={RSILogoSmall} alt="logo" />
        </div>
        <div className="headerElement2"><CurrentTime  /> </div>
        <div className="headerElement3"><GetDate /> </div>
      </div>
    );
  }
}


class ShowTable extends React.Component {
  render() {
    return(
      <div>
        <DrawTable projects={this.props.projects} />
      </div>
    );
  }
}

const PROJECTS = [
  {number: '216068', description: 'RC-135 L3-Link Arlington', open: true, user: 'Aaron'},
  {number: '216033', description: 'A400M L3-UK', open: true, user: 'Aaron'},
  {number: '216092', description: 'R7 L3-UK', open: true, user: 'Aaron'}
];
//====================================================================//

ReactDOM.render(
  <div>
    <ShowHeader />

    <ShowTable projects={PROJECTS} />
  </div>,
  document.getElementById('header')
);
