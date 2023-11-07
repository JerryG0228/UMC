import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLoginBtn } from './LoginBtnStyled';

export default function LoginBtn() {
  const navigate = useNavigate();

  const goLoginPage = () => {
    navigate('/loginpage');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledLoginBtn onClick={goLoginPage}>로그인</StyledLoginBtn>;
    </div>
  );
}
