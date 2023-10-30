import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let welcomeMessage;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      welcomeMessage = <div style={{ color: 'white' }}>환영합니다!</div>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      welcomeMessage = <div style={{ color: 'white' }}>로그인 해주세요!</div>;
    }

    return (
      <div style={{ display: 'flex' }}>
        {button}
        {welcomeMessage}
      </div>
    );
  }
}

function LoginButton(props) {
  return (
    <button
      style={{
        marginRight: '20px',
        border: '1px solid black',
        width: '70px',
        height: '25px',
        borderRadius: '11px',
      }}
      onClick={props.onClick}
    >
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button
      style={{
        marginRight: '20px',
        border: '1px solid black',
        width: '70px',
        height: '25px',
        borderRadius: '11px',
      }}
      onClick={props.onClick}
    >
      로그아웃
    </button>
  );
}

export default LoginControl;
