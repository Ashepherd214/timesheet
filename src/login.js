import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import RSILogoSmall from './img/RSILogoSmall.png';


class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  login() {
    // API Code/action here
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
      <div className="body" id="loginBody">
        <div>
          <h4>Login</h4>
          <label>Username</label>
          <input type="text" name="username" onChange={this.onChange}/>
          <label>Password</label>
          <input type="password" name="password" onChange={this.onChange}/>
          <input type="submit" value="Login" onClick={this.login}/>
        </div>
      </div>
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
      <header className="headerBanner">
        <div className="headerElement1">
          <img className="logoContainer" src={RSILogoSmall} alt="logo" />
        </div>
        <div className="dateTimeContainer">
          <div className="headerElement2"><CurrentTime  /> </div>
          <div className="headerElement3"><GetDate /> </div>
        </div>

      </header>
    );
  }
}




//====================================================================//

ReactDOM.render(
  <div>
    <ShowHeader />

    <LoginForm />
  </div>,
  document.getElementById('main')
);
