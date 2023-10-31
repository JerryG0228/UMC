import React, { useState } from 'react';
import * as S from './LoginControlStyled';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  let welcomeMessage;

  if (isLoggedIn) {
    button = <S.loginBtn onClick={handleLogoutClick}>로그아웃</S.loginBtn>;
    welcomeMessage = <S.welMsg>환영합니다!</S.welMsg>;
  } else {
    button = <S.loginBtn onClick={handleLoginClick}>로그인</S.loginBtn>;
    welcomeMessage = <S.welMsg>로그인 해주세요!</S.welMsg>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {button}
      {welcomeMessage}
    </div>
  );
}

export default LoginControl;
