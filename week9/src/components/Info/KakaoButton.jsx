import React from 'react';
import kakaoImg from './kakaoImg.png';
import styled from 'styled-components';

const KakaoBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin-top: 20px;
  margin-left: 125px;
`;

export default function KakaoButton() {
  const K_REST_API_KEY = process.env.REACT_APP_API_KEY;
  const K_REDIRECT_URI = 'http://localhost:3000/oauth';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const gotokakao = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div>
      <KakaoBtn onClick={gotokakao}>
        <img src={kakaoImg} alt='카카오버튼' style={{ width: '35vh' }} />
      </KakaoBtn>
    </div>
  );
}
