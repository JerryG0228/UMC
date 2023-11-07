import React from 'react';
import { StyledInput, InfoForm, InfoTitle, WarningMsg, SubmitBtn, NotCorrectBtn } from './InfoBoxStyled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InfoBox() {
  const [email, setEmail] = useState('');
  const [showEmailErr, setshowEmailErr] = useState(false);
  const [pw, setPw] = useState('');
  const [showPwErr, setshowPwErr] = useState(false);
  const [correct, setCorrect] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(e.target.value)) setshowEmailErr(true);
    else setshowEmailErr(false);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);

    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!pwRegex.test(e.target.value)) setshowPwErr(true);
    else setshowPwErr(false);
  };

  useEffect(() => {
    if (!showEmailErr && !showPwErr && email.trim() !== '' && pw.trim() !== '') {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [showEmailErr, showPwErr, email, pw]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 제출눌렀을때 새로고침이 되지않게 설정
    console.log('Email:', email);
    console.log('Password:', pw);
    alert('로그인 완료!');
    navigate('/');
  };

  return (
    <div>
      <InfoForm className='info-form' onSubmit={handleSubmit}>
        <InfoTitle for='email-input'>이메일 주소</InfoTitle>
        <StyledInput
          id='email-input'
          type='email'
          placeholder='아메일을 입력하세요'
          value={email}
          onChange={handleEmailChange}
        />
        {showEmailErr ? <WarningMsg>올바른 이메일을 입력해주세요.</WarningMsg> : <WarningMsg>&nbsp;</WarningMsg>}

        <InfoTitle for='pw-input'>비밀번호</InfoTitle>
        <StyledInput
          id='pw-input'
          type='password'
          placeholder='영문, 숫자, 특수문자 포함 8자 이상'
          value={pw}
          onChange={handlePwChange}
        />
        {showPwErr ? <WarningMsg>올바른 비밀번호를 입력해주세요.</WarningMsg> : <WarningMsg>&nbsp;</WarningMsg>}
        {correct ? <SubmitBtn type='submit'>확인</SubmitBtn> : <NotCorrectBtn disabled>확인</NotCorrectBtn>}
      </InfoForm>
    </div>
  );
}
